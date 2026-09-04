/**
 * Generation DigitalIA - Lógica Interactiva del Portafolio & Engine Multimedia
 * 
 * Incluye:
 * - Canvas interactivo de constelación neural en Hero
 * - Renderizado reactivo seguro contra XSS y saneamiento estricto
 * - Sistema de filtros por categoría y filtrado instantáneo por tags
 * - Buscador en tiempo real con resaltado
 * - Lightbox cinematográfico con carrusel de navegación y atajos de teclado
 * - Deep linking con scroll suave y efecto de resplandor (halo highlight)
 * - Copiado de enlaces directos y prompts con feedback háptico/visual
 * - Acordeón accesible para sección FAQ y Specs
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. Elementos del DOM
  // ==========================================================================
  const galleryGrid = document.getElementById('gallery-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  const resultsCounter = document.getElementById('results-counter');
  const activeTagBanner = document.getElementById('active-tag-banner');
  const activeTagName = document.getElementById('active-tag-name');
  const clearTagBtn = document.getElementById('clear-tag-btn');

  // Lightbox
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxModel = document.getElementById('lightbox-model');
  const lightboxResolution = document.getElementById('lightbox-resolution');
  const lightboxPrompt = document.getElementById('lightbox-prompt');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxCopyBtn = document.getElementById('lightbox-copy-btn');

  // Utilidades flotantes
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  const heroCanvas = document.getElementById('hero-particles');

  // ==========================================================================
  // 2. Estado Reactivo de la Aplicación
  // ==========================================================================
  let currentFilter = 'all';
  let activeTag = null;
  let searchQuery = '';
  let activeLightboxIndex = -1;
  const imageItems = portfolioItems.filter(item => item.type === 'image');

  // ==========================================================================
  // 3. Sanitización y Funciones de Seguridad (Endurecimiento XSS)
  // ==========================================================================
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
    // Protocolos estrictamente válidos: https://, http:// o rutas relativas seguras
    if (/^https?:\/\//i.test(trimmed)) return true;
    if (/^\/[a-zA-Z0-9_\-\.\/]+$/i.test(trimmed)) return true;
    return false;
  }

  // ==========================================================================
  // 4. Actualización de Conteos de Filtros
  // ==========================================================================
  function updateFilterCounts() {
    filterBtns.forEach(btn => {
      const filter = btn.dataset.filter;
      const countSpan = btn.querySelector('.filter-count');
      if (!countSpan) return;

      if (filter === 'all') {
        countSpan.textContent = portfolioItems.length;
      } else {
        const count = portfolioItems.filter(item => item.type === filter).length;
        countSpan.textContent = count;
      }
    });
  }

  // ==========================================================================
  // 5. Filtrado Dinámico de Obras
  // ==========================================================================
  function getFilteredItems() {
    return portfolioItems.filter(item => {
      // Filtro por categoría principal
      const matchesCategory = (currentFilter === 'all') || (item.type === currentFilter);

      // Filtro por etiqueta activa (tag pill clickeado)
      const matchesTag = !activeTag || (item.tags && item.tags.includes(activeTag));

      // Filtro por término de búsqueda en tiempo real
      if (!searchQuery) return matchesCategory && matchesTag;

      const q = searchQuery.toLowerCase().trim();
      const inTitle = item.title ? item.title.toLowerCase().includes(q) : false;
      const inDesc = item.description ? item.description.toLowerCase().includes(q) : false;
      const inPrompt = item.prompt ? item.prompt.toLowerCase().includes(q) : false;
      const inModel = item.model ? item.model.toLowerCase().includes(q) : false;
      const inCategory = item.category ? item.category.toLowerCase().includes(q) : false;
      const inTags = item.tags ? item.tags.some(tag => tag.toLowerCase().includes(q)) : false;

      return matchesCategory && matchesTag && (inTitle || inDesc || inPrompt || inModel || inCategory || inTags);
    });
  }

  // ==========================================================================
  // 6. Renderizado de la Galería Multimedia
  // ==========================================================================
  function renderGallery() {
    const items = getFilteredItems();

    // Actualizar indicador textual de resultados
    if (resultsCounter) {
      const tagInfo = activeTag ? ` con etiqueta #${escapeHTML(activeTag)}` : '';
      resultsCounter.textContent = `Mostrando ${items.length} de ${portfolioItems.length} creaciones${tagInfo}`;
    }

    // Gestionar banner de etiqueta activa
    if (activeTagBanner && activeTagName) {
      if (activeTag) {
        activeTagName.textContent = `#${activeTag}`;
        activeTagBanner.classList.add('visible');
      } else {
        activeTagBanner.classList.remove('visible');
      }
    }

    // Estado vacío si no hay coincidencias
    if (items.length === 0) {
      galleryGrid.innerHTML = `
        <div class="empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <h3>No se encontraron creaciones coincidentes</h3>
          <p>Intenta con otros términos de búsqueda, elimina la etiqueta o selecciona otra categoría.</p>
          <button class="filter-btn active" id="btn-reset-filters" style="margin: 0 auto;">
            Restablecer Filtros y Búsqueda
          </button>
        </div>
      `;

      const resetBtn = document.getElementById('btn-reset-filters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentFilter = 'all';
          activeTag = null;
          searchQuery = '';
          if (searchInput) searchInput.value = '';
          if (searchClear) searchClear.classList.remove('visible');
          filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
          renderGallery();
        });
      }
      return;
    }

    galleryGrid.innerHTML = items.map(item => createCardHTML(item)).join('');

    // Adjuntar escuchadores a las tarjetas generadas
    attachCardListeners();
  }

  // Generador de HTML de cada tarjeta con sanitización total
  function createCardHTML(item) {
    const safeId = escapeAttr(item.id || '');
    const isImage = item.type === 'image';
    const isVideo = item.type === 'video';
    const isAudio = item.type === 'audio';

    const safeTitle = escapeHTML(item.title || '');
    const safeDesc = escapeHTML(item.description || '');
    const safePrompt = escapeHTML(item.prompt || '');
    const safeModel = escapeHTML(item.model || 'Modelo Generativo IA');
    const safeResolution = escapeHTML(item.resolution || '');
    const safeCategory = escapeHTML(item.category || '');
    const safeMediaUrl = isSafeUrl(item.mediaUrl) ? escapeAttr(item.mediaUrl) : '';
    const safeExtUrl = isSafeUrl(item.externalUrl) ? escapeAttr(item.externalUrl) : '';

    let badgeTypeClass = `badge-${item.type}`;
    let typeLabel = isImage ? '🖼️ Imagen IA' : isVideo ? '🎬 Video IA' : '🎵 Audio IA';

    // Tags interactivos con protección XSS
    const tagsHTML = item.tags ? item.tags.map(tag => {
      const safeTag = escapeHTML(tag);
      const isTagActive = activeTag === tag ? 'active' : '';
      return `<button class="tag-pill ${isTagActive}" data-tag="${escapeAttr(tag)}" title="Filtrar por #${safeTag}">#${safeTag}</button>`;
    }).join('') : '';

    // Contenedor multimedia seguro según tipo
    let mediaSectionHTML = '';

    if (isImage) {
      mediaSectionHTML = `
        <div class="card-media-wrapper" data-item-id="${safeId}" title="Clic para ampliar y explorar en Lightbox">
          <img src="${safeMediaUrl}" alt="${safeTitle}" loading="lazy" />
          <div class="media-overlay">
            <span class="overlay-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              Explorar en Detalle
            </span>
          </div>
        </div>
      `;
    } else if (isVideo) {
      mediaSectionHTML = `
        <div class="video-container">
          <iframe 
            src="${safeMediaUrl}" 
            title="${safeTitle}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>
      `;
    } else if (isAudio) {
      mediaSectionHTML = `
        <div class="audio-card-content">
          <div class="audio-wave-visualizer" title="Visualizador Sintético Hi-Fi">
            <div class="wave-bar"></div>
            <div class="wave-bar"></div>
            <div class="wave-bar"></div>
            <div class="wave-bar"></div>
            <div class="wave-bar"></div>
            <span class="wave-label">Audio Espectral 48kHz</span>
          </div>
          <iframe 
            class="audio-player-frame"
            scrolling="no" 
            frameborder="no" 
            allow="autoplay; encrypted-media" 
            src="${safeMediaUrl}"
            loading="lazy"
            title="${safeTitle}">
          </iframe>
          ${safeExtUrl ? `
            <div class="audio-track-footer">
              <a href="${safeExtUrl}" target="_blank" rel="noopener noreferrer">
                <span>🎵 Abrir en SoundCloud Oficial</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
              </a>
            </div>
          ` : ''}
        </div>
      `;
    }

    // Bloque de Prompt seguro con botón de copiado
    const promptBlockHTML = safePrompt ? `
      <div class="prompt-box">
        <div class="prompt-header">
          <span class="prompt-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            Prompt Generativo
          </span>
          <button class="btn-copy" data-prompt="${escapeAttr(item.prompt)}" title="Copiar prompt al portapapeles">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copiar
          </button>
        </div>
        <p class="prompt-text">${safePrompt}</p>
      </div>
    ` : '';

    return `
      <article class="card" id="${safeId}" data-id="${safeId}">
        <div class="card-header-badge">
          <span class="badge ${badgeTypeClass}">${typeLabel}</span>
          <span class="badge badge-model">${safeModel}</span>
          ${safeResolution ? `<span class="badge badge-resolution">${safeResolution}</span>` : ''}
        </div>

        ${mediaSectionHTML}

        <div class="card-body">
          ${safeCategory ? `<span class="card-category">${safeCategory}</span>` : ''}
          <h3 class="card-title">${safeTitle}</h3>
          <p class="card-desc">${safeDesc}</p>
          
          ${promptBlockHTML}

          <div class="card-footer-actions">
            <div class="card-tags">
              ${tagsHTML}
            </div>
            <button class="btn-share-card" data-id="${safeId}" title="Copiar enlace directo a esta obra" aria-label="Compartir obra">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  // ==========================================================================
  // 7. Escuchadores Interactivos de Tarjetas
  // ==========================================================================
  function attachCardListeners() {
    // Spotlight dinámico de cursor
    const cards = galleryGrid.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });

    // Abrir Lightbox en imágenes
    const imageWrappers = galleryGrid.querySelectorAll('.card-media-wrapper');
    imageWrappers.forEach(wrapper => {
      wrapper.addEventListener('click', () => {
        const id = wrapper.dataset.itemId;
        const index = imageItems.findIndex(i => i.id === id);
        if (index !== -1) openLightboxIndex(index);
      });
    });

    // Copiar Prompt
    const copyBtns = galleryGrid.querySelectorAll('.btn-copy');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const text = btn.dataset.prompt;
        copyToClipboard(text, btn, "¡Prompt copiado al portapapeles con éxito!");
      });
    });

    // Copiar enlace directo / Compartir obra
    const shareBtns = galleryGrid.querySelectorAll('.btn-share-card');
    shareBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const directUrl = `${window.location.origin}${window.location.pathname}#${id}`;
        copyToClipboard(directUrl, btn, "¡Enlace directo a la obra copiado!");
      });
    });

    // Filtrar al hacer clic en un Tag
    const tagBtns = galleryGrid.querySelectorAll('.tag-pill');
    tagBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const clickedTag = btn.dataset.tag;
        if (activeTag === clickedTag) {
          activeTag = null; // Quitar filtro si se clica de nuevo
        } else {
          activeTag = clickedTag;
        }
        renderGallery();
        // Desplazar suavemente a la galería
        const galeriaElem = document.getElementById('galeria');
        if (galeriaElem) {
          galeriaElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ==========================================================================
  // 8. Utilidad de Copiado Seguro al Portapapeles con Feedback Visual
  // ==========================================================================
  function copyToClipboard(text, triggerBtn, successMessage = "Copiado con éxito") {
    if (!text) return;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showCopyFeedback(triggerBtn, successMessage);
      }).catch(() => fallbackCopy(text, triggerBtn, successMessage));
    } else {
      fallbackCopy(text, triggerBtn, successMessage);
    }
  }

  function fallbackCopy(text, triggerBtn, successMessage) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showCopyFeedback(triggerBtn, successMessage);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
    document.body.removeChild(textArea);
  }

  function showCopyFeedback(triggerBtn, message) {
    // Feedback visual en el botón emisor
    if (triggerBtn) {
      const originalHTML = triggerBtn.innerHTML;
      triggerBtn.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        ¡Listo!
      `;
      triggerBtn.classList.add('copied');

      setTimeout(() => {
        triggerBtn.innerHTML = originalHTML;
        triggerBtn.classList.remove('copied');
      }, 2000);
    }

    // Feedback en Toast flotante
    if (toast) {
      if (toastText) toastText.textContent = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }
  }

  // ==========================================================================
  // 9. Lightbox Cinematográfico con Carrusel y Atajos de Teclado
  // ==========================================================================
  function openLightboxIndex(index) {
    if (index < 0 || index >= imageItems.length) return;
    activeLightboxIndex = index;
    const item = imageItems[index];

    if (lightboxImage) {
      lightboxImage.src = item.mediaUrl;
      lightboxImage.alt = item.title;
    }
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxCategory) lightboxCategory.textContent = item.category || 'Arte Visual';
    if (lightboxModel) lightboxModel.textContent = item.model || 'Google Imagen 3';
    if (lightboxResolution) lightboxResolution.textContent = item.resolution || '8K Ultra-Res';
    if (lightboxPrompt) lightboxPrompt.textContent = item.prompt || 'Sin prompt especificado.';
    if (lightboxCounter) {
      lightboxCounter.textContent = `${index + 1} / ${imageItems.length}`;
    }

    if (lightboxModal) {
      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function nextLightbox() {
    if (imageItems.length === 0) return;
    const nextIndex = (activeLightboxIndex + 1) % imageItems.length;
    openLightboxIndex(nextIndex);
  }

  function prevLightbox() {
    if (imageItems.length === 0) return;
    const prevIndex = (activeLightboxIndex - 1 + imageItems.length) % imageItems.length;
    openLightboxIndex(prevIndex);
  }

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
      activeLightboxIndex = -1;
    }
  }

  // Escuchadores de Lightbox
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', nextLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevLightbox);

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  if (lightboxCopyBtn) {
    lightboxCopyBtn.addEventListener('click', () => {
      if (activeLightboxIndex >= 0 && activeLightboxIndex < imageItems.length) {
        const prompt = imageItems[activeLightboxIndex].prompt;
        copyToClipboard(prompt, lightboxCopyBtn, "¡Prompt copiado al portapapeles!");
      }
    });
  }

  // Atajos de Teclado para Lightbox
  window.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      nextLightbox();
    } else if (e.key === 'ArrowLeft') {
      prevLightbox();
    }
  });

  // ==========================================================================
  // 10. Controles de Filtrado & Búsqueda
  // ==========================================================================
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      currentFilter = btn.dataset.filter;
      renderGallery();
    });
  });

  if (clearTagBtn) {
    clearTagBtn.addEventListener('click', () => {
      activeTag = null;
      renderGallery();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchClear) {
        searchClear.classList.toggle('visible', searchQuery.length > 0);
      }
      renderGallery();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClear.classList.remove('visible');
      searchInput.focus();
      renderGallery();
    });
  }

  // ==========================================================================
  // 11. Botón Volver Arriba Flotante
  // ==========================================================================
  window.addEventListener('scroll', () => {
    if (scrollTopBtn) {
      if (window.scrollY > 350) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // 12. Deep Linking Inteligente & Resaltado de Tarjeta
  // ==========================================================================
  function handleDeepLink() {
    const hash = window.location.hash;
    if (!hash || hash.length <= 1) return;

    const targetId = hash.substring(1);
    const targetItem = portfolioItems.find(i => i.id === targetId);

    if (targetItem) {
      // Si el ítem no coincide con el filtro activo, resetear filtro a 'all'
      if (currentFilter !== 'all' && targetItem.type !== currentFilter) {
        currentFilter = 'all';
        filterBtns.forEach(b => {
          b.classList.toggle('active', b.dataset.filter === 'all');
          b.setAttribute('aria-selected', b.dataset.filter === 'all');
        });
        renderGallery();
      }

      setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
          elem.classList.add('highlight-target');
          setTimeout(() => {
            elem.classList.remove('highlight-target');
          }, 3500);
        }
      }, 250);
    }
  }

  window.addEventListener('hashchange', handleDeepLink);

  // ==========================================================================
  // 13. Acordeón Interactivo de Preguntas Frecuentes (FAQ)
  // ==========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-question');
    if (!header) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Cerrar otros
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // ==========================================================================
  // 14. Fondo Dinámico de Constelación Neural en Canvas (Hero Section)
  // ==========================================================================
  function initHeroCanvas() {
    if (!heroCanvas) return;
    const ctx = heroCanvas.getContext('2d');
    if (!ctx) return;

    // Respetar preferencia de movimiento reducido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let width = 0;
    let height = 0;
    let particles = [];
    let animationFrameId = null;
    let isVisible = true;

    const mouse = { x: null, y: null, radius: 140 };

    function resizeCanvas() {
      const parent = heroCanvas.parentElement;
      width = heroCanvas.width = parent ? parent.offsetWidth : window.innerWidth;
      height = heroCanvas.height = parent ? parent.offsetHeight : 500;
      createParticles();
    }

    function createParticles() {
      particles = [];
      const particleCount = Math.min(Math.floor((width * height) / 11000), 70);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 1.8 + 1,
          color: Math.random() > 0.4 ? 'rgba(0, 242, 254, 0.7)' : 'rgba(155, 81, 224, 0.7)'
        });
      }
    }

    function draw() {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      // Dibujar partículas y conexiones
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Mover
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Rebotes en bordes
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Dibujar punto
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.shadowColor = 'rgba(0, 242, 254, 0.5)';
        ctx.shadowBlur = 8;
        ctx.fill();

        // Conectar puntos cercanos
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alpha = 1 - (dist / 100);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${alpha * 0.18})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Interacción suave con el cursor
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mouse.radius) {
            const mAlpha = 1 - (mdist / mouse.radius);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(155, 81, 224, ${mAlpha * 0.35})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    // Escuchadores de interacción con el canvas
    window.addEventListener('resize', () => {
      resizeCanvas();
    }, { passive: true });

    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      heroSection.addEventListener('mousemove', (e) => {
        const rect = heroCanvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      });

      heroSection.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
      });

      // Pausar renderizado cuando el hero no está visible (IntersectionObserver)
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            isVisible = entry.isIntersecting;
            if (isVisible && !animationFrameId) {
              draw();
            } else if (!isVisible && animationFrameId) {
              cancelAnimationFrame(animationFrameId);
              animationFrameId = null;
            }
          });
        }, { threshold: 0.05 });
        observer.observe(heroSection);
      }
    }

    // Pausar si la pestaña cambia
    document.addEventListener('visibilitychange', () => {
      isVisible = !document.hidden;
      if (isVisible && !animationFrameId) {
        draw();
      }
    });

    resizeCanvas();
    draw();
  }

  // ==========================================================================
  // 15. Inicialización de la Aplicación
  // ==========================================================================
  updateFilterCounts();
  renderGallery();
  initHeroCanvas();
  handleDeepLink();
});
