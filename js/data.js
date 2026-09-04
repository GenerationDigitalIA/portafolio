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
    id: "img-4",
    type: "image",
    title: "Póster publicitario premium de boAt para auriculares inalámbricos",
    description: "Un póster publicitario premium y futurista de boAt en una composición cuadrada 1:1, que presenta un auricular inalámbrico sobre la oreja de alta gama como el producto héroe dominante. El auricular ultra fotorrealista, en grafito y negro con superficies metálicas, flota ligeramente sobre una plataforma negra elegante en un entorno de grafito oscuro con sutiles acentos azul eléctrico. Una tipografía geométrica en negrita que dice 'FEEL THE SOUND' (SIENTE EL SONIDO) está integrada en la composición, parcialmente detrás del auricular. El fondo presenta una arquitectura sonora conceptual. Tipografía técnica adicional destaca características como 'ACTIVE NOISE CANCELLATION' (CANCELACIÓN ACTIVA DE RUIDO) y 'DEEP BASS' (BAJOS PROFUNDOS). El logotipo de boAt está visible en la parte inferior. Iluminación comercial profesional, estética de alta resolución.",
    mediaUrl: "https://res.cloudinary.com/hmmpgzoa/image/upload/v1788484856/Gemini_Generated_Image_rck6u9rck6u9rck6.jpg",
    prompt: "Create a premium futuristic commercial advertising poster for boAt featuring a premium over-ear wireless headphone as the dominant hero product. Square 1:1 composition, sophisticated global technology advertising aesthetic, cinematic product photography, ultra-photorealistic headphone, accurate industrial design, realistic proportions, premium graphite and black materials, subtle metallic surfaces, realistic ear cushions, precise headband geometry, realistic micro-surface details, physically accurate reflections and shadows.Place the headphone floating slightly above a sleek futuristic black platform in a dark graphite environment. Use a dramatic three-quarter front camera angle with a subtle low-angle perspective, 50mm commercial lens aesthetic, razor-sharp focus on the headphone, moderate shallow depth of field, realistic perspective and sophisticated product isolation.Transform the surrounding environment into a conceptual sonic architecture. Futuristic concentric sound waves, elegant geometric structures, subtle equalizer-inspired architectural forms and flowing luminous energy pathways emerge around the headphone, visually representing immersive sound. The sound structures should feel physically integrated into the environment rather than looking like random graphic effects.Use a sophisticated technology color palette: deep black, graphite, charcoal, metallic silver, electric blue and controlled cyan accents. Keep the environment predominantly dark with selective cyan and blue illumination.Professional commercial lighting: large soft key light, subtle frontal fill, precise cyan rim light, thin white edge highlights, controlled metallic reflections, realistic contact shadow, soft atmospheric illumination, subtle volumetric depth and restrained cinematic bloom. No excessive neon glow.Integrate oversized bold geometric sans-serif typography directly into the composition. Main headline:“FEEL THE SOUND”Place the oversized headline partially behind the headphone so the product overlaps and physically interacts with the typography. Use massive uppercase white typography with clean kerning and intentional cropping at the frame edges.Add small supporting copy:“IMMERSIVE AUDIO. LIMITLESS YOU.”Add minimal premium technical labels around the product:“DEEP BASS”“ACTIVE NOISE CANCELLATION”“IMMERSIVE AUDIO”Keep typography extremely clean, sharp and professionally typeset. No clutter.Place the boAt brand identity in a refined position with sufficient breathing room.Create strong foreground, midground and background separation. The headphone is the unmistakable focal point. The futuristic sonic architecture supports the product story without competing with it.Visual hierarchy:1. Headphone2. FEEL THE SOUND headline3. Sonic architectural environment4. Supporting feature information5. boAt brand identityUltra-photorealistic premium commercial advertising photography, 8K quality, cinematic realism, physically accurate materials, realistic reflections, realistic shadows, sophisticated color grading, high dynamic range, razor-sharp product details, luxury technology campaign, editorial art direction, premium retouching, visually intelligent composition, campaign-ready advertising design.Avoid generic stock photography, cheap neon graphics, excessive glow, excessive particles, excessive lens flare, distorted headphone geometry, warped ear cups, incorrect product proportions, fake reflections, plastic-looking materials, cluttered typography, random icons, excessive colors, low-resolution details, cartoon rendering, illustration, CGI-looking product, unrealistic lighting, messy composition, illegible text.",
    model: "Google Imagen 3",
    tags: ["Publicidad", "Tecnología", "Auriculares", "boAt", "Póster", "Futurista", "Premium", "Estudio", "Fotografía"]
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
