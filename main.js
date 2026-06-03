/* main.js */

/* =========================================================
   HOW TO CUSTOMIZE:
   1. Edit the `data` object below with your real information.
   2. Replace image paths in assets/ folder.
   3. All sections render from this object — no HTML editing needed.
   CDNs used: GSAP 3.12.5, ScrollTrigger, Three.js r160 (in index.html)
========================================================= */

// ── DATA OBJECT ─────────────────────────────────────────
// Contenido de Marina García del Buey — edita aquí para actualizar la página.
const data = {
  meta: {
    siteTitle: 'Marina García del Buey — Portfolio',
    navLogo:   'MGB',
    year:      new Date().getFullYear(),
  },

  hero: {
    eyebrow:    'Coordinadora · Gestión de Proyectos · Transformación Digital',
    name:       'Marina\nGarcía\ndel Buey',   // \n = salto de línea en el hero
    tagline:    'Donde la estrategia, la tecnología y la organización convergen.',
    ctaPrimary: { label: 'Conocer más', href: '#about' },
    ctaCV:      { label: 'Ver CV',      href: 'assets/cv.pdf' },
  },

  about: {
    photo:    'assets/photo.png',   // Reemplaza con tu foto en assets/
    photoAlt: 'Marina García del Buey',
    bio: `Licenciada en Administración y Dirección de Empresas por la Universidad Anáhuac, con doble titulación en International Strategic Management por Coventry University. Actualmente curso la Maestría en Tecnologías de la Información e Inteligencia Analítica.

Mi trayectoria se ha desarrollado en el ámbito educativo, liderando proyectos de innovación, coordinación académica y transformación digital. Hoy participo en la implementación de un Sistema de Información Estudiantil en la Red de Universidades Anáhuac, integrando gestión, comunicación y tecnología. En paralelo, desarrollo un emprendimiento floral basado en suscripción que une creatividad, estrategia y experiencia del cliente.`,
    skills: [
      'Gestión de Proyectos',
      'Transformación Digital',
      'Coordinación Institucional',
      'Tecnología Educativa',
      'Documentación Ejecutiva',
      'Análisis de Datos',
      'Microsoft 365 Avanzado',
      'Inglés Bilingüe',
      'Emprendimiento',
      'Liderazgo',
    ],
    socials: [
      { label: 'LinkedIn', href: 'https://linkedin.com/in/' }, // Reemplaza con tu URL
      { label: 'GitHub',   href: 'https://github.com/' },      // Reemplaza con tu URL
    ],
  },

  // ── PROYECTOS ────────────────────────────────────────
  // Las categorías (cat) generan los tabs de filtro automáticamente.
  // link: si tiene URL real, ponla aquí; si es null, el botón abre un modal con `detail`.
  items: [
    {
      id: 1,
      cat: 'Institucional',
      title: 'Implementación de Sistema de Información Estudiantil',
      desc: 'Administración y seguimiento de un proyecto de transformación digital en la Red de Universidades Anáhuac. Coordinación entre áreas funcionales, técnicas y directivas; seguimiento de entregables, gestión del cambio y mejora de procesos administrativos.',
      date: '2024 — Actualidad',
      thumb: 'assets/project-1.jpg',
      link: null,          // null = abre modal; pon una URL si tienes enlace externo
      linkLabel: 'Ver detalle',
      detail: `Participación en la administración y seguimiento de un proyecto institucional de transformación digital orientado a la implementación de un Sistema de Información Estudiantil en la Red de Universidades Anáhuac.

El proyecto involucra coordinación entre áreas funcionales, técnicas y directivas, así como seguimiento de entregables, documentación ejecutiva, reuniones, eventos, limpieza de datos, gestión del cambio y mejora de procesos administrativos y operativos.

Áreas: Gestión de proyectos · Transformación digital · Tecnología educativa · Coordinación institucional · Seguimiento ejecutivo · Documentación y comunicación`,
    },
    {
      id: 2,
      cat: 'Emprendimiento',
      title: 'Modelo de Suscripción de Arreglos Florales',
      desc: 'Desarrollo conceptual de un negocio de suscripción floral que integra diseño de marca, logística de entregas, experiencia del cliente y planeación estratégica. Propuesta de valor basada en estética, practicidad y personalización.',
      date: 'En desarrollo',
      thumb: 'assets/project-2.jpg',
      link: null,
      linkLabel: 'Ver proyecto',
      detail: `Desarrollo conceptual de un modelo de negocio basado en la suscripción de arreglos florales. El proyecto busca ofrecer una experiencia estética, práctica y personalizada, integrando flores frescas, diseño de marca, logística de entregas y atención al cliente.

La propuesta combina una visión creativa con elementos estratégicos: definición de planes, frecuencia de entrega, experiencia del usuario, propuesta de valor y operación del servicio.

Áreas: Emprendimiento · Modelo de negocio · Experiencia del cliente · Planeación estratégica · Branding · Logística · Creatividad aplicada`,
    },
    {
      id: 3,
      cat: 'Digital',
      title: 'Sitio Web Personal SPA',
      desc: 'Diseño y desarrollo de un portafolio profesional con arquitectura Single Page Application, utilizando HTML, CSS, JavaScript y herramientas de codificación asistida por IA. Publicado en GitHub Pages.',
      date: '2026',
      thumb: 'assets/project-3.jpg',
      link: null,          // Cuando publiques, pon aquí tu URL de GitHub Pages
      linkLabel: 'Ver sitio',
      detail: `Diseño y desarrollo de un sitio web personal con arquitectura Single Page Application, utilizando herramientas de codificación asistida por inteligencia artificial. El proyecto incluye estructura web, diseño responsive, navegación interna y publicación mediante GitHub Pages.

Integra conocimientos básicos de desarrollo web con herramientas de inteligencia artificial aplicadas a la programación.

Áreas: HTML · CSS · JavaScript · GitHub Pages · Codificación asistida por IA · Diseño responsive`,
    },
  ],

  // ── TRAYECTORIA ──────────────────────────────────────
  // Orden: más reciente primero.
  timeline: [
    {
      date: '2024 — Actualidad',
      title: 'Coordinadora Administrativa',
      org: 'Red de Universidades Anáhuac',
      desc: 'Seguimiento administrativo, financiero y logístico de proyectos institucionales. Coordinación de reuniones, eventos, entregables y documentación ejecutiva. Gestión de presupuestos, contratos y recursos. Coordinación con equipos funcionales, técnicos y directivos.',
    },
    {
      date: '2023 — 2024',
      title: 'Coordinadora de Proyectos Académicos',
      org: 'Red de Universidades Anáhuac',
      desc: 'Coordinación y seguimiento de proyectos académicos institucionales. Búsqueda y contratación de proveedores de tecnología educativa (ES/EN). Comunicación con áreas y actores de todas las sedes de la RUA. Elaboración de reportes para la dirección.',
    },
    {
      date: '2019 — 2023',
      title: 'Especialista en Innovación Educativa y Tecnológica',
      org: 'Red de Universidades Anáhuac',
      desc: 'Seguimiento a iniciativas de innovación educativa en las sedes de la RUA. Apoyo en proyectos de tecnología aplicada a la educación, capacitación y mejora de procesos. Colaboración con equipos multidisciplinarios.',
    },
    {
      date: 'Anterior',
      title: 'Otras experiencias profesionales',
      org: 'Banorte · Sorteo Anáhuac · Consulado General de España en México',
      desc: 'Analítica en entorno financiero (Banorte); gestión administrativa y logística de sorteos (Sorteo Anáhuac); actividades administrativas en entorno internacional y atención a público (Consulado General de España en México).',
    },
    {
      date: 'En curso',
      title: 'Maestría en Tecnologías de la Información e Inteligencia Analítica',
      org: 'Universidad Anáhuac',
      desc: 'Formación orientada a inteligencia analítica, análisis de datos, transformación digital y herramientas aplicadas a la toma de decisiones.',
    },
    {
      date: 'Concluida',
      title: 'Licenciatura en ADE + International Strategic Management',
      org: 'Universidad Anáhuac · Coventry University',
      desc: 'Doble titulación: Administración y Dirección de Empresas (Anáhuac) e International Strategic Management (Coventry University). Énfasis en estrategia, finanzas, gestión de proyectos y marketing corporativo.',
    },
  ],

  contact: {
    sub: 'Estoy abierta a colaboraciones, proyectos institucionales y nuevas oportunidades. Escríbeme.',
    email:    'marina.gdb96@gmail.com',
    location: 'Ciudad de México, México',
    linkedin: 'https://linkedin.com/in/', // Reemplaza con tu URL de LinkedIn
  },

  footer: {
    copy: '© {year} Marina García del Buey. Todos los derechos reservados.',
    links: [
      { label: 'LinkedIn', href: 'https://linkedin.com/in/' },
      { label: 'GitHub',   href: 'https://github.com/' },
      { label: 'CV',       href: 'assets/cv.pdf' },
    ],
  },
};

