const EVENTS = [
  {
    year: 1989,
    era: "Sweet Home",
    title: "Hogar, dulce hogar",
    text: "Fue un <i>tie-in</i> de la película homónima. Un equipo de grabación de 5 personas entra a una casa embrujada y lucha por salir. Plantea mecánicas como inventario limitado, mapas intrincados, enemigos aterradores, etc.",
    platforms: ["Famicom"],
    images: [
      {
        src: "Images/sweethome1989.jpg",
        caption: "Portada original de Sweet Home (1989)",
      },
      { src: "Images/sweet_home_death.webp" },
      { src: "Images/doorscreen.gif" },
    ],
  },
  {
    year: 1996,
    era: "Resident Evil",
    title: "¿Huésped maldito o riesgo biológico?",
    text: "Biohazard en Japón, Resident Evil en el resto del mundo, porque el nombre original no se podía registrar en EE. UU. Nació como un juego de terror basado en Sweet Home y quedó a cargo de Shinji Mikami. Inspirado fuertemente en las películas de <b>serie B</b>, popularizó el término <i>survival horror</i>. Personajes icónicos: Jill Valentine, Chris Redfield, Barry Burton, Rebecca Chambers y Albert Wesker.",
    platforms: ["PlayStation", "Sega Saturn", "PC"],
    images: [
      {
        src: "Images/Biohazard_PS1.webp",
        caption: "Portada original de Resident Evil (1996)",
      },
      {
        src: "Images/re1castchris.webp",
        caption: "Altos valores de producción.",
      },
      {
        src: "Images/jill-live-action.gif",
        caption: "Jill Valentine interpretada por la reconocida <i>Inezh</i>",
      },
      {
        src: "Images/mikami.jpg",
        caption: "Shinji Mikami, director.",
      },
    ],
  },
  {
    year: 1998,
    era: "Resident Evil 2",
    title: "Un novato y una universitaria (y una motociclista)",
    text: "Después del éxito del primero, Capcom ordena comenzar de inmediato con la secuela, dirigida por Hideki Kamiya y producida por Mikami. Con el juego casi terminado, deciden reiniciar la producción; esa versión descartada se conoce hoy como \"Resident Evil 1.5\". El juego se retrasa, se termina en tiempo récord y se convierte en el más vendido de la saga en su época. Introduce a dos personajes nuevos, Leon S. Kennedy y Claire Redfield.",
    platforms: ["PlayStation", "PC", "Nintendo 64", "Dreamcast", "GameCube"],
    images: [
      {
        src: "Images/residentevil2.jpg",
      },
      {
        src: "Images/Elza_model.webp",
        caption: "Elza Walker",
      },
      {
        src: "Images/licker.gif",
        caption: "Si le disparas en el * le haces más daño",
      },
    ],
  },
  {
    year: 1999,
    era: "Resident Evil 3: Nemesis",
    title: "STAAAAAARS",
    text: "Lanzado año y medio después, producido nuevamente por Mikami y dirigido por Kazuhiro Aoyama. Divisivo entre los fans por incluir más elementos de acción, aclamado por sus escenarios y personajes. Regresa Jill Valentine, acompañada de personajes nuevos como Carlos Oliveira.",
    platforms: ["PlayStation", "PC", "Dreamcast", "GameCube"],
    images: [
      {
        src: "Images/nemesis-clocktower.gif",
        caption: "Nemesis, Nemmy de cariño",
      },
      {
        src: "Images/RE3.webp",
        caption: "Portada original de PS1",
      },
      {
        src: "Images/residentevil3back.jpg",
        caption: "Escapa de Raccoon City",
      },
    ],
  },
  {
    year: 2000,
    era: "Resident Evil Survivor",
    title: "Pistola no incluida",
    text: "Primer spin-off de Resident Evil y primero de la serie <i>Gun Survivor</i>: un shooter en primera persona compatible con la pistola de luz GunCon. Ark Thompson despierta sin memoria en Sheena Island, una isla de Umbrella. En Norteamérica salió sin soporte para la pistola.",
    platforms: ["PlayStation"],
    images: [
      {
        src: "Images/RE_Survivor_front.jpg",
      },
      {
        src: "Images/gcon.webp",
      },
      {
        src: "Images/gunsurvivor.gif",
      },
    ],
  },
  {
    year: 2000,
    era: "Resident Evil: Code Veronica",
    title: "Spin-off no spin-off",
    text: "Desarrollado en paralelo a Resident Evil 3 e inicialmente exclusivo para Sega Dreamcast. Por ser una consola de Sega, no pudo llevar el número 3 en el título, a pesar de ser la verdadera continuación de la historia. Fue el primero de la saga con escenarios en 3D en lugar de fondos prerrenderizados, y es considerado uno de los mejores de su época. Claire Redfield es capturada por Umbrella mientras busca a su hermano Chris, que también es jugable. Además, regresa Albert Wesker.",
    platforms: [
      "Dreamcast",
      "PS2 y GameCube (Code: Veronica X)",
      "PS3 y Xbox 360 (HD)",
    ],
    images: [
      {
        src: "Images/RECVclaire.webp",
      },
      {
        src: "Images/VMUclaire.jpg",
        caption: "Visual Memory Unit de Dreamcast",
      },
      {
        src: "Images/VMURE2.jpg",
      },
      {
        src: "Images/codeveronica.gif",
      },
    ],
  },
  {
    year: 2001,
    era: "Resident Evil Gaiden",
    title: "Lo que pasa en el barco se queda en el barco",
    text: "Creado para Game Boy Color, se juega en vista cenital y se ambienta en un barco donde están Leon y Barry. Fue descartado como entrada canónica de la historia.",
    platforms: ["Game Boy Color"],
    images: [
      {
        src: "Images/regaiden.gif",
      },
      {
        src: "Images/Gaiden-barry-zombies.webp",
      },
      {
        src: "Images/gaidencard.webp",
      },
    ],
  },
  {
    year: 2001,
    era: "Resident Evil Survivor 2: Code Veronica",
    title: "Al final todo era un sueño",
    text: "Segundo juego de la serie <i>Gun Survivor</i>, basado libremente en la historia de Code Veronica. Aparece Nemesis, pero al final Claire despierta y todo resulta ser un sueño. Nunca salió en Norteamérica.",
    platforms: ["Arcade (NAOMI)", "PlayStation 2"],
    images: [
      {
        src: "Images/survivor2.jpg",
      },
      {
        src: "Images/survivor2alexa.jpg",
      },
    ],
  },
  {
    year: 2002,
    era: "Resident Evil (remake)",
    title: "Regresó de entre los muertos",
    text: "El primero de tres juegos \"exclusivos\" para GameCube. Dirigido nuevamente por Shinji Mikami, quien consideraba que el original había envejecido, añade nuevas mecánicas. Es considerado un estandarte del <i>survival horror</i>.",
    platforms: [
      "GameCube",
      "Wii",
      "PS3",
      "PS4",
      "Xbox 360",
      "Xbox One",
      "PC",
      "Switch",
    ],
    images: [
      {
        src: "Images/Resident-evil-cover.webp",
      },
      {
        src: "Images/Lisa_Trevor.webp",
      },
      {
        src: "Images/reRemake.jpg",
      },
      {
        src: "Images/Rechambers.webp",
      },
    ],
  },
  {
    year: 2002,
    era: "Resident Evil Zero",
    title: "Paciente ∅",
    text: "Precuela ambientada un día antes de los eventos de la mansión. Permite cambiar entre dos personajes, pero eliminó el baúl de objetos, lo que dividió a los fans. Rebecca Chambers es protagonista por primera vez, junto a Billy Coen. Presenta a James Marcus, fundador de Umbrella. Sus ventas no cumplieron las expectativas.",
    platforms: [
      "GameCube",
      "Wii",
      "PS3",
      "PS4",
      "Xbox 360",
      "Xbox One",
      "PC",
      "Switch",
    ],
    images: [
      {
        src: "Images/Resident_evil_zero.webp",
      },
      {
        src: "Images/RE0JamesMarcus.webp",
      },
    ],
  },
  {
    year: 2003,
    era: "Resident Evil: Dead Aim",
    title: "Leon y Ada de Temu",
    text: "Tercer Resident Evil de la serie <i>Gun Survivor</i>, que también podía jugarse sin la pistola de luz. Protagonizado por Bruce McGavin, un agente estadounidense, y Fong Ling, una agente china, mientras investigan (otro) barco de Umbrella. Tuvo una recepción mixta.",
    platforms: ["PlayStation 2"],
    images: [
      {
        src: "Images/REDEADCOVER.webp",
      },
      {
        src: "Images/bruce.jpg",
      },
      {
        src: "Images/fongling.jpg",
      },
    ],
  },
  {
    year: 2003,
    era: "Resident Evil: Outbreak",
    title: "¿Cómo conecto mi PS2 a internet?",
    text: "Primer juego de la saga con multijugador cooperativo en línea, que requería el adaptador de red de PS2. Presenta 8 personajes, cada uno con una habilidad diferente, y hasta 4 jugadores simultáneos en 5 escenarios ambientados en la caída de Raccoon City.<br>Tuvo críticas mixtas por la falta de chat de voz (solo había frases predefinidas) y los largos tiempos de carga. En Europa salió sin modo en línea.",
    platforms: ["PlayStation 2"],
    images: [
      {
        src: "Images/outbreak1.jpg",
      },
      {
        src: "Images/outbreakgameplay.jpg",
      },
      {
        src: "Images/reoutbreak.jpg",
      },
    ],
  },
  {
    year: 2004,
    era: "Resident Evil Outbreak File #2",
    title: "Tiene un elefante africano zombi",
    text: "Continuación del título anterior: usa los mismos 8 personajes en 5 escenarios nuevos, entre ellos un zoológico, y ahora se puede caminar mientras se apunta. En Norteamérica mantuvo el juego en línea; en Europa, de nuevo, no. Alyssa Ashcroft, la periodista del grupo, reaparecería años después en Resident Evil Requiem como la madre de Grace.",
    platforms: ["PlayStation 2"],
    images: [
      {
        src: "Images/REOF2.jpg",
      },
      {
        src: "Images/elefante.jpg",
      },
    ],
  },
  {
    year: 2005,
    era: "Resident Evil 4",
    title: "El terror, reinventado",
    text: "Después del relativo fracaso de RE Zero, Shinji Mikami reconoce el estancamiento de la saga y decide hacer un cambio drástico. Pasó por varios prototipos descartados; uno de ellos se convirtió en Devil May Cry. Es un éxito rotundo y se establece como un referente del <i>action horror</i>.",
    platforms: [
      "GameCube",
      "PlayStation 2",
      "PC",
      "Wii",
      "iOS (Mobile Edition)",
      "Zeebo (Mobile Edition)",
      "PS3",
      "Xbox 360",
      "PS4",
      "Xbox One",
      "Switch",
      "Meta Quest 2 (VR)",
    ],
    images: [
      {
        src: "Images/Resident_Evil_4_GC.webp",
      },
      {
        src: "Images/backcover.jpg",
      },
      {
        src: "Images/QTE.webp",
      },
      {
        src: "Images/regenerator.gif",
      },
    ],
  },
  {
    year: 2006,
    era: "Resident Evil Deadly Silence",
    title: "Doble pantalla, mismo silencio",
    text: "Lanzado por el 10.º aniversario de la saga, es una nueva versión del primer juego para Nintendo DS. Incluye el original y un modo \"Rebirth\" con acertijos y enemigos nuevos que aprovechan la pantalla táctil para pelear con el cuchillo y el micrófono para soplar. Además, cuenta con modos multijugador cooperativo y competitivo.",
    platforms: ["Nintendo DS"],
    images: [
      {
        src: "Images/REDS.jpg",
      },
      {
        src: "Images/ReDSscreen.jpg",
      },
      {
        src: "Images/doublescreen.jpg",
      },
    ],
  },
  {
    year: 2007,
    era: "Resident Evil: The Umbrella Chronicles",
    title: "Canon, pero no tan canon",
    text: "El primer <i>on-rails shooter</i> de la saga. Se lanzó para Wii y años después llegó a PS3 con soporte para PS Move. Cuenta segmentos complementarios a la historia de Resident Evil 0, 1 y 3, y una historia nueva que sí es canon: la caída de Umbrella en 2003, con Chris y Jill.",
    platforms: ["Wii", "PS3"],
    images: [
      {
        src: "Images/umbrellachronicles.jpg",
      },
      {
        src: "Images/Umbrella Chronicles 2.webp",
      },
      {
        src: "Images/jillchronicles.gif",
      },
    ],
  },
  {
    year: 2009,
    era: "Resident Evil 5",
    title: "Bíceps como una piedra",
    text: "Construye sobre lo que plantea RE4, pero esta vez enfocándose más en la acción. Por primera vez en la saga principal, la historia se puede jugar en cooperativo local y en línea. Además, cuenta con el modo Mercenarios, que ya había aparecido en RE3 y RE4. Durante mucho tiempo fue el más vendido de la saga, a pesar de las críticas por su historia. En esta entrega regresa Chris con sus fuertes bíceps.",
    platforms: ["PS3", "Xbox 360", "PC", "PS4", "Xbox One", "Switch"],
    images: [
      {
        src: "Images/RE5.png",
      },
      {
        src: "Images/chris_roca.webp",
      },
      {
        src: "Images/biceps.jpg",
      },
    ],
  },
  {
    year: 2009,
    era: "Resident Evil: The Darkside Chronicles",
    title: "Esta vez con más Leon™",
    text: "Sucesor de The Umbrella Chronicles, continúa con las mecánicas del juego anterior, donde se avanza por niveles y se mejoran las armas. Esta vez cuenta las historias de RE2, Code Veronica y una nueva llamada Operación Javier, que sirve como precuela de Resident Evil 4.",
    platforms: ["Wii", "PS3"],
    images: [
      {
        src: "Images/Darkside.webp",
      },
      {
        src: "Images/clairedarkside.webp",
      },
      {
        src: "Images/darksidechronicles.jpg",
      },
      {
        src: "Images/nemmy.jpg",
      },
    ],
  },
  {
    year: 2011,
    era: "Resident Evil: The Mercenaries 3D",
    title: "Esta vez sin Leon™",
    text: "Primer Resident Evil para 3DS, y el primero de la saga sin absolutamente nada de historia. Se basa totalmente en el modo Mercenarios, donde matas enemigos para conseguir puntaje y desbloquear armas y trajes. A pesar de tener niveles de RE4 y RE5, no incluye a Leon como personaje jugable.",
    platforms: ["Nintendo 3DS"],
    images: [
      {
        src: "Images/merc3D.jpg",
      },
      {
        src: "Images/The_Mercenaries_3D.jpg",
      },
      {
        src: "Images/rebecca3ds.png",
      },
    ],
  },
  {
    year: 2012,
    era: "Resident Evil: Operation Raccoon City",
    title: "Esta vez matan a Leon™",
    text: "Juegas como el escuadrón de Umbrella enviado a Raccoon City para recuperar el virus-G y eliminar las pruebas del brote; la campaña del equipo del gobierno llegó después como contenido descargable. Es un <i>shooter</i> en tercera persona por equipos, con coberturas. En uno de los finales puedes matar a Leon, algo que absolutamente no es canon.",
    platforms: ["PS3", "Xbox 360", "PC"],
    images: [
      {
        src: "Images/leonop.webp",
      },
      {
        src: "Images/Operation_Raccoon_City_USA.webp",
      },
      {
        src: "Images/opraccooncity.jpg",
      },
    ],
  },
  {
    year: 2012,
    era: "Resident Evil Revelations",
    title: "Jill en altamar",
    text: "Segundo Resident Evil para 3DS, este spin-off sirve como puente entre los eventos de Resident Evil 4 y Resident Evil 5. Regresa Jill Valentine en una misión de rescate en un barco (otro barco). Continúa con la jugabilidad de RE4 de manera más refinada y enfocada en el <i>survival horror</i>.",
    platforms: [
      "Nintendo 3DS",
      "PS3",
      "Xbox 360",
      "Wii U",
      "PC",
      "PS4",
      "Xbox One",
      "Switch",
    ],
    images: [
      {
        src: "Images/Revelations.webp",
      },
      {
        src: "Images/revelationspc.jpg",
      },
      {
        src: "Images/racheljill.webp",
      },
    ],
  },
  {
    year: 2012,
    era: "Resident Evil 6",
    title:
      "¿Qué tienen en común un T-Rex, una mosca gigante y los bíceps de Chris?",
    text: "Uno de los más polémicos de la saga: su jugabilidad de acción es muy refinada, pero su historia es demasiado bombástica hasta para los estándares de Resident Evil. Es el más ambicioso, con 4 campañas, 7 personajes principales jugables y varios modos multijugador.",
    platforms: ["PS3", "Xbox 360", "PC", "PS4", "Xbox One", "Switch"],
    images: [
      {
        src: "Images/re6.webp",
      },
      {
        src: "Images/adaspinkick.gif",
      },
      {
        src: "Images/yeet.gif",
      },
      {
        src: "Images/fly.png",
      },
    ],
  },
  {
    year: 2015,
    era: "Resident Evil: Revelations 2",
    title: "Tu tarea es señalar objetos",
    text: "Secuela de Revelations, esta vez para consolas y PC. Regresan personajes como Claire Redfield y Barry Burton. Enfocado en el <i>survival horror</i>, permite jugar la historia en cooperativo local. También incluye el modo Asalto (Raid).",
    platforms: [
      "PS4",
      "PS3",
      "Xbox One",
      "Xbox 360",
      "PC",
      "PS Vita",
      "Switch",
    ],
    images: [
      {
        src: "Images/rev2mejor.webp",
      },
      {
        src: "Images/rev2.webp",
      },
      {
        src: "Images/revelations2.jpg",
      },
      {
        src: "Images/pointing.webp",
      },
    ],
  },
  {
    year: 2016,
    era: "Resident Evil Umbrella Corps",
    title: "Tocando fondo después del fondo",
    text: "Un spin-off de acción en el que mercenarios de distintas corporaciones pelean por los restos de Umbrella. Basado en la oleada de <i>shooters</i> competitivos en línea de la época. Muy criticado por perder toda la esencia de la saga, por su jugabilidad poco original y por no tener un modo historia. Se considera el punto más bajo de la saga.",
    platforms: ["PS4", "PC"],
    images: [
      {
        src: "Images/umbrellacorpsbanner.jpg",
      },
      {
        src: "Images/umbrellacorps2.jpg",
      },
      {
        src: "Images/umbrellacorps.webp",
      },
    ],
  },
  {
    year: 2017,
    era: "Resident Evil 7: Biohazard",
    title: "Ethan Winters al rescate (de la saga)",
    text: "Es una vuelta a las raíces y una reinvención de la saga, con un escenario mucho más contenido y centrado nuevamente en el <i>survival horror</i>. Presenta personajes nuevos como Ethan Winters, quien va a Luisiana en busca de su esposa Mia. Fue un éxito rotundo y es considerado uno de los más terroríficos de la saga.",
    platforms: [
      "PS4",
      "Xbox One",
      "PC",
      "Switch (nube)",
      "PS5",
      "Xbox Series X|S",
      "Switch 2",
    ],
    images: [
      {
        src: "Images/resident7.webp",
      },
      {
        src: "Images/re7mia.jpg",
      },
      {
        src: "Images/Marguerite_Baker_1.webp",
      },
      {
        src: "Images/jack.gif",
      },
    ],
  },
  {
    year: 2019,
    era: "Resident Evil 2: Remake",
    title: "Empieza una nueva era. ¿Nueva?",
    text: "Capcom decide rehacer el juego completamente usando su motor RE Engine. Encarga el desarrollo a su equipo interno de más alto nivel (Div1), respetando lo que hizo bueno al original y modernizándolo. Fue un éxito absoluto y a día de hoy es el juego más vendido de toda la saga.",
    platforms: [
      "PS4",
      "Xbox One",
      "PC",
      "PS5",
      "Xbox Series X|S",
      "iOS",
      "macOS",
    ],
    images: [
      {
        src: "Images/Re2remake.jpg",
      },
      {
        src: "Images/mrx.webp",
      },
      {
        src: "Images/birkin.gif",
      },
    ],
  },
  {
    year: 2020,
    era: "Resident Evil 3: Remake & Resistance",
    title: "Mira cómo masacraron a mi muchacho",
    text: "A diferencia del anterior, fue desarrollado principalmente por un estudio externo a Capcom. Tuvo un desarrollo corto y, como consecuencia, recortó mucho contenido del original. Con el juego venía Resident Evil: Resistance, un multijugador asimétrico al que tampoco le fue muy bien.",
    platforms: ["PS4", "Xbox One", "PC", "PS5", "Xbox Series X|S"],
    images: [
      {
        src: "Images/Re3remake.webp",
      },
      {
        src: "Images/jillremake.mp4",
        poster: "Images/jillremake-poster.png",
      },
      {
        src: "Images/reresistance.jpg",
      },
    ],
  },
  {
    year: 2021,
    era: "Resident Evil Village",
    title: "¿Cómo está, señora D?",
    text: "Continúa la historia de Ethan Winters, que busca a su hija Rose en una aldea de Europa del Este gobernada por Madre Miranda y sus cuatro Lores. Toma la jugabilidad de Resident Evil 7 y la expande con más armas, mejoras y un mercader, el Duque. También regresa Chris Redfield y presenta personajes hoy icónicos como Lady Dimitrescu.",
    platforms: [
      "PS5",
      "PS4",
      "Xbox Series X|S",
      "Xbox One",
      "PC",
      "Stadia",
      "Switch (nube)",
      "macOS",
      "iOS",
      "Switch 2",
    ],
    images: [
      {
        src: "Images/revillage.jpg",
      },
      {
        src: "Images/revillagemiranda.webp",
      },
      {
        src: "Images/ladyD.gif",
      },
      {
        src: "Images/games_re8_review.webp",
      },
    ],
  },
  {
    year: 2022,
    era: "Resident Evil Re:Verse",
    title: "Morir es solo el comienzo",
    text: "Un todos contra todos en línea para hasta 6 jugadores, con personajes clásicos de la saga. Al morir regresas convertido en arma biológica. Iba a llegar junto a Village en 2021 como regalo, pero tras varios retrasos salió hasta octubre de 2022.",
    platforms: [
      "PS4",
      "Xbox One",
      "PC",
      "PS5 (retrocompatible)",
      "Xbox Series X|S (retrocompatible)",
    ],
    images: [
      {
        src: "Images/reverse.jpg",
      },
    ],
  },
  {
    year: 2023,
    era: "Resident Evil 4 (Remake)",
    title: "Regresa la cabra",
    text: "Capcom continúa su racha de grandes juegos: el remake fue asignado nuevamente a Div1, que se tomó el tiempo necesario para realizarlo. El resultado es una reinterpretación del original con un tono más oscuro y una jugabilidad refinada al máximo. Fue otro éxito en críticas y en ventas.",
    platforms: ["PS5", "PS4", "Xbox Series X|S", "PC", "iOS", "macOS"],
    images: [
      {
        src: "Images/re4remake.webp",
      },
      {
        src: "Images/re4comparison.jpg",
      },
      {
        src: "Images/re4remakeleon.jpeg",
      },
      {
        src: "Images/leonchainsaw.gif",
      },
    ],
  },
  {
    year: 2026,
    era: "Resident Evil Requiem",
    title: "De vuelta a Raccoon City",
    text: "Grace Ashcroft, hija de Alyssa (de Outbreak), investiga la muerte de su madre. Leon es el segundo protagonista, y las campañas alternan entre el <i>survival horror</i> de Grace y el <i>action horror</i> de Leon, en primera o tercera persona. Celebra la historia de la saga mientras mira hacia el futuro, y nos lleva a revisitar una Raccoon City destruida, 30 años después de su caída.",
    platforms: ["PS5", "Xbox Series X|S", "Switch 2", "PC"],
    images: [
      {
        src: "Images/rerequiem.webp",
      },
      {
        src: "Images/grace.webp",
      },
      {
        src: "Images/papucho.webp",
      },
      {
        src: "Images/re9.webp",
      },
    ],
  },
  {
    year: 2027,
    yearLabel: "2027+",
    era: "Resident Evil Veronica",
    title: "2027 y más allá",
    text: "Capcom anunció en el Summer Game Fest 2026 el remake de Code: Veronica, ahora llamado simplemente Resident Evil Veronica. Claire Redfield vuelve a Rockfort Island en 2027, para PS5, Xbox Series X|S, Nintendo Switch 2 y PC. Treinta años después, la saga sigue mirando hacia adelante.",
    platforms: ["PS5", "Xbox Series X|S", "Switch 2", "PC"],
    images: [
      {
        src: "Images/claireveronica.webp",
        caption: "Resident Evil Veronica · próximamente",
      },
    ],
  },
];
