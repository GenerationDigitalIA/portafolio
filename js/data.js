/**
 * Generation DigitalIA - Catálogo Oficial de Obras y Creaciones Multimedia
 * Laboratorio Creativo & Síntesis Generativa Multimodal
 * 
 * Versión: 2.5.0
 * Última Actualización: 2026-09
 * Disciplinas: Video Cinemático, Arte Visual Publicitario, Síntesis Acústica Hi-Fi
 */

const portfolioMeta = {
  studio: "Generation DigitalIA",
  version: "2.5.0",
  lastUpdated: "Septiembre 2026",
  license: "Creative Commons BY-NC 4.0",
  totalDisciplines: 3,
  supportedModels: [
    "Google Imagen 3",
    "Google Veo 2",
    "Google Lyria 3.5",
    "Runway Gen-3",
    "Kling AI",
    "Suno v4"
  ]
};

const portfolioItems = [
  {
    id: "img-1",
    type: "image",
    category: "Fotografía Comercial & Moda",
    title: "Campaña Publicitaria Minimalista del Apple Watch",
    description: "Fotografía publicitaria minimalista y de alta gama en estudio que presenta un Apple Watch gigante en posición vertical sobre un suelo brillante y reflectante. Una joven mujer con atuendo blanco impecable se recuesta casualmente contra el reloj con ojos cerrados. Composición con iluminación de estudio volumétrica, fondo azul degradado suave y tipografía de precisión.",
    mediaUrl: "https://res.cloudinary.com/hmmpgzoa/image/upload/v1788486209/apple-smartwatch-minimalist-campaign-ad.jpg",
    prompt: "Commercial ad photography, an oversized white smartwatch standing upright on a glossy reflective studio floor. A young woman in a clean white hoodie and joggers leans casually against the giant watch with eyes closed. Soft gradient blue background, large bold white typography behind. Modern studio lighting, ultra-clean aesthetic, high resolution.",
    model: "Google Imagen 3",
    resolution: "8K Ultra-Res",
    aspectRatio: "1:1 Cuadrado",
    renderPipeline: "Google Imagen 3 + Retoque Comercial High-Key",
    featured: true,
    tags: ["Publicidad", "Minimalista", "Apple Watch", "Moda", "Estudio", "Fotografía", "High-Key"]
  },
  {
    id: "img-2",
    type: "image",
    category: "Diseño Publicitario Futurista",
    title: "Póster publicitario premium de boAt para auriculares inalámbricos",
    description: "Póster publicitario comercial en composición 1:1 con un auricular inalámbrico over-ear de alta gama como protagonista. Materiales fotorrealistas en grafito y negro mate con superficies metálicas reflectantes, flotando sobre una plataforma conceptual con arquitectura de ondas sonoras concéntricas e iluminación en azul cian eléctrico.",
    mediaUrl: "https://res.cloudinary.com/hmmpgzoa/image/upload/v1788486209/boat-wireless-headphones-ad.jpg",
    prompt: "Create a premium futuristic commercial advertising poster for boAt featuring a premium over-ear wireless headphone as the dominant hero product. Square 1:1 composition, sophisticated global technology advertising aesthetic, cinematic product photography, ultra-photorealistic headphone, accurate industrial design, realistic proportions, premium graphite and black materials, subtle metallic surfaces, realistic ear cushions, precise headband geometry, realistic micro-surface details, physically accurate reflections and shadows.Place the headphone floating slightly above a sleek futuristic black platform in a dark graphite environment. Use a dramatic three-quarter front camera angle with a subtle low-angle perspective, 50mm commercial lens aesthetic, razor-sharp focus on the headphone, moderate shallow depth of field, realistic perspective and sophisticated product isolation.Transform the surrounding environment into a conceptual sonic architecture. Futuristic concentric sound waves, elegant geometric structures, subtle equalizer-inspired architectural forms and flowing luminous energy pathways emerge around the headphone, visually representing immersive sound. The sound structures should feel physically integrated into the environment rather than looking like random graphic effects.Use a sophisticated technology color palette: deep black, graphite, charcoal, metallic silver, electric blue and controlled cyan accents. Keep the environment predominantly dark with selective cyan and blue illumination.Professional commercial lighting: large soft key light, subtle frontal fill, precise cyan rim light, thin white edge highlights, controlled metallic reflections, realistic contact shadow, soft atmospheric illumination, subtle volumetric depth and restrained cinematic bloom. No excessive neon glow.Integrate oversized bold geometric sans-serif typography directly into the composition. Main headline:“FEEL THE SOUND”Place the oversized headline partially behind the headphone so the product overlaps and physically interacts with the typography. Use massive uppercase white typography with clean kerning and intentional cropping at the frame edges.Add small supporting copy:“IMMERSIVE AUDIO. LIMITLESS YOU.”Add minimal premium technical labels around the product:“DEEP BASS”“ACTIVE NOISE CANCELLATION”“IMMERSIVE AUDIO”Keep typography extremely clean, sharp and professionally typeset. No clutter.Place the boAt brand identity in a refined position with sufficient breathing room.Create strong foreground, midground and background separation. The headphone is the unmistakable focal point. The futuristic sonic architecture supports the product story without competing with it.Visual hierarchy:1. Headphone2. FEEL THE SOUND headline3. Sonic architectural environment4. Supporting feature information5. boAt brand identityUltra-photorealistic premium commercial advertising photography, 8K quality, cinematic realism, physically accurate materials, realistic reflections, realistic shadows, sophisticated color grading, high dynamic range, razor-sharp product details, luxury technology campaign, editorial art direction, premium retouching, visually intelligent composition, campaign-ready advertising design.Avoid generic stock photography, cheap neon graphics, excessive glow, excessive particles, excessive lens flare, distorted headphone geometry, warped ear cups, incorrect product proportions, fake reflections, plastic-looking materials, cluttered typography, random icons, excessive colors, low-resolution details, cartoon rendering, illustration, CGI-looking product, unrealistic lighting, messy composition, illegible text.",
    model: "Google Imagen 3",
    resolution: "8K Ultra-Res",
    aspectRatio: "1:1 Cuadrado",
    renderPipeline: "Google Imagen 3 + Iluminación Espectral de Borde",
    featured: true,
    tags: ["Publicidad", "Tecnología", "Auriculares", "boAt", "Póster", "Futurista", "Premium", "Estudio", "Audio"]
  },
  {
    id: "img-3",
    type: "image",
    category: "Marketing Gráfico Ultra-Tech",
    title: "Póster de Marketing para Redes Sociales Ultra-Premium de HP OMEN",
    description: "Composición vertical 4:5 construida sobre el icónico diamante geométrico de HP OMEN. La laptop de alto rendimiento flota con perspectiva angular de tres cuartos en un entorno negro mate con degradados de grafito, cortes de luz volumétricos en cian y acentos sutiles en rojo OMEN. Integración tipográfica con especificaciones técnicas estilo blueprint.",
    mediaUrl: "https://res.cloudinary.com/hmmpgzoa/image/upload/v1788486208/hp-omen-unleash-marketing-poster.jpg",
    prompt: "A 4:5 vertical, ultra-premium social media marketing poster for HP OMEN, focusing on the UNLEASH campaign. The entire composition is built around OMEN's own design philosophy: precision, power, minimal aggression, dark luxury, and engineered performance, presenting the laptop as a precision machine, a weapon of focus, and a tool built for domination, combining luxury technology with motorsport engineering restraint and Porsche precision, all with OMEN attitude. The iconic OMEN diamond becomes the entire visual architecture, expanding across the composition into massive geometric structures, angular light cuts, and architectural shadows. Every graphic element originates from the OMEN symbol. Massive oversized typography, 'UNLEASH', occupies nearly 50% of the canvas in an ultra-wide futuristic typography with custom geometric letterforms integrated into the background architecture, making the typography feel laser-cut from the environment and unified with the product visual system. The hero HP OMEN laptop floats centrally at a three-quarter angle, precisely aligned in a luxury product rendering with a controlled perspective, appearing as a serious performance object resembling a high-end sports car. The background system is a deep matte black environment with dark graphite gradients, gunmetal surfaces, large illuminated OMEN diamond shapes, massive architectural planes, and sharp geometric shadows, with a premium industrial atmosphere and subtle fog layers for sophisticated depth, devoid of gaming-room aesthetics, RGB chaos, or cyberpunk city elements. The graphic design system includes micro technical typography, blueprint-inspired annotations, precision measurement graphics, grid references, and industrial alignment marks, all with a luxury industrial design language of Behance feature quality. Copy hierarchy features the primary headline 'UNLEASH', secondary headline 'PERFORMANCE WITHOUT LIMITS', and body copy: 'Every frame matters. Every decision counts. Designed for players who demand precision. Built for those who refuse compromise. Victory starts here.' A specification block presents key specs using a premium technical grid inspired by luxury automotive specification cards, listing: 'INTEL® CORE™ ULTRA 9', 'NVIDIA® RTX™ 5090', '240HZ QHD DISPLAY', and 'OMEN TEMPEST COOLING'. The color system is limited to matte black, graphite gray, titanium silver, ice white, with subtle electric cyan accents and minimal OMEN red accents, without rainbow RGB or neon overload. Lighting is reminiscent of premium commercial product photography with precision spotlighting, automotive-grade reflections, controlled edge lighting, hard geometric highlights, and deep shadow transitions in a studio-quality rendering with cinematic contrast. Detailing includes floating shadows, architectural light beams, OMEN diamond reflections, subtle atmospheric haze, luxury negative space, and perfect typography spacing. The overall impression is one of engineering, expense, precision, and power.",
    model: "Google Imagen 3",
    resolution: "8K Ultra-Res",
    aspectRatio: "4:5 Vertical",
    renderPipeline: "Google Imagen 3 + Render Arquitectónico Industrial",
    featured: true,
    tags: ["HP OMEN", "Unleash", "Rendimiento", "Lujo Industrial", "Diseño Premium", "Póster de Marketing", "Redes Sociales", "Tecnología"]
  },
  {
    id: "vid-1",
    type: "video",
    category: "Cortometraje de Animación Cinemática",
    title: "El Viaje de la Vida: De Niño Soñador a Anciano Sabio",
    description: "Cortometraje narrativo animado con estética pictórica inspirada en Studio Ghibli y Makoto Shinkai. Explora la evolución humana a través de cuatro estaciones y etapas vitales: niñez en el bosque primaveral, juventud escalando acantilados, madurez entre ruinas bajo la lluvia y vejez serena contemplando el amanecer en la cumbre nevada.",
    mediaUrl: "https://www.youtube.com/embed/x3AxtZ2BaHE",
    prompt: "Cinematic anime style, Makoto Shinkai and Studio Ghibli aesthetic. A boy running happily in a spring forest grows into a determined youth climbing cliffs, then an adult running through ancient ruins in the rain, finally reaching old age as a wise bearded wanderer standing peacefully on a snowy mountain summit at sunrise, high emotional resonance, painterly lighting.",
    model: "Google Veo 2",
    resolution: "4K Cinema (2160p)",
    aspectRatio: "16:9 Widescreen",
    renderPipeline: "Google DeepMind Veo 2 + Consistencia Temporal Multiframe",
    featured: true,
    tags: ["Anime", "Studio Ghibli", "Reflexión", "Animación 2D", "Filosofía", "Cinematografía", "Narrativa"]
  },
  {
    id: "aud-1",
    type: "audio",
    category: "Composición Musical Sintética",
    title: "Pavement Throne",
    description: "Himno agresivo de rap battle con el sonido puro de la Costa Este de los años 90 a 92 BPM. Construido con bombos y cajas con pegada analógica, scratches de vinilo arenosos, un loop de piano dramático en tono menor y un bajo profundo de sintetizador subgrave. La lírica generada explora la resiliencia y el triunfo en el cypher.",
    mediaUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2394131871&color=%2300f2fe&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    externalUrl: "https://soundcloud.com/generationdigitalia/pavement-throne",
    author: "Generation DigitalIA",
    prompt: "An aggressive 90s East Coast boom bap rap battle track, 92 BPM, heavy punchy kick and snare, gritty vinyl scratches, dramatic minor-key piano loop, deep baseline. Intense, hungry, competitive male flow with complex rhyme schemes. Lyrical theme: overcoming poverty, self-reliance, grinding from zero to success, defying the odds in the cipher.",
    model: "Lyria 3.5 / Street Level Logic (Album)",
    resolution: "Hi-Fi 48kHz / 24-bit",
    aspectRatio: "Estéreo Espectral",
    renderPipeline: "Google Lyria 3.5 + Masterización Analógica de Cinta",
    featured: true,
    tags: ["Rap Battle", "90s Hip Hop", "East Coast", "Boom Bap", "Gritty", "Hardcore", "Poverty to Success", "Vinyl Scratches"]
  },
  {
    id: "aud-2",
    type: "audio",
    category: "Composición Musical Sintética",
    title: "90s Boom Bap Rap Battle",
    description: "Duelo lírico subterráneo al más puro estilo boom bap de los 90 a 92 BPM. Cuenta con un groove rítmico implacable, percusión contundente, scratches sucios de vinilo, línea de bajo oscura y una sección de metales triunfantes que elevan la tensión vocal del cypher.",
    mediaUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2394179835&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    externalUrl: "https://soundcloud.com/generationdigitalia/90s-boom-bap-rap-battle",
    author: "Generation DigitalIA",
    prompt: "Boom bap rap battle, 90s hip-hop, aggressive and fast lyrical flow, hard-hitting 808 drums, gritty vinyl scratch, menacing bassline, triumphant brass section, underground cypher vibe, 92 BPM, raw male vocals, energetic, motivational yet fierce, defiant.",
    model: "Lyria 3.5 / Lyria (Concrete Cypher)",
    resolution: "Hi-Fi 48kHz / 24-bit",
    aspectRatio: "Estéreo Espectral",
    renderPipeline: "Google Lyria 3.5 + Saturación Armónica Vintage",
    featured: true,
    tags: ["Boom Bap", "90s Hip Hop", "Rap Battle", "East Coast", "Underground Cypher", "Hardcore Hip Hop", "Vinyl Scratches", "92 BPM"]
  }
];

// Hacer accesible en window de forma segura para compatibilidad
if (typeof window !== 'undefined') {
  window.portfolioItems = portfolioItems;
  window.portfolioMeta = portfolioMeta;
}