// ── BOOT ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Wait for external scripts (GSAP, Three.js) to load
  const waitForLibs = (libs, cb, attempts = 0) => {
    const allLoaded = libs.every(l => typeof window[l] !== 'undefined');
    if (allLoaded) { cb(); return; }
    if (attempts > 60) { console.warn('Libraries took too long.'); cb(); return; }
    setTimeout(() => waitForLibs(libs, cb, attempts + 1), 100);
  };
  waitForLibs(['gsap', 'ScrollTrigger', 'THREE'], init);
});

// ── INIT ─────────────────────────────────────────────────
function init() {
  renderAll();
  initTheme();
  initNav();
  initCursor();
  initHeroThree();
  initGSAP();
  initFilter();
  initContactForm();
}

// =========================================================
//  RENDER FUNCTIONS
// =========================================================
function renderAll() {
  document.title                          = data.meta.siteTitle;
  document.getElementById('nav-logo').textContent = data.meta.navLogo;
  document.getElementById('page-title').textContent = data.meta.siteTitle;

  // Hero
  document.getElementById('hero-eyebrow').textContent  = data.hero.eyebrow;
  document.getElementById('hero-name').innerHTML =
    data.hero.name.replace(/\n/g, '<br/>');
  document.getElementById('hero-tagline').textContent   = data.hero.tagline;
  const ctaPrimary = document.getElementById('hero-cta-primary');
  ctaPrimary.textContent = data.hero.ctaPrimary.label;
  ctaPrimary.href        = data.hero.ctaPrimary.href;
  const ctaCV = document.getElementById('hero-cta-cv');
  ctaCV.textContent = data.hero.ctaCV.label;
  ctaCV.href        = data.hero.ctaCV.href;

  // About
  const photo = document.getElementById('about-photo');
  photo.src = data.about.photo;
  photo.alt = data.about.photoAlt;
  document.getElementById('about-bio').textContent = data.about.bio;

  const pillsEl = document.getElementById('about-pills');
  data.about.skills.forEach(s => {
    const li = document.createElement('li');
    li.className   = 'pill';
    li.textContent = s;
    pillsEl.appendChild(li);
  });

  const socialsEl = document.getElementById('about-socials');
  data.about.socials.forEach(s => {
    const a = document.createElement('a');
    a.href        = s.href;
    a.textContent = s.label;
    a.className   = 'social-link';
    a.target      = '_blank';
    a.rel         = 'noopener noreferrer';
    socialsEl.appendChild(a);
  });

  // Projects
  renderCards(data.items);
  renderFilterTabs();

  // Timeline
  const tlEl = document.getElementById('timeline-list');
  data.timeline.forEach((t, i) => {
    const div = document.createElement('div');
    div.className    = 'timeline-item';
    div.setAttribute('role', 'listitem');
    div.style.animationDelay = `${i * 0.1}s`;
    div.innerHTML = `
      <p class="timeline-item__date">${t.date}</p>
      <h3 class="timeline-item__title">${t.title}</h3>
      <p class="timeline-item__org">${t.org}</p>
      <p class="timeline-item__desc">${t.desc}</p>
    `;
    tlEl.appendChild(div);
  });

  // Contact
  document.getElementById('contact-sub').textContent = data.contact.sub;
  const detailsEl = document.getElementById('contact-details');
  [
    { label: 'Email',     val: data.contact.email,    href: `mailto:${data.contact.email}` },
    { label: 'Ubicación', val: data.contact.location, href: null },
    { label: 'LinkedIn',  val: 'Perfil',              href: data.contact.linkedin },
  ].forEach(item => {
    const div = document.createElement('div');
    div.className = 'contact-item';
    div.innerHTML = `
      <span class="contact-item__label">${item.label}</span>
      ${item.href
        ? `<a href="${item.href}" class="contact-item__val" target="_blank" rel="noopener">${item.val}</a>`
        : `<span class="contact-item__val">${item.val}</span>`}
    `;
    detailsEl.appendChild(div);
  });

  // Footer
  const copy = data.footer.copy.replace('{year}', data.meta.year);
  document.getElementById('footer-copy').textContent = copy;
  const footerLinks = document.getElementById('footer-links');
  data.footer.links.forEach(l => {
    const a = document.createElement('a');
    a.href      = l.href;
    a.textContent = l.label;
    a.className = 'footer-link';
    a.setAttribute('role', 'listitem');
    a.target    = '_blank';
    a.rel       = 'noopener noreferrer';
    footerLinks.appendChild(a);
  });
}

