const EVENTS = [
  {
    year: 1989,
    era: "Sweet Home",
    title: "Hogar, dulce hogar",
    text: "Fue un <i> tie-in </in> de la película homonima. Un equipo de grabación de 5 personas entra a una casa embrujada y luchan por salir. Combate RPG con diferentes finales, permadeath, en especial su ambientación",
    platforms: ["Famicom"],
    images: [
      {
        src: "Images/sweethome1989.jpg",
        caption: "Portada original de Sweet Home (1989).",
      },
      { src: "Images/sweet_home_death.webp" },
      { src: "Images/doorscreen.gif" },
    ],
  },
  {
    year: 1996,
    era: "Resident Evil",
    title: "¿Huésped maldito o riesgo biológico?",
    text: "Édouard-Léon Scott de Martinville traza ondas sonoras sobre papel ahumado. Se podía ver el sonido, pero no escucharlo de nuevo.",
    platforms: ["PlayStation", "Sega Saturn", "PC"],
    images: [
      {
        src: "Images/Biohazard_PS1.webp",
        caption: "Portada original de Resident Evil (1996).",
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
    text: "Un cilindro de estaño registra surcos que una aguja recorre después. Primera vez que una voz se graba y se reproduce.",
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
        caption: "Si le disparas en el * le haces mas daño (?)",
      },
    ],
  },
  {
    year: 1999,
    era: "Resident Evil 3: Nemesis",
    title: "STAAAAAARS",
    text: "Emile Berliner reemplaza el cilindro por un disco, mucho más fácil de copiar en masa.",
    platforms: ["PlayStation", "PC", "Dreamcast", "GameCube"],
    images: [
      {
        src: "Images/nemesis-clocktower.gif",
      },
      {
        src: "Images/RE3.webp",
        caption: "Portada Original de PS1",
      },
      {
        src: "Images/residentevil3back.jpg",
        caption: "Escapa de Raccoon City.",
      },
    ],
  },
  {
    year: 2000,
    era: "Resident Evil Survivor",
    title: "¡Pew! ¡Pew!",
    text: "Micrófonos y amplificadores sustituyen la bocina acústica y amplían el rango de frecuencias capturado.",
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
    text: "Columbia lanza el disco de larga duración: unos 20 minutos por cara en vinilo.",
    platforms: ["Dreamcast", "PS2 y GameCube (Code: Veronica X)", "PS3 y Xbox 360 (HD)"],
    images: [
      {
        src: "Images/RECVclaire.webp",
      },
      {
        src: "Images/VMUclaire.jpg",
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
    text: "",
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
    text: "",
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
    text: "",
    platforms: ["GameCube", "Wii", "PS3", "PS4", "Xbox 360", "Xbox One", "PC", "Switch"],
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
    title: "Antes del principio",
    text: "",
    platforms: ["GameCube", "Wii", "PS3", "PS4", "Xbox 360", "Xbox One", "PC", "Switch"],
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
    title: "Un barco y una historia de amor",
    text: "",
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
    title: "El remake más necesario",
    text: "",
    platforms: ["PlayStation 2"],
    images: [
      {
        src: "Images/outbreak1.jpg",
      },
      {
        src: "Images/res-outbreAK.webp",
      },
      {
        src: "Images/reoutbreak.jpg",
      },
    ],
  },
  {
    year: 2004,
    era: "Resident Evil Outbreak File #2",
    title: "Estos personajes quizás sirvan en el futuro",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
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
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
    platforms: ["GameCube", "PlayStation 2", "PC", "Wii", "iOS (Mobile Edition)", "Zeebo (Mobile Edition)", "PS3", "Xbox 360", "PS4", "Xbox One", "Switch", "Meta Quest 2 (VR)"],
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
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
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
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
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
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
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
    text: "",
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
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
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
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
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
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
    platforms: ["Nintendo 3DS", "PS3", "Xbox 360", "Wii U", "PC", "PS4", "Xbox One", "Switch"],
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
      "¿Qué tienen en común un T-Rex, una mosca de 15 metros y los bíceps de Chris?",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
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
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
    platforms: ["PS4", "PS3", "Xbox One", "Xbox 360", "PC", "PS Vita", "Switch"],
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
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
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
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
    platforms: ["PS4", "Xbox One", "PC", "Switch (nube)", "PS5", "Xbox Series X|S", "Switch 2"],
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
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
    platforms: ["PS4", "Xbox One", "PC", "PS5", "Xbox Series X|S", "iOS", "macOS"],
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
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
    platforms: ["PS4", "Xbox One", "PC", "PS5", "Xbox Series X|S"],
    images: [
      {
        src: "Images/Re3remake.webp",
      },
      {
        src: "Images/jillremake.mp4",
      },
      {
        src: "Images/reresistance.jpg",
      },
    ],
  },
  {
    year: 2021,
    era: "Resident Evil 8: Village",
    title: "¿Cómo está, señora D?",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
    platforms: ["PS5", "PS4", "Xbox Series X|S", "Xbox One", "PC", "Stadia", "Switch (nube)", "macOS", "iOS", "Switch 2"],
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
        src: "Images/games_re8_review.webp"
      }
    ],
  },
  {
    year: 2022,
    era: "Resident Evil Re:Verse",
    title: "Morir es solo el comienzo",
    text: "Un todos contra todos en línea para hasta 6 jugadores, con personajes clásicos de la saga. Al morir regresas convertido en arma biológica. Iba a llegar junto a Village en 2021 como regalo, pero tras varios retrasos salió hasta octubre de 2022.",
    platforms: ["PS4", "Xbox One", "PC", "PS5 (retrocompatible)", "Xbox Series X|S (retrocompatible)"],
    images: [
      {
        src: "Images/reverse.jpg"
      }
    ]
  },
  {
    year: 2023,
    era: "Resident Evil 4 (Remake)",
    title: "Regresa la cabra",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
    platforms: ["PS5", "PS4", "Xbox Series X|S", "PC", "iOS", "macOS"],
    images: [
      {
        src: "Images/re4remake.webp"
      },
      {
        src: "Images/re4comparison.jpg"
      },
      {
        src: "Images/re4remakeleon.jpeg"
      },
      {
        src: "Images/leonchainsaw.gif"
      }
    ]
  },
  {
    year: 2026,
    era: "Resident Evil Requiem",
    title: "De vuelta a Raccoon City",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
    platforms: ["PS5", "Xbox Series X|S", "Switch 2", "PC"],
    images: [
      {
        src: "Images/rerequiem.webp"
      },
      {
        src: "Images/grace.webp"
      },
      {
        src: "Images/papucho.webp"
      },
      {
        src: "Images/re9.webp"
      }
    ]
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
        // Provisional: cámbialo por la imagen oficial del remake (p. ej. Images/reveronica.jpg)
        src: "Images/RECVopening.mp4",
        caption: "Resident Evil Veronica · próximamente",
      }
    ]
  },
];
