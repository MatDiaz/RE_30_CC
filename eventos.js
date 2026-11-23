const EVENTS = [
  {
    year: 1989,
    era: "Sweet Home",
    title: "Hogar, dulce hogar.",
    text: "Fue un <i> tie-in </in> de la película homonima. Un equipo de grabación de 5 personas entra a una casa embrujada y luchan por salir. Combate RPG con diferentes finales, permadeath, en especial su ambientación",
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
    title: "¿Huésped maldito, o Riesgo Biológico?",
    text: "Édouard-Léon Scott de Martinville traza ondas sonoras sobre papel ahumado. Se podía ver el sonido, pero no escucharlo de nuevo.",
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
    ],
  },
  {
    year: 1998,
    era: "Resident Evil 2",
    title: "Un novato y una universitaria. (y una motociclista)",
    text: "Un cilindro de estaño registra surcos que una aguja recorre después. Primera vez que una voz se graba y se reproduce.",
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
    title: "Pew! Pew!",
    text: "Micrófonos y amplificadores sustituyen la bocina acústica y amplían el rango de frecuencias capturado.",
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
    images: [
      {
        src: "Images/RECVopening.mp4",
      },
      {
        src: "Images/RECVclaire.webp",
      },
      {
        src: "Images/VMUclaire.jpg",
      },
      {
        src: "Images/VMURE2.jpg",
      },
    ],
  },
  {
    year: 2001,
    era: "Resident Evil Gaiden",
    title: "Lo que pasa en el barco, se queda en el barco",
    text: "",
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
    images: [
      {
        src: "Images/survivor2.jpg",
      },
      {
        src: "Images/survivor2alexa.jpg",
      }
    ],
  },
  {
    year: 2002,
    era: "Resident Evil (remake)",
    title: "Regresó de entre los muertos",
    text: "",
  },
  {
    year: 2002,
    era: "Resident Evil Zero",
    title: "Llega el streaming masivo",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2003,
    era: "Resident Evil: Dead Aim",
    title: "Un barco, y una historia de amor",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2003,
    era: "Resident Evil: Outbreak",
    title: "El remake más necesario",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2004,
    era: "Resident Evil Outbreak File #2",
    title: "Estos personajes quizás sirvan en un futuro.",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2005,
    era: "Resident Evil 4",
    title: "El terror, reinventado",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2006,
    era: "Resident Evil Deadly Silence",
    title: "El terror, reinventado",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2007,
    era: "Resident Evil: The Umbrella Chronicles",
    title: "Canon pero no tan canon",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2009,
    era: "Resident Evil 5",
    title: "Doble de personajes, doble de diversión",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2009,
    era: "Resident Evil: The Darkside Chronicles",
    title: "Esta vez con más Leon™",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2011,
    era: "Resident Evil: The Mercenaries 3D",
    title: "Esta vez sin Leon™",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2012,
    era: "Resident Evil: Operation Raccoon City",
    title: "Esta vez matan a Leon™",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2012,
    era: "Resident Evil Revelations",
    title: "Esta vez sin Leon™",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2012,
    era: "Resident Evil 6",
    title:
      "Qué tienen en común un T-Rex, una mosca de 15 metros y los bíceps de Chris?",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2015,
    era: "Resident Evil: Revelations 2",
    title: "Tu tarea es señalar objetos",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2016,
    era: "Resident Evil Umbrella Corps",
    title: "Tocando fondo después del fondo.",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2017,
    era: "Resident Evil 7: Biohazard",
    title: "Ethan Winters al rescate (de la saga).",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2019,
    era: "Resident Evil 2: Remake",
    title: "Empieza una nueva era. Nueva?.",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2020,
    era: "Resident Evil 3: Remake",
    title: "Mira como masacraron a mi muchacho",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2021,
    era: "Resident Evil 8: Village",
    title: "Cómo está señora D?",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2021,
    era: "Resident Evil Re:Verse",
    title: "Cómo está señora D?",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2023,
    era: "Resident Evil 4 (Remake)",
    title: "Regresa la cabra",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
  {
    year: 2026,
    era: "Resident Evil Requiem",
    title: "De vuelta a Raccoon City",
    text: "El acceso reemplaza a la posesión: la música se reproduce desde servidores bajo demanda.",
  },
];