// Render project/publication cards
function renderCards(items) {
  const grid = document.getElementById('cards-grid');
  grid.innerHTML = '';
  items.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'card';
    div.setAttribute('role', 'listitem');
    div.dataset.cat = item.cat;
    div.style.animationDelay = `${i * 0.08}s`;

    // Si link es null o '#', el botón abre el modal; si es URL real, abre en nueva pestaña
    const isExternal = item.link && item.link !== '#';
    const linkHTML = isExternal
      ? `<a class="card__link" href="${item.link}" target="_blank" rel="noopener">${item.linkLabel} →</a>`
      : `<button class="card__link card__link--modal" data-id="${item.id}" aria-haspopup="dialog">${item.linkLabel} →</button>`;

    div.innerHTML = `
      <div class="card__thumb-wrap">
        <img
          class="card__thumb"
          src="${item.thumb}"
          alt="${item.title}"
          loading="lazy"
          width="640"
          height="360"
          onerror="this.parentElement.style.display='none'"
        />
      </div>
      <div class="card__body">
        <p class="card__cat">${item.cat}</p>
        <h3 class="card__title">${item.title}</h3>
        <p class="card__desc">${item.desc}</p>
        <div class="card__footer">
          <span class="card__date">${item.date}</span>
          ${linkHTML}
        </div>
      </div>
    `;
    grid.appendChild(div);
    requestAnimationFrame(() => cardObserver.observe(div));
  });

  // Bind modal buttons (re-bound every render)
  grid.querySelectorAll('.card__link--modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = data.items.find(i => i.id === Number(btn.dataset.id));
      if (item) openModal(item);
    });
  });
}

