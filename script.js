/**
 * PORTFOLIO PROFESIONAL - ARTURO PELEGRÍN
 * Interactividad: Menú Móvil, Lightbox Galería BTS con fotos reales, Certificado Oficial ESCAC
 */

// Datos de la Galería BTS (Behind The Scenes) con las fotos reales de set
const btsItems = [
  {
    img: 'IMG-20250721-WA0067.jpg',
    category: 'Grip & Iluminación',
    title: 'Control de Contraste: Ceferino & Bandera Sólida',
    desc: 'Ajuste fino de ceferino (C-Stand) con bandera de corte sólida para matizar la luz principal y esculpir sombras dramáticas sobre el elenco en set.'
  },
  {
    img: 'IMG-20250721-WA0058.jpg',
    category: 'Dpto. de Cámara',
    title: 'Riggeo de Blackmagic URSA Mini Pro 12K',
    desc: 'Configuración técnica y verificación del cuerpo de cámara 12K con alimentación Anton Bauer Cine 150, ópticas de cine y emisor de señal inalámbrica de vídeo.'
  },
  {
    img: 'IMG-20250721-WA0025.jpg',
    category: 'Rigging & Asistencia',
    title: 'Soporte de Luz Cenital & Coordinación de Plano',
    desc: 'Montaje seguro de soporte de iluminación en localización interior y asistencia directa al operador de cámara durante el encuadre.'
  },
  {
    img: 'IMG-20250713-WA0035.jpg',
    category: 'Sonido Directo',
    title: 'Pertiguista en Rodaje dentro de Vehículo',
    desc: 'Operación de pértiga telescópica con microfonía protegida (deadcat) en rodaje de plano interior en limusina, coordinando espacio con actores y operador.'
  }
];

// Menú Móvil
const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('mobile-open');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('mobile-open');
    });
  });
}

// Lightbox Modal
const lightbox = document.getElementById('lightbox');
const lightboxImgBox = document.getElementById('lightboxImgBox');
const lightboxCaption = document.getElementById('lightboxCaption');

function openLightbox(index) {
  const item = btsItems[index];
  if (!item) return;

  const lb = document.getElementById('lightbox') || document.getElementById('lightboxModal') || document.getElementById('modal');
  if (!lb) return;
  const imgBox = lb.querySelector('#lightboxImgBox') || lb.querySelector('.lightbox-img-box') || lb.querySelector('.modal-img-target');
  const capBox = lb.querySelector('#lightboxCaption') || lb.querySelector('.modal-info');

  if (imgBox) {
    imgBox.innerHTML = `
      <img src="${item.img}" alt="${item.title}" style="max-width:100%; max-height:75vh; object-fit:contain; display:block; margin:0 auto;">
    `;
  }

  if (capBox) {
    capBox.innerHTML = `
      <span style="font-family:'JetBrains Mono', monospace; font-size:0.75rem; color:var(--amber, #f59e0b); font-weight:600; text-transform:uppercase;">${item.category}</span>
      <h3 style="color:#ffffff; font-family:'Outfit',sans-serif; margin-top:2px; font-size:1.25rem;">${item.title}</h3>
      <p style="color:#94a3b8; font-size:0.92rem; margin-top:4px; line-height:1.4;">${item.desc}</p>
    `;
  }

  lb.classList.add('active');
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  const lb = document.getElementById('lightbox') || document.getElementById('lightboxModal') || document.getElementById('modal');
  if (!lb) return;

  // Si se pasa evento, cerrar sólo si se pulsa fuera o sobre el botón de cerrar
  if (e && e.target) {
    const isBackdrop = (e.target === lb);
    const isCloseBtn = e.target.classList.contains('lightbox-close') || 
                       e.target.closest('.lightbox-close') || 
                       e.target.classList.contains('close-btn') || 
                       e.target.closest('.close-btn');
    if (!isBackdrop && !isCloseBtn) {
      return;
    }
  }

  lb.classList.remove('active');
  lb.style.display = 'none';
  document.body.style.overflow = '';
}

