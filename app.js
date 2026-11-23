/* Lógica de la presentación: portada, línea del tiempo, tarjetas y galería.
   Necesita que eventos.js se cargue antes (define EVENTS). */

const DECK_TITLE =
  "Enter the Survival Horror: Tres décadas de pesadillas con Resident Evil";

/* Escala fija: cada año ocupa siempre los mismos píxeles */
const PX_PER_YEAR = 48;
const PAD = 400; // margen a cada lado de la pista

// Orden cronológico. sort() es estable: los eventos de un mismo año
// conservan el orden en que aparecen en eventos.js.
EVENTS.sort((a, b) => a.year - b.year);

/* ============================================================ */
const $ = (id) => document.getElementById(id);
const track = $("track"),
  viewport = $("viewport");
let current = 0,
  positions = [],
  slots = [], // slots[i] = { n, total }: posición del evento dentro de su año
  yearOf = [], // yearOf[i] = índice del círculo (año) al que pertenece el evento i
  dots = [],
  labels = [],
  fill;

// Un solo círculo por año: todos los eventos de un mismo año comparten
// su posición y su círculo; se recorren uno a uno con las flechas.
function groupByYear() {
  const groups = []; // [{ year, events: [índices] }], en orden cronológico
  EVENTS.forEach((e, i) => {
    let g = groups[groups.length - 1];
    if (!g || g.year !== e.year) groups.push((g = { year: e.year, events: [] }));
    g.events.push(i);
  });
  positions = [];
  slots = [];
  yearOf = [];
  groups.forEach((g, k) =>
    g.events.forEach((i, n) => {
      positions[i] = yearToX(g.year);
      slots[i] = { n: n + 1, total: g.events.length };
      yearOf[i] = k;
    }),
  );
  return groups;
}

function layout() {
  const y0 = EVENTS[0].year;
  const groups = groupByYear();
  const width = positions[positions.length - 1] + PAD;
  track.innerHTML = "";
  track.style.width = width + "px";

  const axis = document.createElement("div");
  axis.className = "axis";
  axis.style.width = width + "px";
  track.appendChild(axis);
  fill = document.createElement("div");
  fill.className = "axis-fill";
  track.appendChild(fill);

  const yN = EVENTS[EVENTS.length - 1].year;
  for (let y = Math.ceil(y0); y <= yN; y++) {
    const t = document.createElement("div");
    t.className = "tick";
    t.style.left = yearToX(y) + "px";
    t.innerHTML = "<span>" + y + "</span>";
    track.appendChild(t);
  }

  dots = [];
  labels = [];
  groups.forEach((g) => {
    const first = g.events[0],
      x = positions[first] + "px";
    const d = document.createElement("button");
    d.className = "dot";
    d.style.left = x;
    d.setAttribute(
      "aria-label",
      g.year + ": " + g.events.map((i) => EVENTS[i].title).join(" · "),
    );
    // Al pulsar un año se va a su primer evento
    d.addEventListener("click", () => go(first));
    const l = document.createElement("div");
    l.className = "dot-label";
    l.style.left = x;
    track.appendChild(l);
    track.appendChild(d);
    dots.push(d);
    labels.push(l);
  });
}

function yearToX(y) {
  return PAD + (y - EVENTS[0].year) * PX_PER_YEAR;
}