// Build filter tabs from unique categories
function renderFilterTabs() {
  const cats = ['Todos', ...new Set(data.items.map(i => i.cat))];
  const tabsEl = document.getElementById('filter-tabs');
  tabsEl.innerHTML = '';
  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat;
    btn.className   = 'filter-tab' + (cat === 'Todos' ? ' active' : '');
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', cat === 'Todos' ? 'true' : 'false');
    btn.dataset.cat = cat;
    tabsEl.appendChild(btn);
  });
}

// =========================================================
//  FILTER LOGIC
// =========================================================
function initFilter() {
  const tabsEl = document.getElementById('filter-tabs');
  tabsEl.addEventListener('click', e => {
    const btn = e.target.closest('.filter-tab');
    if (!btn) return;
    tabsEl.querySelectorAll('.filter-tab').forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    const cat = btn.dataset.cat;
    const filtered = cat === 'Todos' ? data.items : data.items.filter(i => i.cat === cat);
    renderCards(filtered);
  });
}

// IntersectionObserver for card entrance animations
const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// =========================================================
//  THEME TOGGLE
// =========================================================
function initTheme() {
  const html    = document.documentElement;
  const btn     = document.getElementById('theme-toggle');
  const stored  = localStorage.getItem('theme');
  const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  html.dataset.theme = stored || preferred;

  btn.addEventListener('click', () => {
    const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    html.dataset.theme = next;
    localStorage.setItem('theme', next);
    // Update Three.js bg colour if scene exists
    if (window._threeRenderer && window._threeScene) {
      const bgCol = getComputedStyle(document.documentElement)
        .getPropertyValue('--canvas-bg').trim();
      window._threeScene.background = new THREE.Color(bgCol);
    }
  });
}