// Modal de Certificado Oficial ESCAC
function openCertificateModal() {
  const lb = document.getElementById('lightbox') || document.getElementById('lightboxModal') || document.getElementById('modal');
  if (!lb) return;
  const imgBox = lb.querySelector('#lightboxImgBox') || lb.querySelector('.lightbox-img-box') || lb.querySelector('.modal-img-target') || lb.querySelector('#modalImgWrap');
  const capBox = lb.querySelector('#lightboxCaption') || lb.querySelector('.modal-info');
  
  if (imgBox) {
    imgBox.innerHTML = `
      <img src="certificado_escac.jpg" alt="Certificado Oficial OFF ESCAC" style="max-width:100%; max-height:75vh; object-fit:contain; display:block; margin:0 auto; border-radius:4px; box-shadow:0 10px 30px rgba(0,0,0,0.8);">
    `;
  }
  if (capBox) {
    capBox.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; padding:12px 0 0;">
        <div>
          <span style="font-family:'JetBrains Mono', monospace; font-size:0.75rem; color:var(--amber, #f59e0b); font-weight:700; text-transform:uppercase;">OFF ESCAC & CINEMUR · TITULACIÓN OFICIAL</span>
          <h3 style="color:#ffffff; font-family:'Outfit',sans-serif; margin-top:3px; font-size:1.15rem;">Competencias Digitales Aplicadas para Técnicos de Iluminación Iniciación: Eléctricos</h3>
          <p style="color:#94a3b8; font-size:0.85rem; margin-top:4px;">Escola Superior de Cinema i Audiovisuals de Catalunya (Universitat de Barcelona) · Terrassa, Julio 2025.</p>
        </div>
        <a href="certificado_escac.pdf" target="_blank" download style="display:inline-flex; align-items:center; gap:6px; background:var(--amber, #f59e0b); color:#000; font-family:'JetBrains Mono',monospace; font-size:0.8rem; font-weight:700; padding:8px 14px; border-radius:4px; text-decoration:none;">
          ⬇ Descargar PDF
        </a>
      </div>
    `;
  }
  lb.classList.add('active');
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// Event Listeners directos para garantizar el cierre
document.addEventListener('DOMContentLoaded', () => {
  const closeButtons = document.querySelectorAll('.lightbox-close, .close-btn');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeLightbox();
    });
  });

  const lb = document.getElementById('lightbox') || document.getElementById('lightboxModal') || document.getElementById('modal');
  if (lb) {
    lb.addEventListener('click', (e) => {
      if (e.target === lb) {
        closeLightbox();
      }
    });
  }
});

// Cerrar con Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

// ============================================================================
// ANIMACIONES CINEMATOGRÁFICAS DE SCROLL: PROGRESO, REVEAL Y NAVBAR
// ============================================================================

// 1. Barra de progreso superior y clase .scrolled en Navbar
const progressBar = document.getElementById('scrollProgressLine');
const navElement = document.getElementById('navbar');

function handleScrollEffects() {
  const scrollY = window.scrollY || window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  
  if (progressBar && docHeight > 0) {
    const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
    progressBar.style.width = progress + '%';
  }

  if (navElement) {
    if (scrollY > 40) {
      navElement.classList.add('scrolled');
    } else {
      navElement.classList.remove('scrolled');
    }
  }

  // Resaltado de enlace de navegación activo durante la lectura
  const sections = document.querySelectorAll('header[id], section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let currentSectionId = '';
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 120;
    const secHeight = sec.offsetHeight;
    if (scrollY >= secTop && scrollY < secTop + secHeight) {
      currentSectionId = sec.getAttribute('id');
    }
  });

  if (currentSectionId) {
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === '#' + currentSectionId) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    });
  }
}

window.addEventListener('scroll', handleScrollEffects, { passive: true });
handleScrollEffects();

// 2. Observer de entrada suave (Scroll Reveal)
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.section-header, .project-card, .bts-card, .stat-card, .skill-category, .timeline-item, .contact-card, .cert-card'
  );

  revealElements.forEach(el => el.classList.add('reveal-on-scroll'));

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Revelar suavemente una única vez
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Si no hay IntersectionObserver disponible, mantener visible
    revealElements.forEach(el => el.classList.add('is-visible'));
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
  initScrollReveal();
}

