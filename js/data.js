/**
 * Generation DigitalIA - Catálogo de Obras y Creaciones Multimedia
 * 
 * Para añadir una nueva obra al portafolio, simplemente añade un nuevo objeto
 * al arreglo `portfolioItems` siguiendo la estructura:
 * 
 * {
 *   id: string,               // Identificador único (ej: 'img-4')
 *   type: 'image'|'video'|'audio', // Tipo de contenido
 *   title: string,            // Título de la creación
 *   description: string,      // Breve descripción o contexto
 *   mediaUrl: string,         // URL directa de imagen o embed de video/audio
 *   externalUrl?: string,     // URL opcional hacia fuente original (SoundCloud, YouTube, etc.)
 *   prompt: string,           // Prompt utilizado en la generación con IA
 *   model: string,            // Modelo o herramienta IA (ej: 'Imagen 3', 'Runway Gen-3', 'Suno')
 *   tags: string[],           // Etiquetas para búsqueda y filtrado
 *   featured?: boolean        // Opcional para destacar
 * }
 */

const portfolioItems = [
  {
    id: "img-1",
    type: "image",
    title: "El Espíritu del Viaje Americano",
    description: "Retrato ultra-realista que captura la pura alegría del viaje y la fuerza del viento en carretera abierta.",
    mediaUrl: "https://res.cloudinary.com/hmmpgzoa/image/upload/v1788475671/Gemini_Generated_Image_70rmd570rmd570rm.jpg",
    prompt: "An ultra-realistic profile portrait of a Golden Retriever in the passenger seat of a car on an interstate highway. The window is fully rolled down, and the dog's face is distorted by sheer joy and the force of the wind, with its tongue lolling out and ears blown back. The focus is sharp on the dog while the rapidly moving surroundings are blurred. Includes subtle background details evoking the United States, such as a pole with an American flag and an \"I-10\" highway sign. Travel photography aesthetic, dramatic natural lighting, high resolution.",
    model: "Google Imagen 3",
    tags: ["Fotografía", "Ultra-realismo", "Animales", "Cinemático"],
    featured: true
  },
  {
    id: "img-2",
    type: "image",
    title: "Caos y Lana",
    description: "Escena íntima de travesura felina envuelta en madejas de lana con iluminación natural cálida.",
    mediaUrl: "https://res.cloudinary.com/hmmpgzoa/image/upload/v1788476529/Gemini_Generated_Image_1g1qrs1g1qrs1g1q.jpg",
    prompt: "Playful cat tangled in yarn ball while being recorded on smartphone, surrounded by cat toys on rug, warm natural light, shallow depth of field, high detail, cozy aesthetic.",
    model: "Google Imagen 3",
    tags: ["Cotidiano", "Gatos", "Iluminación Cálida", "Macro"]
  },
  {
    id: "img-3",
    type: "image",
    title: "Órbita Estelar",
    description: "Composición de astrofotografía cinemática que visualiza satélites modernos sobrevolando la Tierra.",
    mediaUrl: "https://res.cloudinary.com/hmmpgzoa/image/upload/v1788476827/Gemini_Generated_Image_m1w0jnm1w0jnm1w0.jpg",
    prompt: "Modern scientific satellite orbiting planet Earth with solar panels deployed, Moon visible in distant star-filled deep space, nebula glow, cinematic space photography, realistic earth curvature and atmospheric glow, photorealistic 8k.",
    model: "Google Imagen 3",
    tags: ["Espacio", "Astronomía", "Ciencia Ficción", "8K"]
  },
  {
    id: "vid-1",
    type: "video",
    title: "Del Fracaso al Éxito: La Regla de los Ganadores",
    description: "Animación retro pixel art sobre superación personal, vencer el fracaso y alcanzar la meta.",
    mediaUrl: "https://www.youtube.com/embed/4KSZEFhdlX4",
    prompt: "16-bit retro side-scrolling platformer pixel art, hero overcoming dark obstacles and climbing to a sunlit city rooftop to lift a golden trophy, level complete screen.",
    model: "Google Veo 2.0",
    tags: ["Pixel Art", "Animación 2D", "Motivación", "Retro Gaming"]
  },
  {
    id: "aud-1",
    type: "audio",
    title: "Pavement Throne",
    description: "Un himno agresivo de rap battle con el estilo crudo y puro de la Costa Este de los años 90. Destaca por sus bombos y cajas contundentes, *scratches* de vinilo arenosos, un *loop* de piano dramático en tono menor y un bajo profundo. La letra, generada por IA, narra la superación de la pobreza, la autosuficiencia y el triunfo desde cero en el *cipher*.",
    mediaUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2394131871&color=%2300f2fe&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    externalUrl: "https://soundcloud.com/generationdigitalia/pavement-throne",
    author: "Generation DigitalIA",
    prompt: "An aggressive 90s East Coast boom bap rap battle track, 92 BPM, heavy punchy kick and snare, gritty vinyl scratches, dramatic minor-key piano loop, deep baseline. Intense, hungry, competitive male flow with complex rhyme schemes. Lyrical theme: overcoming poverty, self-reliance, grinding from zero to success, defying the odds in the cipher.",
    model: "Lyria 3.5 / Street Level Logic (Album)",
    tags: ["Rap Battle", "90s Hip Hop", "East Coast", "Boom Bap", "Gritty", "Hardcore", "Poverty to Success"]
  }
];
