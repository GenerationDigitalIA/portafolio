# 🌌 Generation DigitalIA — Creative AI Multimodal Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-00f2fe?style=for-the-badge&logo=github)](https://generationdigitalia.github.io/portafolio/)
[![Security Audited](https://img.shields.io/badge/Security-XSS%20%26%20CSP%20Hardened-10b981?style=for-the-badge&logo=shield)](tests/security-test.js)
[![Stack](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-9b51e0?style=for-the-badge)](https://developer.mozilla.org/)

Bienvenido al repositorio oficial del portafolio interactivo y laboratorio experimental de **Generation DigitalIA**. Este sitio reúne exploraciones artísticas, producciones audiovisuales y composiciones sintéticas generadas con modelos de inteligencia artificial de frontera.

🔗 **Sitio en vivo:** [https://generationdigitalia.github.io/portafolio/](https://generationdigitalia.github.io/portafolio/)

---

## ✨ Características Principales

* 🧠 **Lienzo Neural en Canvas:** Fondo interactivo de constelación de partículas bioluminiscentes en el Hero que reacciona suavemente al movimiento del cursor, con pausa automática en inactividad para optimizar el rendimiento (60 FPS estables).
* 🎨 **Estética Cyberpunk / Deep Tech:** Diseño visual de alta fidelidad con efectos de *mouse spotlight glow*, glassmorphism multicapa, degradados cian y púrpura neón, y tipografía moderna (`Outfit` e `Inter`).
* 🔍 **Búsqueda y Filtros en Tiempo Real:** Filtrado reactivo por categorías (*Imágenes*, *Videos*, *Audio*) y búsqueda instantánea por palabras clave en títulos, descripciones, modelos y prompts.
* 🏷️ **Filtrado Rápido por Etiquetas:** Haz clic en cualquier etiqueta (`#Tag`) en las tarjetas para filtrar la galería de forma instantánea, con indicador activo y botón de restablecimiento.
* 🖼️ **Lightbox Cinematográfico con Carrusel:** Visor de imágenes en pantalla completa con botones de navegación anterior/siguiente, contador interactivo, soporte táctil y atajos de teclado (`←`, `→`, `Escape`).
* 🔗 **Deep Linking & Compartir:** Cada creación cuenta con un identificador único en la URL (ej. `#img-1`, `#vid-1`, `#aud-1`) y botón para copiar enlace directo con desplazamiento suave y efecto de resplandor animado.
* 📋 **Copiado de Prompts con 1 Clic:** Botón integrado con feedback visual y notificación toast flotante para copiar los prompts exactos al portapapeles.
* 🎵 **Visualizador Acústico Hi-Fi:** Integración de reproductores de audio con visualizador dinámico de ondas sintéticas y enlaces directos a pistas oficiales en SoundCloud.

---

## 🛠️ Modelos y Tecnologías Generativas

| Disciplina | Modelo / Herramienta | Resolución / Calidad | Características |
| :--- | :--- | :--- | :--- |
| **Arte Visual & Publicidad** | **Google Imagen 3** | 8K Ultra-Res | Fotografía de estudio comercial, iluminación volumétrica, integración tipográfica nítida. |
| **Video Cinemático** | **Google Veo 2** | 4K Cinema (2160p) | Consistencia temporal multiframe, dirección de arte inspirada en Studio Ghibli y Makoto Shinkai. |
| **Síntesis Acústica** | **Google Lyria 3.5** | Hi-Fi 48kHz / 24-bit | Composiciones Boom Bap 90s, líneas de bajo analógicas, percusión con pegada y lírica generativa. |

---

## 🛡️ Postura y Pruebas de Seguridad Web

El portafolio ha sido diseñado y auditado bajo estándares de seguridad modernos para aplicaciones estáticas:

1. **Content Security Policy (CSP):** Política estricta mediante etiqueta `<meta>` que restringe la carga de scripts exclusivamente a `'self'`, estilos a fuentes seguras (Google Fonts) e integración de iframes únicamente a dominios verificados (`youtube.com` y `soundcloud.com`).
2. **Mitigación Estricta contra XSS:** Todas las cadenas de texto (`title`, `prompt`, `tags`, `id`) pasan por funciones de saneamiento (`escapeHTML` y `escapeAttr`) antes de ser inyectadas en el DOM.
3. **Validación de Protocolos URL:** La función `isSafeUrl()` bloquea esquemas maliciosos como `javascript:`, `data:text/html` y `vbscript:`, permitiendo únicamente `https://` y `http://`.
4. **Protección Anti-Tabnabbing:** Todos los enlaces externos con `target="_blank"` implementan `rel="noopener noreferrer"`.
5. **Cero Dependencias Externas:** Frontend construido en Vanilla JS puro, sin librerías de terceros susceptibles a vulnerabilidades de la cadena de suministro (*supply chain attacks*).
6. **Suite Automatizada de Pruebas:** Archivo de auditoría ejecutable en `tests/security-test.js` con 10 pruebas unitarias de vectores de ataque.

---

## 📁 Estructura del Proyecto

```text
portafolio/
│
├── index.html            # Estructura semántica, metadatos SEO, Schema.org y CSP
├── README.md             # Documentación técnica completa del proyecto
│
├── assets/
│   └── favicon.svg       # Favicon vectorial con capas neón cian/púrpura
│
├── css/
│   └── style.css         # Sistema de diseño, tokens CSS, componentes y animaciones
│
├── js/
│   ├── data.js           # Catálogo estructurado de creaciones y metadatos
│   └── app.js            # Motor reactivo, canvas neural, lightbox, filtros y seguridad
│
└── tests/
    └── security-test.js  # Suite de verificación de seguridad y saneamiento XSS
```

---

## 🚀 Cómo Añadir Nuevas Obras al Portafolio

Para agregar una nueva creación, abre [`js/data.js`](js/data.js) y añade un nuevo objeto al array `portfolioItems`:

```javascript
{
  id: "img-4",
  type: "image", // 'image' | 'video' | 'audio'
  category: "Fotografía Conceptual",
  title: "Título de la Nueva Creación",
  description: "Descripción detallada del concepto y contexto de la obra.",
  mediaUrl: "https://res.cloudinary.com/usuario/image/upload/nombre.jpg",
  prompt: "Prompt exacto utilizado en la generación...",
  model: "Google Imagen 3",
  resolution: "8K Ultra-Res",
  aspectRatio: "16:9 Panorámico",
  renderPipeline: "Pipeline utilizado en la creación",
  featured: true,
  tags: ["Concept Art", "Futurismo", "3D"]
}
```

El motor en `js/app.js` detectará automáticamente la nueva obra, calculará los conteos de categoría, habilitará el Lightbox y el filtrado por sus etiquetas.

---

## 🌐 Despliegue Local y Visualización

Al ser una aplicación web estática pura, puedes visualizarla directamente abriendo `index.html` en cualquier navegador moderno o utilizando un servidor estático local:

```bash
# Con Node.js npx:
npx serve .

# O con Python:
python -m http.server 8000
```

Para ejecutar la suite de pruebas de seguridad:
* **En el navegador (sin dependencias):** Abre directamente el archivo [`tests/security-runner.html`](tests/security-runner.html) en Chrome, Edge o Firefox.
* **En la terminal (Node.js):**
  ```bash
  node tests/security-test.js
  ```

---

## 📺 Canales Oficiales y Contacto

* 🎵 **SoundCloud:** [Generation DigitalIA](https://soundcloud.com/generationdigitalia)
* 🎥 **YouTube:** [@generationdigitalia](https://www.youtube.com/@generationdigitalia)
* ✉️ **Contacto Directo:** [contacto@generationdigitalia.com](mailto:contacto@generationdigitalia.com)

---

&copy; 2026 **Generation DigitalIA**. Desarrollado para rendimiento, seguridad y exploración estética.
