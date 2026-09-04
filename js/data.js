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
    title: "Campaña Publicitaria Minimalista del Apple Watch",
    description: "Una fotografía publicitaria minimalista y de alta gama en estudio que presenta un Apple Watch gigante en posición vertical sobre un suelo brillante y reflectante. Una joven mujer con una sudadera y pantalones de chándal blancos impecables se recuesta casualmente contra el gran reloj con los ojos cerrados. Fondo azul degradado suave con tipografía blanca grande y llamativa detrás. Iluminación de estudio moderna, estética ultra limpia, alta resolución.",
    mediaUrl: "https://res.cloudinary.com/hmmpgzoa/image/upload/v1788486209/apple-smartwatch-minimalist-campaign-ad.jpg",
    prompt: "Commercial ad photography, an oversized white smartwatch standing upright on a glossy reflective studio floor. A young woman in a clean white hoodie and joggers leans casually against the giant watch with eyes closed. Soft gradient blue background, large bold white typography behind. Modern studio lighting, ultra-clean aesthetic, high resolution.",
    model: "Google Imagen 3",
    tags: ["Publicidad", "Minimalista", "Apple Watch", "Moda", "Estudio", "Fotografía"]
  },
  {
    id: "img-2",
    type: "image",
    title: "Póster publicitario premium de boAt para auriculares inalámbricos",
    description: "Un póster publicitario premium y futurista de boAt en una composición cuadrada 1:1, que presenta un auricular inalámbrico sobre la oreja de alta gama como el producto héroe dominante. El auricular ultra fotorrealista, en grafito y negro con superficies metálicas, flota ligeramente sobre una plataforma negra elegante en un entorno de grafito oscuro con sutiles acentos azul eléctrico. Una tipografía geométrica en negrita que dice 'FEEL THE SOUND' (SIENTE EL SONIDO) está integrada en la composición, parcialmente detrás del auricular. El fondo presenta una arquitectura sonora conceptual. Tipografía técnica adicional destaca características como 'ACTIVE NOISE CANCELLATION' (CANCELACIÓN ACTIVA DE RUIDO) y 'DEEP BASS' (BAJOS PROFUNDOS). El logotipo de boAt está visible en la parte inferior. Iluminación comercial profesional, estética de alta resolución.",
    mediaUrl: "https://res.cloudinary.com/hmmpgzoa/image/upload/v1788486209/boat-wireless-headphones-ad.jpg",
    prompt: "Create a premium futuristic commercial advertising poster for boAt featuring a premium over-ear wireless headphone as the dominant hero product. Square 1:1 composition, sophisticated global technology advertising aesthetic, cinematic product photography, ultra-photorealistic headphone, accurate industrial design, realistic proportions, premium graphite and black materials, subtle metallic surfaces, realistic ear cushions, precise headband geometry, realistic micro-surface details, physically accurate reflections and shadows.Place the headphone floating slightly above a sleek futuristic black platform in a dark graphite environment. Use a dramatic three-quarter front camera angle with a subtle low-angle perspective, 50mm commercial lens aesthetic, razor-sharp focus on the headphone, moderate shallow depth of field, realistic perspective and sophisticated product isolation.Transform the surrounding environment into a conceptual sonic architecture. Futuristic concentric sound waves, elegant geometric structures, subtle equalizer-inspired architectural forms and flowing luminous energy pathways emerge around the headphone, visually representing immersive sound. The sound structures should feel physically integrated into the environment rather than looking like random graphic effects.Use a sophisticated technology color palette: deep black, graphite, charcoal, metallic silver, electric blue and controlled cyan accents. Keep the environment predominantly dark with selective cyan and blue illumination.Professional commercial lighting: large soft key light, subtle frontal fill, precise cyan rim light, thin white edge highlights, controlled metallic reflections, realistic contact shadow, soft atmospheric illumination, subtle volumetric depth and restrained cinematic bloom. No excessive neon glow.Integrate oversized bold geometric sans-serif typography directly into the composition. Main headline:“FEEL THE SOUND”Place the oversized headline partially behind the headphone so the product overlaps and physically interacts with the typography. Use massive uppercase white typography with clean kerning and intentional cropping at the frame edges.Add small supporting copy:“IMMERSIVE AUDIO. LIMITLESS YOU.”Add minimal premium technical labels around the product:“DEEP BASS”“ACTIVE NOISE CANCELLATION”“IMMERSIVE AUDIO”Keep typography extremely clean, sharp and professionally typeset. No clutter.Place the boAt brand identity in a refined position with sufficient breathing room.Create strong foreground, midground and background separation. The headphone is the unmistakable focal point. The futuristic sonic architecture supports the product story without competing with it.Visual hierarchy:1. Headphone2. FEEL THE SOUND headline3. Sonic architectural environment4. Supporting feature information5. boAt brand identityUltra-photorealistic premium commercial advertising photography, 8K quality, cinematic realism, physically accurate materials, realistic reflections, realistic shadows, sophisticated color grading, high dynamic range, razor-sharp product details, luxury technology campaign, editorial art direction, premium retouching, visually intelligent composition, campaign-ready advertising design.Avoid generic stock photography, cheap neon graphics, excessive glow, excessive particles, excessive lens flare, distorted headphone geometry, warped ear cups, incorrect product proportions, fake reflections, plastic-looking materials, cluttered typography, random icons, excessive colors, low-resolution details, cartoon rendering, illustration, CGI-looking product, unrealistic lighting, messy composition, illegible text.",
    model: "Google Imagen 3",
    tags: ["Publicidad", "Tecnología", "Auriculares", "boAt", "Póster", "Futurista", "Premium", "Estudio", "Fotografía"]
  },
  {
    id: "img-3",
    type: "image",
    title: "Póster de Marketing para Redes Sociales Ultra-Premium de HP OMEN",
    description: "Una imagen promocional de alta gama que presenta la computadora portátil HP OMEN. La composición se basa en el icónico diamante de OMEN como arquitectura visual, con estructuras geométricas masivas, cortes de luz angulares y sombras arquitectónicas. La computadora portátil hero flota en el centro a un ángulo de tres cuartos, alineada con precisión. El fondo es un entorno negro mate oscuro con gradientes de grafito, superficies de metal de cañón y formas de diamante de OMEN iluminadas en cyan y rojo. La tipografía 'UNLEASH' es masiva, de casi el 50% del lienzo, en una fuente futurista ultra-ancha integrada en la arquitectura de fondo. Incluye micro tipografía técnica, anotaciones tipo blueprint y marcas de alineación industrial. La jerarquía de copia incluye el titular principal 'UNLEASH', el titular secundario 'PERFORMANCE WITHOUT LIMITS', y copy de cuerpo, con un bloque de especificaciones en una cuadrícula técnica premium que detalla 'INTEL® CORE™ ULTRA 9', 'NVIDIA® RTX™ 5090', '240HZ QHD DISPLAY', y 'OMEN TEMPEST COOLING'.",
    mediaUrl: "https://res.cloudinary.com/hmmpgzoa/image/upload/v1788486208/hp-omen-unleash-marketing-poster.jpg",
    prompt: "A 4:5 vertical, ultra-premium social media marketing poster for HP OMEN, focusing on the UNLEASH campaign. The entire composition is built around OMEN's own design philosophy: precision, power, minimal aggression, dark luxury, and engineered performance, presenting the laptop as a precision machine, a weapon of focus, and a tool built for domination, combining luxury technology with motorsport engineering restraint and Porsche precision, all with OMEN attitude. The iconic OMEN diamond becomes the entire visual architecture, expanding across the composition into massive geometric structures, angular light cuts, and architectural shadows. Every graphic element originates from the OMEN symbol. Massive oversized typography, 'UNLEASH', occupies nearly 50% of the canvas in an ultra-wide futuristic typography with custom geometric letterforms integrated into the background architecture, making the typography feel laser-cut from the environment and unified with the product visual system. The hero HP OMEN laptop floats centrally at a three-quarter angle, precisely aligned in a luxury product rendering with a controlled perspective, appearing as a serious performance object resembling a high-end sports car. The background system is a deep matte black environment with dark graphite gradients, gunmetal surfaces, large illuminated OMEN diamond shapes, massive architectural planes, and sharp geometric shadows, with a premium industrial atmosphere and subtle fog layers for sophisticated depth, devoid of gaming-room aesthetics, RGB chaos, or cyberpunk city elements. The graphic design system includes micro technical typography, blueprint-inspired annotations, precision measurement graphics, grid references, and industrial alignment marks, all with a luxury industrial design language of Behance feature quality. Copy hierarchy features the primary headline 'UNLEASH', secondary headline 'PERFORMANCE WITHOUT LIMITS', and body copy: 'Every frame matters. Every decision counts. Designed for players who demand precision. Built for those who refuse compromise. Victory starts here.' A specification block presents key specs using a premium technical grid inspired by luxury automotive specification cards, listing: 'INTEL® CORE™ ULTRA 9', 'NVIDIA® RTX™ 5090', '240HZ QHD DISPLAY', and 'OMEN TEMPEST COOLING'. The color system is limited to matte black, graphite gray, titanium silver, ice white, with subtle electric cyan accents and minimal OMEN red accents, without rainbow RGB or neon overload. Lighting is reminiscent of premium commercial product photography with precision spotlighting, automotive-grade reflections, controlled edge lighting, hard geometric highlights, and deep shadow transitions in a studio-quality rendering with cinematic contrast. Detailing includes floating shadows, architectural light beams, OMEN diamond reflections, subtle atmospheric haze, luxury negative space, and perfect typography spacing. The overall impression is one of engineering, expense, precision, and power.",
    model: "Google Imagen 3",
    tags: ["HP OMEN", "Unleash", "Rendimiento", "Lujo Industrial", "Diseño Premium", "Póster de Marketing", "Redes Sociales", "Tecnología"]
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
    id: "vid-2",
    type: "video",
    title: "El Viaje de la Vida: De Niño Soñador a Anciano Sabio",
    description: "Cortometraje animado estilo Studio Ghibli sobre el paso del tiempo, el crecimiento personal y la serenidad de alcanzar la cima.",
    mediaUrl: "https://www.youtube.com/embed/x3AxtZ2BaHE",
    prompt: "Cinematic anime style, Makoto Shinkai and Studio Ghibli aesthetic. A boy running happily in a spring forest grows into a determined youth climbing cliffs, then an adult running through ancient ruins in the rain, finally reaching old age as a wise bearded wanderer standing peacefully on a snowy mountain summit at sunrise, high emotional resonance, painterly lighting.",
    model: "Google Veo 2",
    tags: ["Anime", "Studio Ghibli", "Reflexión", "Animación 2D", "Filosofía"]
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