function render(animateCard) {
  const e = EVENTS[current];
  const center = viewport.clientWidth / 2;
  track.style.transform =
    "translateX(" + (center - positions[current]) + "px)";
  fill.style.width = positions[current] + "px";
  const k = yearOf[current];
  dots.forEach((d, i) => {
    d.classList.toggle("active", i === k);
    d.classList.toggle("past", i < k);
    labels[i].classList.toggle("active", i === k);
    if (i === k) d.setAttribute("aria-current", "step");
    else d.removeAttribute("aria-current");
  });
  $("counter").textContent =
    String(current + 1).padStart(2, "0") +
    " / " +
    String(EVENTS.length).padStart(2, "0");
  $("bar").style.width = (current / (EVENTS.length - 1)) * 100 + "%";
  $("next").disabled = current === EVENTS.length - 1;

  const fillCard = () => {
    const era = $("era");
    era.textContent = e.era || "";
    era.dataset.text = era.textContent; // las capas de color del efecto copian este texto
    if (animateCard) twitch(era);
    $("year").textContent = Math.floor(e.year);
    const { n, total } = slots[current],
      slot = $("yearSlot");
    slot.hidden = total === 1;
    slot.textContent =
      n + " de " + total + " eventos en " + Math.floor(e.year);
    $("evTitle").textContent = e.title;
    $("evText").textContent = e.text;
    const imgs = imagesOf(e);
    $("gallery").innerHTML = "";
    $("media").hidden = imgs.length === 0;
    $("slide").classList.toggle("has-media", imgs.length > 0);
    // Espera a conocer la proporción de cada imagen (normalmente ya está
    // precargada). Si mientras tanto se cambió de evento, no hace nada.
    const shown = current;
    Promise.all(imgs.map((im) => ratioOf(im.src))).then((ars) => {
      if (shown === current) fillGallery(imgs, ars, e);
    });
  };
  const slide = $("slide");
  if (!animateCard) {
    fillCard();
    return;
  }
  slide.classList.add("leaving");
  setTimeout(() => {
    fillCard();
    slide.classList.remove("leaving");
  }, 300);
}

// Normaliza las imágenes de un evento. Acepta:
//   images: [{ src, alt, caption }, …]  o  images: ["a.jpg", "b.jpg"]
//   image: "a.jpg", imageAlt, caption   (formato anterior, una sola imagen)
function imagesOf(e) {
  if (Array.isArray(e.images))
    return e.images.map((im) =>
      typeof im === "string" ? { src: im } : im,
    );
  return e.image
    ? [{ src: e.image, alt: e.imageAlt, caption: e.caption }]
    : [];
}

// Los vídeos (.mp4, .webm) se reproducen como un GIF: solos, en bucle y sin sonido.
const isVideo = (src) => /\.(mp4|webm|mov)$/i.test(src);

// Proporción (ancho / alto) de cada imagen o vídeo, leída al cargarlo.
// Se guarda por ruta, así cada archivo se mide una sola vez. Si no carga, usa 4:3.
const ratios = new Map();
function ratioOf(src) {
  if (!ratios.has(src))
    ratios.set(
      src,
      new Promise((resolve) => {
        const done = (w, h) => resolve(w && h ? w / h : 4 / 3);
        if (isVideo(src)) {
          const v = document.createElement("video");
          v.preload = "metadata";
          v.onloadedmetadata = () => done(v.videoWidth, v.videoHeight);
          v.onerror = () => done();
          v.src = src;
        } else {
          const im = new Image();
          im.onload = () => done(im.naturalWidth, im.naturalHeight);
          im.onerror = () => done();
          im.src = src;
        }
      }),
    );
  return ratios.get(src);
}

const GAP = 8, // separación entre piezas (igual que gap en .gallery y .gallery-row)
  CAP_H = 22, // alto aproximado de un pie de foto de una línea
  ROW_PENALTY = 0.92;

// Espacio libre para la galería: en escritorio, toda la columna derecha;
// en móvil (galería debajo del texto), lo que queda bajo la tarjeta.
function galleryBox() {
  const stage = document.querySelector(".stage"),
    card = $("card"),
    media = $("media");
  let h = stage.clientHeight;
  const stacked =
    media.getBoundingClientRect().top >=
    card.getBoundingClientRect().bottom - 1;
  if (stacked)
    h -= card.offsetHeight + parseFloat(getComputedStyle($("slide")).rowGap);
  return { w: media.clientWidth, h: Math.max(160, h - 8) };
}

