/**
 * Generation DigitalIA - Lógica interactiva del Portafolio
 * Motor dinámico de renderizado, filtros, buscador en tiempo real,
 * modal Lightbox cinematográfico, spotlight interactivo y utilidades.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elementos del DOM
  const galleryGrid = document.getElementById('gallery-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  const resultsCounter = document.getElementById('results-counter');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxModel = document.getElementById('lightbox-model');
  const lightboxPrompt = document.getElementById('lightbox-prompt');
  const lightboxCopyBtn = document.getElementById('lightbox-copy-btn');
  const toast = document.getElementById('toast');
  const scrollTopBtn = document.getElementById('scroll-top-btn');

  // Estado reactivo
  let currentFilter = 'all';
  let searchQuery = '';
  let activeLightboxItem = null;

  // Actualizar conteos en botones de filtro
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

  // Filtrado de ítems
  function getFilteredItems() {
    return portfolioItems.filter(item => {
      const matchesFilter = (currentFilter === 'all') || (item.type === currentFilter);

      if (!searchQuery) return matchesFilter;

      const q = searchQuery.toLowerCase().trim();
      const inTitle = item.title.toLowerCase().includes(q);
      const inDesc = item.description ? item.description.toLowerCase().includes(q) : false;
      const inPrompt = item.prompt ? item.prompt.toLowerCase().includes(q) : false;
      const inModel = item.model ? item.model.toLowerCase().includes(q) : false;
      const inTags = item.tags ? item.tags.some(tag => tag.toLowerCase().includes(q)) : false;

      return matchesFilter && (inTitle || inDesc || inPrompt || inModel || inTags);
    });
  }

  // Renderizar tarjetas en el Grid
  function renderGallery() {
    const items = getFilteredItems();

    // Actualizar indicador de resultados
    if (resultsCounter) {
      resultsCounter.textContent = `Mostrando ${items.length} de ${portfolioItems.length} creaciones`;
    }

    if (items.length === 0) {
      galleryGrid.innerHTML = `
        <div class="empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <h3>No se encontraron resultados</h3>
          <p>Intenta con otros términos de búsqueda o selecciona otra categoría.</p>
          <button class="filter-btn active" id="btn-reset-filters" style="margin: 0 auto;">
            Restablecer Filtros
          </button>
        </div>
      `;

      const resetBtn = document.getElementById('btn-reset-filters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentFilter = 'all';
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

    // Adjuntar escuchadores a las nuevas tarjetas renderizadas
    attachCardListeners();
  }

  // Generador de HTML para cada tarjeta
  function createCardHTML(item) {
    const isImage = item.type === 'image';
    const isVideo = item.type === 'video';
    const isAudio = item.type === 'audio';

    let badgeTypeClass = `badge-${item.type}`;
    let typeLabel = isImage ? 'Imagen IA' : isVideo ? 'Video IA' : 'Audio IA';

    // Tags HTML
    const tagsHTML = item.tags ? item.tags.map(tag => `<span class="tag-pill">#${tag}</span>`).join('') : '';

    // Contenido multimedia según tipo
    let mediaSectionHTML = '';

    if (isImage) {
      mediaSectionHTML = `
        <div class="card-media-wrapper" data-item-id="${item.id}" title="Click para ampliar imagen">
          <img src="${item.mediaUrl}" alt="${escapeHTML(item.title)}" loading="lazy" />
          <div class="media-overlay">
            <span class="overlay-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              Ver en Detalle
            </span>
          </div>
        </div>
      `;
    } else if (isVideo) {
      mediaSectionHTML = `
        <div class="video-container">
          <iframe 
            src="${item.mediaUrl}" 
            title="${escapeHTML(item.title)}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>
      `;
    } else if (isAudio) {
      mediaSectionHTML = `
        <div class="audio-card-content">
          <iframe 
            class="audio-player-frame"
            scrolling="no" 
            frameborder="no" 
            allow="autoplay; encrypted-media" 
            src="${item.mediaUrl}"
            loading="lazy">
          </iframe>
          ${item.externalUrl ? `
            <div class="audio-track-footer">
              <a href="${item.externalUrl}" target="_blank" rel="noopener noreferrer">
                🎵 Escuchar en SoundCloud ↗
              </a>
            </div>
          ` : ''}
        </div>
      `;
    }

    // Prompt block
    const promptBlockHTML = item.prompt ? `
      <div class="prompt-box">
        <div class="prompt-header">
          <span class="prompt-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6v6l4 2"/></svg>
            Prompt Generativo
          </span>
          <button class="btn-copy" data-prompt="${escapeHTML(item.prompt)}" title="Copiar prompt">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copiar
          </button>
        </div>
        <p class="prompt-text">${escapeHTML(item.prompt)}</p>
      </div>
    ` : '';

    return `
      <article class="card" data-id="${item.id}">
        <div class="card-header-badge">
          <span class="badge ${badgeTypeClass}">${typeLabel}</span>
          ${item.model ? `<span class="badge badge-model">${escapeHTML(item.model)}</span>` : ''}
        </div>

        ${mediaSectionHTML}

        <div class="card-body">
          <h3 class="card-title">${escapeHTML(item.title)}</h3>
          <p class="card-desc">${escapeHTML(item.description || '')}</p>
          
          ${promptBlockHTML}

          <div class="card-tags">
            ${tagsHTML}
          </div>
        </div>
      </article>
    `;
  }

  // Escuchadores de eventos para tarjetas
  function attachCardListeners() {
    // 1. Efecto Mouse Spotlight dinámico
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

    // 2. Apertura de Lightbox en imágenes
    const imageWrappers = galleryGrid.querySelectorAll('.card-media-wrapper');
    imageWrappers.forEach(wrapper => {
      wrapper.addEventListener('click', () => {
        const id = wrapper.dataset.itemId;
        const item = portfolioItems.find(i => i.id === id);
        if (item) openLightbox(item);
      });
    });

    // 3. Botones de Copiar Prompt
    const copyBtns = galleryGrid.querySelectorAll('.btn-copy');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const textToCopy = btn.dataset.prompt;
        copyToClipboard(textToCopy, btn);
      });
    });
  }

  // Función de Copiado al Portapapeles con Feedback Visual
  function copyToClipboard(text, triggerBtn) {
    if (!text) return;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showCopyFeedback(triggerBtn);
      }).catch(() => fallbackCopy(text, triggerBtn));
    } else {
      fallbackCopy(text, triggerBtn);
    }
  }

  function fallbackCopy(text, triggerBtn) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showCopyFeedback(triggerBtn);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
    document.body.removeChild(textArea);
  }

  function showCopyFeedback(triggerBtn) {
    // Feedback en botón
    if (triggerBtn) {
      const originalHTML = triggerBtn.innerHTML;
      triggerBtn.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        ¡Copiado!
      `;
      triggerBtn.style.color = 'var(--cyan)';
      triggerBtn.style.borderColor = 'var(--cyan)';

      setTimeout(() => {
        triggerBtn.innerHTML = originalHTML;
        triggerBtn.style.color = '';
        triggerBtn.style.borderColor = '';
      }, 2000);
    }

    // Feedback en Toast flotante
    if (toast) {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2800);
    }
  }

  // Modal Lightbox
  function openLightbox(item) {
    activeLightboxItem = item;
    lightboxImage.src = item.mediaUrl;
    lightboxImage.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxModel.textContent = item.model || 'Generación IA';
    lightboxPrompt.textContent = item.prompt || 'Sin prompt especificado.';

    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
    activeLightboxItem = null;
  }

  // Escuchadores de Lightbox
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  if (lightboxCopyBtn) {
    lightboxCopyBtn.addEventListener('click', () => {
      if (activeLightboxItem && activeLightboxItem.prompt) {
        copyToClipboard(activeLightboxItem.prompt, lightboxCopyBtn);
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
      closeLightbox();
    }
  });

  // Escuchadores de Filtro por Categoría
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderGallery();
    });
  });

  // Buscador en tiempo real
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

  // Botón Volver Arriba
  window.addEventListener('scroll', () => {
    if (scrollTopBtn) {
      if (window.scrollY > 350) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Utilidad de escape de caracteres HTML para seguridad
  function escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Inicialización
  updateFilterCounts();
  renderGallery();
});