// =========================================================
//  NAVIGATION
// =========================================================
function initNav() {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav__burger');
  const mobileNav = document.getElementById('nav-mobile');
  const mobileLinks = document.querySelectorAll('.nav-mobile__link');

  // Scroll class
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Burger
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    mobileNav.classList.toggle('open', open);
    mobileNav.setAttribute('aria-hidden', !open);
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on link click
  mobileLinks.forEach(l => {
    l.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileNav.classList.remove('open');
      mobileNav.setAttribute('aria-hidden', 'true');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => io.observe(s));
}

// =========================================================
//  CUSTOM CURSOR
// =========================================================
function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return; // skip touch

  const cursor      = document.querySelector('.cursor');
  const cursorTrail = document.querySelector('.cursor-trail');
  let mx = 0, my = 0, tx = 0, ty = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
  });

  // Trail lerp
  const lerp = (a, b, t) => a + (b - a) * t;
  (function animateTrail() {
    tx = lerp(tx, mx, 0.10);
    ty = lerp(ty, my, 0.10);
    cursorTrail.style.transform = `translate(${tx}px, ${ty}px) translate(-50%,-50%)`;
    requestAnimationFrame(animateTrail);
  })();

  // Hover enlarge
  const hoverEls = document.querySelectorAll('a, button, .card, .filter-tab');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor--link-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor--link-hover'));
  });
}