// Elige cómo repartir las piezas en filas (sin cambiar su orden) para que
// ocupen la mayor área posible dentro de maxW × maxH. Prueba todos los
// cortes posibles: con n piezas hay 2^(n-1) maneras, pocas para una galería.
// En una fila con proporciones a, b, c y huecos g, el alto es (ancho - g) / (a + b + c),
// así que el alto total crece en línea recta con el ancho y se puede despejar.
function bestRows(ars, caps, maxW, maxH) {
  const n = ars.length;
  if (n > 12) {
    // Demasiadas combinaciones: filas de 4
    const rows = [];
    for (let i = 0; i < n; i += 4)
      rows.push([...Array(Math.min(4, n - i)).keys()].map((k) => i + k));
    return { rows, w: maxW };
  }
  let best = null;
  for (let mask = 0; mask < 1 << (n - 1); mask++) {
    const rows = [[0]];
    for (let i = 1; i < n; i++)
      if (mask & (1 << (i - 1))) rows.push([i]);
      else rows[rows.length - 1].push(i);
    const info = rows.map((r) => ({
      sum: r.reduce((s, i) => s + ars[i], 0),
      gaps: GAP * (r.length - 1),
    }));
    // alto total = a · ancho + b
    let a = 0,
      b = GAP * (rows.length - 1);
    info.forEach(({ sum, gaps }, k) => {
      a += 1 / sum;
      b += -gaps / sum + (rows[k].some((i) => caps[i]) ? CAP_H : 0);
    });
    const w = Math.min(maxW, (maxH - b) / a);
    let area = 0;
    info.forEach(({ sum, gaps }) => {
      area += w > gaps ? (w - gaps) ** 2 / sum : -Infinity;
    });
    // Cada fila extra tiene que ganar más de un 8 % de área para compensar:
    // en un empate se prefieren menos filas, que se ven más ordenadas.
    area *= ROW_PENALTY ** (rows.length - 1);
    if (!best || area > best.area) best = { rows, w, area };
  }
  return best;
}

function fillGallery(imgs, ars, e) {
  const gallery = $("gallery");
  gallery.innerHTML = "";
  const box = galleryBox();
  const { rows, w } = bestRows(
    ars,
    imgs.map((im) => !!im.caption),
    box.w,
    box.h,
  );
  gallery.style.width = Math.floor(w) + "px";
  rows.forEach((row) => {
    const line = document.createElement("div");
    line.className = "gallery-row";
    row.forEach((i) => {
      const im = imgs[i],
        ar = ars[i];
      const shot = document.createElement("figure");
      shot.className = "shot";
      shot.style.setProperty("--ar", ar);
      shot.appendChild(mediaElement(im, e));
      if (im.caption) {
        const cap = document.createElement("figcaption");
        cap.textContent = im.caption;
        shot.appendChild(cap);
      }
      line.appendChild(shot);
    });
    gallery.appendChild(line);
  });
  // Los pies de foto pueden ocupar más de una línea si la pieza es estrecha.
  // Si por eso la galería se pasa de alto, se estrecha un poco y se vuelve a medir.
  for (let k = 0, width = w; k < 4; k++) {
    const over = gallery.offsetHeight - box.h;
    if (over <= 1) break;
    width *= 1 - over / gallery.offsetHeight;
    gallery.style.width = Math.floor(width) + "px";
  }
}

function mediaElement(im, e) {
  const label = im.alt || e.title;
  if (isVideo(im.src)) {
    const v = document.createElement("video");
    v.src = im.src;
    v.autoplay = v.loop = v.muted = v.playsInline = true;
    v.setAttribute("aria-label", label);
    return v;
  }
  const img = document.createElement("img");
  img.src = im.src;
  img.alt = label;
  return img;
}

function go(i) {
  i = Math.max(0, Math.min(EVENTS.length - 1, i));
  if (i === current) return;
  current = i;
  render(true);
}

// Portada: se muestra al abrir y se vuelve a ella retrocediendo desde el primer evento.
const cover = $("cover"),
  app = document.querySelector(".app");
let onCover = true;

function showCover(show, focus = true) {
  onCover = show;
  cover.classList.toggle("gone", !show);
  cover.inert = !show;
  app.inert = show;
  if (show && focus) $("start").focus({ preventScroll: true });
  if (!show) twitch($("era")); // al entrar desde la portada, también da el tirón
}

