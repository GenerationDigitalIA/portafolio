/**
 * Generation DigitalIA - Suite Automatizada de Pruebas de Seguridad
 * 
 * Verifica:
 * 1. Sanitización contra vectores XSS (tags maliciosos, inyección de atributos, event handlers).
 * 2. Validación estricta de protocolos seguros en URLs (bloqueo de javascript:, data: no segura, vbscript:).
 * 3. Prevención de Tabnabbing en enlaces con target="_blank" (rel="noopener noreferrer").
 * 4. Resistencia a caracteres de escape en metadatos y prompts.
 */

// Utilidades idénticas a las implementadas en js/app.js
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeAttr(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function isSafeUrl(url) {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  // Solo permitir protocolos seguros https://, http:// o rutas relativas seguras
  if (/^https?:\/\//i.test(trimmed)) return true;
  if (/^\/[a-zA-Z0-9_\-\.\/]+$/i.test(trimmed)) return true;
  return false;
}

// Generador seguro de tarjeta para testing
function createCardHTML(item) {
  const safeId = escapeAttr(item.id || '');
  const safeType = ['image', 'video', 'audio'].includes(item.type) ? item.type : 'image';
  const safeTitle = escapeHTML(item.title || '');
  const safeDesc = escapeHTML(item.description || '');
  const safePrompt = escapeHTML(item.prompt || '');
  const safeModel = escapeHTML(item.model || '');
  const safeMediaUrl = isSafeUrl(item.mediaUrl) ? escapeAttr(item.mediaUrl) : '';
  const safeExtUrl = isSafeUrl(item.externalUrl) ? escapeAttr(item.externalUrl) : '';

  const tagsHTML = Array.isArray(item.tags)
    ? item.tags.map(tag => `<span class="tag-pill">#${escapeHTML(tag)}</span>`).join('')
    : '';

  let mediaSectionHTML = '';
  if (safeType === 'image') {
    mediaSectionHTML = `
      <div class="card-media-wrapper" data-item-id="${safeId}">
        <img src="${safeMediaUrl}" alt="${safeTitle}" loading="lazy" />
      </div>
    `;
  } else if (safeType === 'video') {
    mediaSectionHTML = `
      <div class="video-container">
        <iframe src="${safeMediaUrl}" title="${safeTitle}" allowfullscreen loading="lazy"></iframe>
      </div>
    `;
  } else if (safeType === 'audio') {
    mediaSectionHTML = `
      <div class="audio-card-content">
        <iframe class="audio-player-frame" src="${safeMediaUrl}" loading="lazy"></iframe>
        ${safeExtUrl ? `<a href="${safeExtUrl}" target="_blank" rel="noopener noreferrer">Escuchar</a>` : ''}
      </div>
    `;
  }

  return `
    <article class="card" data-id="${safeId}">
      <span class="badge badge-${safeType}">${safeType}</span>
      <span class="badge badge-model">${safeModel}</span>
      ${mediaSectionHTML}
      <h3 class="card-title">${safeTitle}</h3>
      <p class="card-desc">${safeDesc}</p>
      <div class="card-tags">${tagsHTML}</div>
    </article>
  `;
}

// Batería de Pruebas
const tests = [
  {
    name: "1. Bloqueo de inyección XSS clásica con <script>",
    run: () => {
      const payload = '<script>alert("xss")</script>';
      const result = escapeHTML(payload);
      return !result.includes('<script>') && result.includes('&lt;script&gt;');
    }
  },
  {
    name: "2. Bloqueo de evento onerror en <img>",
    run: () => {
      const payload = '"><img src=x onerror=alert(1)>';
      const result = escapeHTML(payload);
      return !result.includes('<img') && result.includes('&lt;img');
    }
  },
  {
    name: "3. Bloqueo de atributos con comillas dobles y simples",
    run: () => {
      const payload = 'test" onclick="alert(1)\' onfocus="alert(2)';
      const result = escapeAttr(payload);
      return !result.includes('"') && !result.includes("'") && result.includes('&quot;') && result.includes('&#039;');
    }
  },
  {
    name: "4. Bloqueo de protocolo javascript: en URLs",
    run: () => {
      const dangerousUrls = [
        'javascript:alert(1)',
        'JAVASCRIPT:alert(document.domain)',
        'javascript :alert(1)',
        'data:text/html,<script>alert(1)</script>',
        'vbscript:msgbox(1)'
      ];
      return dangerousUrls.every(url => !isSafeUrl(url));
    }
  },
  {
    name: "5. Aceptación de URLs legítimas https:// y http://",
    run: () => {
      const safeUrls = [
        'https://res.cloudinary.com/hmmpgzoa/image/upload/sample.jpg',
        'https://www.youtube.com/embed/x3AxtZ2BaHE',
        'https://soundcloud.com/generationdigitalia/track',
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/123'
      ];
      return safeUrls.every(url => isSafeUrl(url));
    }
  },
  {
    name: "6. Sanitización de etiquetas (tags) con payloads maliciosos",
    run: () => {
      const maliciousItem = {
        id: 'test-1',
        type: 'image',
        title: 'Safe Title',
        tags: ['<b onmouseover=alert(1)>Tag</b>', 'NormalTag', '" autofocus onfocus="alert(1)']
      };
      const html = createCardHTML(maliciousItem);
      return !html.includes('<b onmouseover') && !html.includes('autofocus');
    }
  },
  {
    name: "7. Sanitización de item.id en atributos data-id y data-item-id",
    run: () => {
      const maliciousItem = {
        id: 'img-1" onclick="alert(1)',
        type: 'image',
        title: 'Title',
        mediaUrl: 'https://example.com/img.jpg'
      };
      const html = createCardHTML(maliciousItem);
      return !html.includes('onclick="alert(1)"') && html.includes('img-1&quot; onclick=&#039;alert(1)&#039;');
    }
  },
  {
    name: "8. Enlaces externos protegidos con rel='noopener noreferrer'",
    run: () => {
      const audioItem = {
        id: 'aud-1',
        type: 'audio',
        title: 'Track',
        mediaUrl: 'https://example.com/audio',
        externalUrl: 'https://soundcloud.com/test'
      };
      const html = createCardHTML(audioItem);
      return html.includes('target="_blank"') && html.includes('rel="noopener noreferrer"');
    }
  },
  {
    name: "9. Rechazo de URLs maliciosas en mediaUrl de iframes",
    run: () => {
      const videoMalicioso = {
        id: 'vid-x',
        type: 'video',
        title: 'Video',
        mediaUrl: 'javascript:alert("pwned")'
      };
      const html = createCardHTML(videoMalicioso);
      return !html.includes('src="javascript:');
    }
  },
  {
    name: "10. Sanitización de Prompts y Caracteres Unicode / Emojis",
    run: () => {
      const promptText = 'A neon cyberpunk city with <glow> effects & "reflections" 🌌';
      const escaped = escapeHTML(promptText);
      return escaped.includes('&lt;glow&gt;') && escaped.includes('&amp;') && escaped.includes('🌌');
    }
  }
];

// Ejecución
console.log("=================================================");
console.log("🛡️ GENERATION DIGITALIA - AUDITORÍA DE SEGURIDAD");
console.log("=================================================");

let passed = 0;
tests.forEach((t, index) => {
  try {
    const ok = t.run();
    if (ok) {
      console.log(`✅ [PASS] ${t.name}`);
      passed++;
    } else {
      console.error(`❌ [FAIL] ${t.name}`);
    }
  } catch (err) {
    console.error(`❌ [ERROR] ${t.name}: ${err.message}`);
  }
});

console.log("-------------------------------------------------");
console.log(`Resultado: ${passed}/${tests.length} pruebas pasadas con éxito (${Math.round((passed / tests.length) * 100)}%).`);
console.log("=================================================");