// =========================================================
//  THREE.JS HERO SCENE
// =========================================================
function initHeroThree() {
  if (typeof THREE === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.getElementById('hero-canvas');
  const scene  = new THREE.Scene();
  const bgHex  = getComputedStyle(document.documentElement)
    .getPropertyValue('--canvas-bg').trim() || '#0e0d0b';
  scene.background = new THREE.Color(bgHex);
  scene.fog        = new THREE.FogExp2(bgHex, 0.025);

  window._threeScene = scene;

  const camera = new THREE.PerspectiveCamera(55, canvas.clientWidth / canvas.clientHeight, 0.1, 200);
  camera.position.set(0, 0, 22);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  window._threeRenderer = renderer;

  // ── Particles (low-poly, mobile-friendly) ──
  const particleCount = window.innerWidth < 768 ? 400 : 900;
  const positions     = new Float32Array(particleCount * 3);
  const sizes         = new Float32Array(particleCount);
  const sphere        = 28;

  for (let i = 0; i < particleCount; i++) {
    const r     = sphere * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi   = Math.acos(2 * Math.random() - 1);
    positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
    sizes[i] = 0.5 + Math.random() * 1.5;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('size',     new THREE.BufferAttribute(sizes, 1));

  const accentRaw = getComputedStyle(document.documentElement)
    .getPropertyValue('--accent').trim() || '#c9a55a';
  const particleMat = new THREE.PointsMaterial({
    color:        new THREE.Color(accentRaw),
    size:         0.08,
    sizeAttenuation: true,
    transparent:  true,
    opacity:      0.55,
    depthWrite:   false,
  });

  const particles = new THREE.Points(geo, particleMat);
  scene.add(particles);

  // ── Wireframe icosahedron (hero centerpiece) ──
  const icoGeo = new THREE.IcosahedronGeometry(5, 1);
  const icoMat = new THREE.MeshBasicMaterial({
    color:     new THREE.Color(accentRaw),
    wireframe: true,
    opacity:   0.12,
    transparent: true,
  });
  const ico = new THREE.Mesh(icoGeo, icoMat);
  ico.position.set(8, 0, 0);
  scene.add(ico);

  // ── Mouse parallax ──
  const mouse = { x: 0, y: 0 };
  document.addEventListener('mousemove', e => {
    mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // ── Scroll-based camera Z ──
  let scrollOffset = 0;
  window.addEventListener('scroll', () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    scrollOffset   = window.scrollY / maxScroll;
  }, { passive: true });

  // ── Resize ──
  const onResize = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
  window.addEventListener('resize', onResize);

  // ── Render loop ──
  let frame = 0;
  (function animate() {
    requestAnimationFrame(animate);
    frame++;

    // Particles slow rotation
    particles.rotation.y += 0.0004;
    particles.rotation.x += 0.0002;

    // Icosahedron rotation
    ico.rotation.x += 0.003;
    ico.rotation.y += 0.005;

    // Subtle mouse parallax on camera
    camera.position.x += (mouse.x * 2  - camera.position.x) * 0.04;
    camera.position.y += (-mouse.y * 1 - camera.position.y) * 0.04;
    // Zoom-out slightly on scroll
    camera.position.z = 22 + scrollOffset * 6;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  })();
}

// =========================================================
//  GSAP SCROLL ANIMATIONS
// =========================================================
function initGSAP() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Make everything visible immediately
    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
    document.querySelectorAll('.timeline-item').forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Hero content entrance
  gsap.fromTo('.hero__eyebrow', { opacity: 0, y: 20 }, {
    opacity: 1, y: 0, duration: 1, ease: 'expo.out', delay: 0.3,
  });
  gsap.fromTo('.hero__name', { opacity: 0, y: 40, skewY: 3 }, {
    opacity: 1, y: 0, skewY: 0, duration: 1.2, ease: 'expo.out', delay: 0.5,
  });
  gsap.fromTo('.hero__tagline', { opacity: 0, y: 20 }, {
    opacity: 1, y: 0, duration: 1, ease: 'expo.out', delay: 0.8,
  });
  gsap.fromTo('.hero__cta-row', { opacity: 0, y: 20 }, {
    opacity: 1, y: 0, duration: 1, ease: 'expo.out', delay: 1,
  });
  gsap.fromTo('.hero__scroll-hint', { opacity: 0 }, {
    opacity: 1, duration: 1, ease: 'expo.out', delay: 1.5,
  });

  // Parallax on hero canvas as you scroll away
  gsap.to('.hero__canvas', {
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    y: 80,
    scale: 1.06,
  });

  // Section reveals
  gsap.utils.toArray('.reveal-up').forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 1, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
    });
  });
  gsap.utils.toArray('.reveal-left').forEach(el => {
    gsap.fromTo(el, { opacity: 0, x: -50 }, {
      opacity: 1, x: 0, duration: 1, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
    });
  });
  gsap.utils.toArray('.reveal-right').forEach(el => {
    gsap.fromTo(el, { opacity: 0, x: 50 }, {
      opacity: 1, x: 0, duration: 1, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
    });
  });

  // Timeline items stagger
  ScrollTrigger.batch('.timeline-item', {
    onEnter: batch => {
      gsap.fromTo(batch,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, stagger: 0.12, duration: 0.85, ease: 'expo.out' }
      );
    },
    start: 'top 88%',
  });

  // Section heading split (perspective shift)
  gsap.utils.toArray('.section__heading').forEach(el => {
    gsap.fromTo(el, { clipPath: 'inset(100% 0 0 0)', opacity: 0 }, {
      clipPath: 'inset(0% 0 0 0)', opacity: 1, duration: 1, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  });
}

// =========================================================
//  CONTACT FORM (static / mailto)
// =========================================================
function initContactForm() {
  const form    = document.getElementById('contact-form');
  const notice  = form.querySelector('.form-notice');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = form['cf-name'].value.trim();
    const email   = form['cf-email'].value.trim();
    const message = form['cf-message'].value.trim();

    if (!name || !email || !message) {
      notice.textContent = '⚠ Por favor completa todos los campos.';
      return;
    }

    // Build mailto link — no backend required
    const subject = encodeURIComponent(`Mensaje de ${name} via Portfolio`);
    const body    = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${data.contact.email}?subject=${subject}&body=${body}`;
    notice.textContent = '✓ Redirigiendo a tu cliente de correo…';
    form.reset();
  });
}

// =========================================================
//  PROJECT MODAL
//  Abre un diálogo accesible con el detalle completo del proyecto.
//  No hay URL externa — todo se muestra dentro de la página.
// =========================================================
function openModal(item) {
  // Inject modal HTML once
  let overlay = document.getElementById('project-modal');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'project-modal';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'modal-title');
    overlay.innerHTML = `
      <div class="modal__backdrop"></div>
      <div class="modal__panel" tabindex="-1">
        <button class="modal__close" aria-label="Cerrar">✕</button>
        <p class="modal__cat" id="modal-cat"></p>
        <h2 class="modal__title" id="modal-title"></h2>
        <p class="modal__date" id="modal-date"></p>
        <div class="modal__body" id="modal-body"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    // Inject modal styles (avoids extra CSS file)
    if (!document.getElementById('modal-styles')) {
      const style = document.createElement('style');
      style.id = 'modal-styles';
      style.textContent = `
        #project-modal {
          position: fixed; inset: 0; z-index: 2000;
          display: flex; align-items: center; justify-content: center;
          opacity: 0; pointer-events: none;
          transition: opacity 0.3s;
        }
        #project-modal.open { opacity: 1; pointer-events: all; }
        .modal__backdrop {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(6px);
          cursor: pointer;
        }
        .modal__panel {
          position: relative; z-index: 1;
          background: var(--surface);
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-lg);
          padding: clamp(28px,5vw,52px);
          max-width: min(680px, 92vw);
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          transform: translateY(20px);
          transition: transform 0.35s var(--ease-out-expo);
          outline: none;
        }
        #project-modal.open .modal__panel { transform: translateY(0); }
        .modal__close {
          position: absolute; top: 20px; right: 20px;
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border-strong);
          color: var(--text-muted);
          font-size: 0.85rem;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .modal__close:hover { background: var(--accent); color: var(--bg); border-color: var(--accent); }
        .modal__cat {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 10px;
        }
        .modal__title {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 300;
          line-height: 1.15;
          margin-bottom: 8px;
        }
        .modal__date {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          margin-bottom: 24px;
        }
        .modal__body {
          font-size: 0.93rem;
          line-height: 1.75;
          color: var(--text-muted);
          white-space: pre-line;
        }
      `;
      document.head.appendChild(style);
    }

    // Close handlers
    overlay.querySelector('.modal__backdrop').addEventListener('click', closeModal);
    overlay.querySelector('.modal__close').addEventListener('click', closeModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  }

  // Populate content
  document.getElementById('modal-cat').textContent  = item.cat;
  document.getElementById('modal-title').textContent = item.title;
  document.getElementById('modal-date').textContent  = item.date;
  document.getElementById('modal-body').textContent  = item.detail || item.desc;

  // Open
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Focus panel for keyboard nav
  setTimeout(() => overlay.querySelector('.modal__panel').focus(), 50);
}

function closeModal() {
  const overlay = document.getElementById('project-modal');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