// Tirones del texto de .era (ver estilos.css). "now" es el fuerte, al cambiar
// de evento; "soft" es el suave de fondo. Cada uno dura --era-tiron.
let twitchTimer;
function twitch(el, kind = "now") {
  el.classList.remove("twitch-now", "twitch-soft");
  void el.offsetWidth; // fuerza al navegador a notar el cambio y reiniciar la animación
  el.classList.add("twitch-" + kind);
  // Quita la clase al acabar el tirón con un temporizador (no con animationend,
  // que no llega si la animación no corre, p. ej. con "reducir movimiento").
  clearTimeout(twitchTimer);
  twitchTimer = setTimeout(
    () => el.classList.remove("twitch-now", "twitch-soft"),
    eraMs("--era-tiron", 550) + 50,
  );
}

// Lee un tiempo de estilos.css ("3s" o "550ms") y lo devuelve en milisegundos.
function eraMs(name, fallback) {
  const v = getComputedStyle($("era")).getPropertyValue(name).trim();
  const n = parseFloat(v);
  if (!n) return fallback;
  return v.endsWith("ms") ? n : n * 1000;
}

// Tirón suave cada --era-intervalo. Se vuelve a leer en cada vuelta, así que
// cambiarlo en estilos.css basta. No interrumpe un tirón fuerte en curso.
const eraIntervalMs = () => eraMs("--era-intervalo", 3000);
(function softLoop() {
  setTimeout(() => {
    const era = $("era");
    if (!onCover && !era.classList.contains("twitch-now")) twitch(era, "soft");
    softLoop();
  }, eraIntervalMs());
})();

const forward = () => (onCover ? showCover(false) : go(current + 1));
const back = () => {
  if (onCover) return;
  if (current === 0) showCover(true);
  else go(current - 1);
};

$("start").onclick = () => showCover(false);

document.addEventListener("keydown", (ev) => {
  if (["ArrowRight", "PageDown", " "].includes(ev.key)) {
    ev.preventDefault();
    forward();
  } else if (["ArrowLeft", "PageUp"].includes(ev.key)) {
    ev.preventDefault();
    back();
  } else if (ev.key === "Enter" && onCover) {
    ev.preventDefault();
    showCover(false);
  } else if (ev.key.toLowerCase() === "f") toggleFs();
  else if (onCover) return;
  else if (ev.key === "Home") go(0);
  else if (ev.key === "End") go(EVENTS.length - 1);
});
$("prev").onclick = back;
$("next").onclick = () => go(current + 1);

// Deslizar en pantallas táctiles
let sx = null;
document.addEventListener(
  "touchstart",
  (e) => {
    sx = e.touches[0].clientX;
  },
  { passive: true },
);
document.addEventListener("touchend", (e) => {
  if (sx === null) return;
  const dx = e.changedTouches[0].clientX - sx;
  if (Math.abs(dx) > 50) (dx < 0 ? forward : back)();
  sx = null;
});

function toggleFs() {
  try {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen().catch(() => {});
  } catch (_) {}
}
$("fs").onclick = toggleFs;

window.addEventListener("resize", () => {
  track.style.transition = "none";
  render(false);
  requestAnimationFrame(() => {
    track.style.transition = "";
  });
});

$("deckTitle").textContent = DECK_TITLE;

// Título de la portada: lo que va antes de ":" es el título (sus dos últimas
// palabras en rojo) y lo que va después, el subtítulo.
const [coverMain, coverSub = ""] = DECK_TITLE.split(/:\s*/);
const words = coverMain.split(" ");
const hl = document.createElement("span");
hl.textContent = words.slice(-2).join(" ");
$("coverTitle").append(words.slice(0, -2).join(" ") + " ", hl);
$("coverSub").textContent = coverSub;
showCover(true, false);
// Precarga las imágenes (y mide su proporción) para que no aparezcan con retraso al avanzar.
EVENTS.forEach((e) => imagesOf(e).forEach(({ src }) => ratioOf(src)));
layout();
render(false);
