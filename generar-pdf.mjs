// Genera "Resident Evil 30 años.pdf": abre index.html?pdf en Microsoft Edge sin
// ventana, captura cada diapositiva tal como se ve en pantalla (1600×900, al
// doble de resolución) y arma el PDF con esas imágenes, una por página.
//
// Uso, desde esta carpeta:   node generar-pdf.mjs
// Necesita Node 22 o superior e internet (para las fuentes de Google Fonts).
//
// Se usan capturas en vez de "imprimir" porque al imprimir el navegador vuelve
// a acomodar la página para el papel y cambia al diseño de pantallas angostas.

import { spawn } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const CARPETA = dirname(fileURLToPath(import.meta.url));
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const SALIDA = join(CARPETA, "Resident Evil 30 años.pdf");
const ANCHO = 1600, ALTO = 900; // tamaño de cada diapositiva en px
const ESCALA = 2; // resolución de las capturas (2 = 3200×1800)
const CALIDAD = 85; // calidad JPEG de las capturas
const PUERTO = 9333;

const espera = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------- Edge sin ventana, controlado por el protocolo de DevTools ----------
const perfil = mkdtempSync(join(tmpdir(), "re30-pdf-"));
const edge = spawn(EDGE, [
  "--headless",
  "--hide-scrollbars",
  "--mute-audio",
  `--remote-debugging-port=${PUERTO}`,
  `--user-data-dir=${perfil}`,
  `--window-size=${ANCHO},${ALTO}`,
  "about:blank",
]);

async function pestaña() {
  for (let i = 0; i < 100; i++) {
    try {
      const lista = await (await fetch(`http://127.0.0.1:${PUERTO}/json/list`)).json();
      const p = lista.find((t) => t.type === "page");
      if (p) return p.webSocketDebuggerUrl;
    } catch (_) {}
    await espera(200);
  }
  throw new Error("No se pudo conectar con Edge");
}

const ws = new WebSocket(await pestaña());
await new Promise((r, e) => ((ws.onopen = r), (ws.onerror = e)));
let sig = 0;
const pendientes = new Map();
ws.onmessage = (ev) => {
  const m = JSON.parse(ev.data);
  if (!m.id || !pendientes.has(m.id)) return;
  const { res, rej } = pendientes.get(m.id);
  pendientes.delete(m.id);
  m.error ? rej(new Error(m.error.message)) : res(m.result);
};
const cdp = (method, params = {}) =>
  new Promise((res, rej) => {
    const id = ++sig;
    pendientes.set(id, { res, rej });
    ws.send(JSON.stringify({ id, method, params }));
  });
const evaluar = async (expression) =>
  (await cdp("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true }))
    .result.value;

try {
  await cdp("Page.enable");
  await cdp("Emulation.setDeviceMetricsOverride", {
    width: ANCHO,
    height: ALTO,
    deviceScaleFactor: ESCALA,
    mobile: false,
  });
  await cdp("Page.navigate", { url: pathToFileURL(join(CARPETA, "index.html")).href + "?pdf" });

  // Espera a que modoPDF() (app.js) termine de armar las páginas
  let listo = false;
  for (let i = 0; i < 240 && !listo; i++) {
    await espera(250);
    listo = await evaluar("document.documentElement.hasAttribute('data-pdf-listo')").catch(() => false);
  }
  if (!listo) throw new Error("La presentación no terminó de armarse (¿falta internet?)");

  // Espera a que todas las imágenes estén decodificadas y toma la posición de cada página
  const tops = await evaluar(`
    Promise.all([...document.querySelectorAll('.pdf-paginas img')]
      .map((i) => i.decode().catch(() => {})))
    .then(() => new Promise((r) => setTimeout(r, 300)))
    .then(() => [...document.querySelectorAll('.pdf-pagina')]
      .map((p) => p.getBoundingClientRect().top + scrollY))`);

  const capturas = [];
  for (const [k, y] of tops.entries()) {
    const { data } = await cdp("Page.captureScreenshot", {
      format: "jpeg",
      quality: CALIDAD,
      captureBeyondViewport: true,
      clip: { x: 0, y, width: ANCHO, height: ALTO, scale: 1 },
    });
    capturas.push(Buffer.from(data, "base64"));
    process.stdout.write(`\rCapturando ${k + 1}/${tops.length}`);
  }
  process.stdout.write("\n");

  writeFileSync(SALIDA, pdfDeJpegs(capturas, ANCHO * 0.75, ALTO * 0.75));
  const mb = (capturas.reduce((s, b) => s + b.length, 0) / 1e6).toFixed(1);
  console.log(`Listo: ${SALIDA} (${capturas.length} páginas, ~${mb} MB)`);
} finally {
  ws.close();
  edge.kill();
  await espera(500);
  try {
    rmSync(perfil, { recursive: true, force: true });
  } catch (_) {}
}

// ---------- PDF mínimo: una imagen JPEG a página completa por página ----------
function tamañoJpeg(b) {
  for (let i = 2; i < b.length; ) {
    if (b[i] !== 0xff) { i++; continue; }
    const marca = b[i + 1];
    if (marca >= 0xc0 && marca <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marca))
      return { alto: b.readUInt16BE(i + 5), ancho: b.readUInt16BE(i + 7) };
    i += 2 + b.readUInt16BE(i + 2);
  }
  throw new Error("JPEG sin dimensiones");
}

function pdfDeJpegs(jpegs, anchoPt, altoPt) {
  const partes = [Buffer.from("%PDF-1.4\n%\xe2\xe3\xcf\xd3\n", "latin1")];
  const offsets = [];
  let pos = partes[0].length;
  const obj = (n, ...cuerpo) => {
    offsets[n] = pos;
    const b = Buffer.concat([
      Buffer.from(`${n} 0 obj\n`),
      ...cuerpo.map((c) => (Buffer.isBuffer(c) ? c : Buffer.from(c, "latin1"))),
      Buffer.from("\nendobj\n"),
    ]);
    partes.push(b);
    pos += b.length;
  };
  const kids = jpegs.map((_, i) => `${3 + i * 3} 0 R`).join(" ");
  obj(1, "<< /Type /Catalog /Pages 2 0 R >>");
  obj(2, `<< /Type /Pages /Kids [${kids}] /Count ${jpegs.length} >>`);
  jpegs.forEach((jpg, i) => {
    const [pag, cont, img] = [3 + i * 3, 4 + i * 3, 5 + i * 3];
    const { ancho, alto } = tamañoJpeg(jpg);
    const dibujo = `q ${anchoPt} 0 0 ${altoPt} 0 0 cm /Im0 Do Q`;
    obj(pag, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${anchoPt} ${altoPt}] ` +
      `/Resources << /XObject << /Im0 ${img} 0 R >> >> /Contents ${cont} 0 R >>`);
    obj(cont, `<< /Length ${dibujo.length} >>\nstream\n${dibujo}\nendstream`);
    obj(img,
      `<< /Type /XObject /Subtype /Image /Width ${ancho} /Height ${alto} ` +
        `/ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpg.length} >>\nstream\n`,
      jpg,
      "\nendstream");
  });
  const total = 3 + jpegs.length * 3;
  let xref = `xref\n0 ${total}\n0000000000 65535 f \n`;
  for (let n = 1; n < total; n++) xref += String(offsets[n]).padStart(10, "0") + " 00000 n \n";
  partes.push(Buffer.from(xref + `trailer\n<< /Size ${total} /Root 1 0 R >>\nstartxref\n${pos}\n%%EOF\n`));
  return Buffer.concat(partes);
}
