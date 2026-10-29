/* ============================================================
   Portafolio · Christian Vasquez
   Para agregar tus videos, pega aquí los enlaces de YouTube o Vimeo
   en el campo "video" de cada proyecto (déjalo vacío si aún no hay).
   ============================================================ */

const PROYECTOS = [
  {
    id: 'hielo', n: '01', tipo: 'Documental transmedia · Perú', titulo: 'Un sueño sobre hielo',
    rol: 'Dirección de fotografía. Desarrollo del minijuego y de todo el sitio web.',
    links: [
      ['Visitar sitio web', 'https://patinaje-sobre-hielo-doc.gt.tc/'],
      ['Jugar minijuego', 'https://patinaje-sobre-hielo-doc.gt.tc/brazos_transmedia/videojuego/index.php'],
      ['Ver serie web', 'https://patinaje-sobre-hielo-doc.gt.tc/brazos_transmedia/serie_web/index.php'],
    ],
    texto: 'El primer documental transmedia sobre el patinaje sobre hielo en el Perú. Cuenta la historia del deporte, sus atletas y sus rincones a través de tres plataformas, cada una con su propia narrativa: un documental, un minijuego y una serie web. Realizado con el apoyo de la Federación Peruana de Patinaje sobre Hielo.',
    video: 'https://youtu.be/QVhK3U_rjak',
    frames: [
      { slate: true, kind: 'Documental', name: 'Un sueño sobre hielo', play: true, video: 'https://youtu.be/QVhK3U_rjak' },
      { slate: true, kind: 'Serie web · 1', name: 'Hielo en movimiento', play: true, video: 'https://youtu.be/CIA5K7M0akY' },
      { slate: true, kind: 'Serie web · 2', name: 'Hielo en movimiento', play: true, video: 'https://youtu.be/Y7ULjqLBUzM' },
      { slate: true, kind: 'Serie web · 3', name: 'Hielo en movimiento', play: true, video: 'https://youtu.be/OhKCHwrNcl8' },
      { slate: true, kind: 'Serie web · 4', name: 'Hielo en movimiento', play: true, video: 'https://youtu.be/JXQD2d3WeX8' },
      { slate: true, kind: 'Minijuego', name: 'Jugar desafío sobre hielo', href: 'https://patinaje-sobre-hielo-doc.gt.tc/brazos_transmedia/videojuego/index.php' },
      { slate: true, kind: 'Sitio web', name: 'Visitar el sitio', href: 'https://patinaje-sobre-hielo-doc.gt.tc/' },    ],
  },
  {
    id: 'sentir', n: '02', tipo: 'Cortometraje de ficción', titulo: 'Sentir',
    video: 'https://youtu.be/y6GPLgkCXAw',
    rol: 'Codirección.',
    texto: 'Cortometraje dramático y sensorial, producido por Stereo Films. Sigue a Laura, una joven universitaria atrapada en la monotonía y el vacío emocional de su rutina, que busca escapar de esa desconexión.',
    creditos: [
      ['Dirección', 'Christian Vasquez, Renzo Pachas'],
      ['Asistencia de dirección', 'Fellous Junes'],
      ['Guion', 'Renzo Pachas'],
      ['Dirección de fotografía', 'Fellous Junes, Abigail Zapata'],
      ['Sonido', 'Daniel Vigo'],
      ['Maquillaje y vestuario', 'Mariafernanda Chavarri'],
      ['Producción', 'Abigail Zapata, Fatima Choccelahua'],
    ],
    docs: [
      ['Guion', 'assets/docs/sentir-guion.pdf'],
      ['Escaleta', 'assets/docs/sentir-escaleta.pdf'],
      ['Plan de rodaje', 'assets/docs/sentir-plan-de-rodaje.pdf'],
      ['Presupuesto', 'assets/docs/sentir-presupuesto.pdf'],
    ],
    frames: [
      { img: 'assets/img/sentir-afiche.jpg', pos: '50% 0%', alt: 'Afiche de Sentir: boca iluminada de azul', big: true },
      { img: 'assets/img/sentir-afiche.jpg', pos: '50% 52%', alt: 'Afiche de Sentir: manos y un círculo verde', big: true },
      { img: 'assets/img/sentir-afiche.jpg', pos: '50% 100%', alt: 'Afiche de Sentir: ojos de una mujer en tono violeta', big: true },
      { slate: true, kind: 'Cortometraje', name: 'Ver el corto', play: true },
    ],
  },
  {
    id: 'documental', n: '03', tipo: 'Documental · 5 a 8 min', titulo: 'Taichí, una fuente de vida para la tercera edad',
    video: 'https://youtu.be/YD7GNjqUU5o',
    rol: 'Dirección.',
    texto: 'Un adulto mayor que atravesó la pandemia con ansiedad y encierro descubre en un programa de Tai Chi una forma de recuperar el cuerpo, el sueño y la calma. Su compañera de práctica y la instructora completan el retrato.',
    docs: [],
    frames: [
      { slate: true, kind: 'Documental', name: 'Taichí, una fuente de vida', play: true },
    ],
  },
  {
    id: 'podcast', n: '04', tipo: 'Podcast en video', titulo: 'Plan C',
    video: 'https://youtu.be/FJ6arwOfTvo',
    rol: 'Producción.',
    texto: 'Plan C, episodio piloto. Porque el plan A y B ya fueron…',
    docs: [['Informe del proyecto', 'assets/docs/podcast-plan-c.pdf']],
    frames: [
      { slate: true, kind: 'Podcast', name: 'Plan C', play: true },
    ],
  },
  {
    id: 'spots', n: '05', tipo: 'Spots radiales · 3 piezas', titulo: 'Spots radiales',
    texto: 'Tres spots de radio: Elecciones, Salud Mental y Lumina. Dale play y mira cómo responden las agujas.',
    docs: [['Informe del taller', 'assets/docs/spots-practica.pdf']],
    frames: [
      { audio: 'assets/audio/spot-elecciones.wav', name: 'Elecciones' },
      { audio: 'assets/audio/spot-salud-mental.wav', name: 'Salud mental' },
      { audio: 'assets/audio/spot-lumina.wav', name: 'Lumina' },
    ],
  },
  {
    id: 'cuento', n: '06', tipo: 'Cuento radiofónico', titulo: 'Los 3 cerditos',
    audio: 'assets/audio/cuento-los-3-cerditos.wav',
    texto: 'Cuento radiofónico narrado, del taller de radio. Dale play para escucharlo.',
    docs: [['Informe del taller', 'assets/docs/cuento-practica-de-campo.pdf']],
    frames: [
      { slate: true, kind: 'Cuento radiofónico', name: 'Los 3 cerditos', play: true },
    ],
  },
];

const FOTOS = [
  {
    id: 'fotos', n: '07', tipo: 'Fotografía', titulo: 'Retrato, paisaje y eventos',
    frames: [
      { img: 'assets/img/retrato01.jpg', alt: 'Retrato en blanco y negro, una mano abierta cubre parte del rostro' },
      { img: 'assets/img/img_7293.jpg', alt: 'Retrato en primer plano con maquillaje artístico rojo, peinado alto y uñas largas' },
      { img: 'assets/img/img_7666.jpg', alt: 'Atardecer anaranjado con siluetas de árboles sobre una calle' },
      { img: 'assets/img/paisaje01.jpg', alt: 'Lago azul con nubes y reflejos' },
      { img: 'assets/img/img_7814.jpg', alt: 'Set de estudio con pantalla verde, luces y equipo de cámara' },
      { img: 'assets/img/img_9939.jpg', alt: 'Retrato a color con una mano frente al rostro, luz cálida' },
      { img: 'assets/img/img_7286.jpg', alt: 'Modelo con vestido negro de mangas amplias y maquillaje artístico sobre fondo blanco de estudio' },
      { img: 'assets/img/img_7453.jpg', alt: 'Panel de cinco ponentes sentados en el escenario de un auditorio durante el congreso' },
      { img: 'assets/img/paisaje04.jpg', alt: 'Carretera entre campos y cielo nublado' },
      { img: 'assets/img/img_7821.jpg', alt: 'Joven sonriendo con el signo de la paz frente a una pantalla verde y una luz LED' },
      { img: 'assets/img/img_0433.jpg', alt: 'Retrato de perfil con luz verde y fondo rojo' },
      { img: 'assets/img/img_7282.jpg', alt: 'Estudio iluminado de rojo con una modelo de vestido negro y personas fotografiándola' },
      { img: 'assets/img/img_7347.jpg', alt: 'Orilla de un río amplio con botes de colores y un árbol pequeño' },
      { img: 'assets/img/img_7827.jpg', alt: 'Persona sentada frente a un fondo verde en un set de estudio' },
      { img: 'assets/img/img_9899.jpg', alt: 'Retrato de una joven con chaqueta de jean sobre fondo oscuro' },
      { img: 'assets/img/img_7306.jpg', alt: 'Modelo de perfil con vestido negro sobre fondo gris de estudio' },
      { img: 'assets/img/paisaje02.jpg', alt: 'Árbol sobre el agua con un bote' },
      { img: 'assets/img/img_7832.jpg', alt: 'Joven mirando a través de un lente con una luz LED encendida sobre fondo verde' },
      { img: 'assets/img/img_7647.jpg', alt: 'Una mujer pinta el rostro de otra y un joven con vestimenta tradicional los acompaña en un jardín' },
      { img: 'assets/img/img_7612.jpg', alt: 'Fotografía impresa en blanco y negro sostenida entre el público de una exposición' },
      { img: 'assets/img/img_0436.jpg', alt: 'Retrato de perfil con luz verde' },
      { img: 'assets/img/img_7307.jpg', alt: 'Modelo con vestido negro de mangas amplias girando sobre fondo gris' },
      { img: 'assets/img/img_7346.jpg', alt: 'Malecón junto al río con flores y cielo con nubes' },
      { img: 'assets/img/img_7613.jpg', alt: 'Fotografías impresas en blanco y negro sobre una mesa durante una exposición' },
      { img: 'assets/img/retrato02.jpg', alt: 'Retrato de una mujer sonriendo con anteojos, luz anaranjada' },
      { img: 'assets/img/img_7301.jpg', alt: 'Retrato con maquillaje artístico mostrado en una pantalla sobre fondo oscuro' },
      { img: 'assets/img/paisaje03.jpg', alt: 'Cerro cubierto de selva con vapor' },
      { img: 'assets/img/img_0403.jpg', alt: 'Retrato frontal con luz baja' },
      { img: 'assets/img/img_7348.jpg', alt: 'Río amplio y tranquilo con arbustos en la orilla' },
      { img: 'assets/img/img_9912.jpg', alt: 'Retrato sonriente de una joven con chaqueta de jean' },
      { img: 'assets/img/img_0873.jpg', alt: 'Quebrada entre rocas cubiertas de musgo dentro de la selva' },
      { img: 'assets/img/retrato03.jpg', alt: 'Retrato frontal sobre fondo verde oscuro' },
      { img: 'assets/img/img_1924.jpg', alt: 'Dos amigas abrazadas frente a una pared de ladrillo' },
      { img: 'assets/img/img_7585.jpg', alt: 'Sapo sobre hojas secas de noche' },
      { img: 'assets/img/img_0415.jpg', alt: 'Retrato con anteojos y luz verde' },
      { img: 'assets/img/img_0429.jpg', alt: 'Retrato con celular en un set de rodaje' },
    ],
  },
];

const $ = (s, r = document) => r.querySelector(s);
const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const CIRCLE = '<svg class="circle" viewBox="0 0 200 140" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M52 22 C 120 -2, 188 30, 186 76 C 184 118, 90 140, 36 108 C 8 88, 14 36, 78 14 C 100 8, 126 8, 144 14"/></svg>';
const PLAY = '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>';
const frameNo = i => String(i + 1).padStart(2, '0') + 'A';

/* ---------- hero: los rieles se deslizan con el scroll ---------- */
const heroEl = document.querySelector('.hero');
let ticking = false;
function heroScroll() { ticking = false; const p = Math.min(1, Math.max(0, scrollY / (heroEl.offsetHeight || 1))); heroEl.style.setProperty('--p', p.toFixed(3)); }
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(heroScroll); } }, { passive: true });

/* ---------- construir tiras ---------- */
function buildStrip(p, host, isPhoto) {
  const strip = el('article', 'strip');
  strip.setAttribute('aria-label', p.titulo);
  const head = el('div', 'strip-head');
  head.innerHTML = `<span class="code"><span>${p.n}</span><span>${esc(p.tipo)}</span></span>`;
  if (!isPhoto) {
    const open = el('button', 'strip-open', 'Abrir proyecto +');
    open.type = 'button';
    open.addEventListener('click', () => openProject(p));
    head.appendChild(open);
  }
  strip.appendChild(head);
  strip.appendChild(el('h3', 'strip-title', esc(p.titulo)));
  const row = el('div', isPhoto ? 'strip-frames grid' : 'strip-frames');
  row.setAttribute('role', 'list');
  p.frames.forEach((f, i) => {
    let node;
    if (f.audio) node = audioFrame(f, i);
    else if (f.slate) node = slateFrame(p, f, i);
    else node = imgFrame(p, f, i, isPhoto);
    node.setAttribute('role', 'listitem');
    row.appendChild(node);
  });
  strip.appendChild(row);
  host.appendChild(strip);
  return strip;
}

function imgFrame(p, f, i, isPhoto) {
  const b = el('button', 'frame');
  b.type = 'button';
  b.setAttribute('aria-label', `${f.alt}. Abrir.`);
  b.innerHTML = `<img src="${f.img}" alt="" loading="lazy" decoding="async" style="object-position:${f.pos || '50% 50%'}">${CIRCLE}<span class="no" aria-hidden="true">${frameNo(i)}</span>`;
  b.addEventListener('click', () => isPhoto ? openPhoto(p, i) : openProject(p, f));
  return b;
}
const ARROW = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>';
function slateFrame(p, f, i) {
  const ext = !!f.href;
  const b = el(ext ? 'a' : 'button', 'frame frame-slate');
  if (ext) { b.href = f.href; b.target = '_blank'; b.rel = 'noopener'; b.setAttribute('aria-label', `${f.kind}: ${f.name}. Abre en una pestaña nueva.`); }
  else { b.type = 'button'; b.setAttribute('aria-label', `${p.titulo}. Abrir proyecto.`); }
  b.innerHTML = `<span class="slate-kind">${esc(f.kind)}</span><span class="slate-name">${esc(f.name)}</span>${f.play || ext ? `<span class="slate-play" aria-hidden="true">${ext ? ARROW : PLAY}</span>` : ''}<span class="no" aria-hidden="true">${frameNo(i)}</span>`;
  if (!ext) b.addEventListener('click', () => openProject(p, f));
  return b;
}

/* ---------- vúmetro ---------- */
function vuSVG() {
  // arco de escala: centro (80,92), radio 62, de -48° a +48°
  const pt = (deg, r) => { const a = (deg - 90) * Math.PI / 180; return [80 + r * Math.cos(a), 92 + r * Math.sin(a)]; };
  let ticks = '';
  for (let d = -48; d <= 48; d += 8) {
    const [x1, y1] = pt(d, 56), [x2, y2] = pt(d, d >= 16 ? 64 : 61);
    ticks += `<line class="tick" x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}"/>`;
  }
  const [a0x, a0y] = pt(-48, 58), [a1x, a1y] = pt(16, 58), [r0x, r0y] = pt(16, 58), [r1x, r1y] = pt(48, 58);
  return `<svg class="vu" viewBox="0 0 160 100" role="img" aria-label="Vúmetro" preserveAspectRatio="xMidYMid meet">
    <rect class="face" width="160" height="100"/>
    <path class="arc" d="M${a0x.toFixed(1)} ${a0y.toFixed(1)} A58 58 0 0 1 ${a1x.toFixed(1)} ${a1y.toFixed(1)}"/>
    <path class="red" d="M${r0x.toFixed(1)} ${r0y.toFixed(1)} A58 58 0 0 1 ${r1x.toFixed(1)} ${r1y.toFixed(1)}"/>
    ${ticks}
    <text x="30" y="40" text-anchor="middle">−20</text><text x="80" y="22" text-anchor="middle">0</text><text x="128" y="42" text-anchor="middle">+3</text>
    <text x="80" y="72" text-anchor="middle" style="font-size:8px;letter-spacing:.14em">VU</text>
    <line class="needle" x1="80" y1="92" x2="80" y2="36"/>
    <circle cx="80" cy="92" r="5" fill="oklch(0.2 0.025 245)"/>
  </svg>`;
}

const meters = new Set();
let actx = null, rafId = 0;
const canAnalyse = location.protocol.startsWith('http');

function audioFrame(f, i) {
  const wrap = el('div', 'frame frame-audio');
  wrap.innerHTML = `${vuSVG()}<div class="audio-row"><span class="audio-name">${esc(f.name)}</span>
    <button class="play" type="button" aria-pressed="false" aria-label="Reproducir ${esc(f.name)}">
      <svg class="i-play" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>
      <svg class="i-pause" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>
    </button></div>
    <audio preload="none" src="${f.audio}"></audio><span class="no" aria-hidden="true" style="color:var(--ink);text-shadow:none">${frameNo(i)}</span>`;
  const audio = $('audio', wrap), btn = $('.play', wrap), needle = $('.needle', wrap);
  const m = { audio, needle, level: 0, analyser: null, buf: null, t: Math.random() * 100 };
  meters.add(m);
  btn.addEventListener('click', async () => {
    if (audio.paused) {
      meters.forEach(o => { if (o !== m && !o.audio.paused) o.audio.pause(); });
      if (canAnalyse && !m.analyser) {
        try {
          actx = actx || new (window.AudioContext || window.webkitAudioContext)();
          const src = actx.createMediaElementSource(audio);
          m.analyser = actx.createAnalyser(); m.analyser.fftSize = 1024;
          m.buf = new Uint8Array(m.analyser.fftSize);
          src.connect(m.analyser); m.analyser.connect(actx.destination);
        } catch (e) { m.analyser = null; }
      }
      if (actx && actx.state === 'suspended') await actx.resume();
      try { await audio.play(); } catch (e) { return; }
      tick();
    } else audio.pause();
  });
  const sync = () => {
    meters.forEach(o => {
      const b = o.audio.closest('.frame-audio').querySelector('.play');
      const playing = !o.audio.paused;
      b.setAttribute('aria-pressed', playing);
      b.setAttribute('aria-label', (playing ? 'Pausar ' : 'Reproducir ') + b.closest('.audio-row').querySelector('.audio-name').textContent);
    });
  };
  audio.addEventListener('play', sync); audio.addEventListener('pause', sync);
  audio.addEventListener('ended', sync);
  return wrap;
}

function tick() {
  cancelAnimationFrame(rafId);
  let any = false;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  meters.forEach(m => {
    const playing = !m.audio.paused;
    let target = 0;
    if (playing) {
      any = true;
      if (m.analyser) {
        m.analyser.getByteTimeDomainData(m.buf);
        let s = 0; for (let k = 0; k < m.buf.length; k++) { const v = (m.buf[k] - 128) / 128; s += v * v; }
        target = Math.min(1, Math.sqrt(s / m.buf.length) * 3.2);
      } else {
        m.t += 0.09;
        target = 0.42 + 0.22 * Math.sin(m.t * 1.7) + 0.16 * Math.sin(m.t * 4.3 + 1) + 0.1 * Math.random();
      }
    }
    if (reduce) target = playing ? 0.5 : 0;
    // balística: sube rápido, cae lento
    m.level += (target - m.level) * (target > m.level ? 0.35 : 0.08);
    const deg = -48 + Math.max(0, Math.min(1, m.level)) * 96;
    m.needle.style.transform = `rotate(${deg.toFixed(2)}deg)`;
    if (m.level > 0.004) any = true;
  });
  if (any) rafId = requestAnimationFrame(tick);
}

/* ---------- visor ---------- */
const visor = $('#visor'), vMedia = $('#visor-media'), vMeta = $('#visor-meta'), vTitle = $('#visor-title'), vBody = $('#visor-body');
let lastFocus = null;

function toEmbed(url) {
  if (!url) return '';
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu.be')) return `https://www.youtube-nocookie.com/embed/${u.pathname.slice(1)}`;
    if (u.hostname.includes('youtube.com')) {
      if (u.pathname.startsWith('/embed/')) return url;
      const v = u.searchParams.get('v'); if (v) return `https://www.youtube-nocookie.com/embed/${v}`;
    }
    if (u.hostname.includes('vimeo.com')) { const id = u.pathname.split('/').filter(Boolean).pop(); return `https://player.vimeo.com/video/${id}`; }
    return url;
  } catch (e) { return ''; }
}
function openDialog() {
  lastFocus = document.activeElement;
  if (typeof visor.showModal === 'function') visor.showModal(); else visor.setAttribute('open', '');
}
function openPhoto(p, i) {
  const f = p.frames[i];
  vMedia.innerHTML = `<img src="${f.img}" alt="${esc(f.alt)}">`;
  vMeta.textContent = `${p.tipo} · ${frameNo(i)}`;
  vTitle.textContent = p.titulo;
  vBody.innerHTML = `<p>${esc(f.alt)}.</p>`;
  openDialog();
}
function openProject(p, frame) {
  const embed = (frame && frame.embed) || toEmbed((frame && frame.video) || p.video);
  if (frame && frame.big) vMedia.innerHTML = `<img src="${frame.img}" alt="${esc(frame.alt)}">`;
  else if (p.audio) vMedia.innerHTML = `<div class="soon listen"><strong>${esc(p.titulo)}</strong><span>${esc(p.tipo)}</span><audio controls preload="metadata" src="${p.audio}">Tu navegador no puede reproducir este audio.</audio></div>`;
  else if (embed) vMedia.innerHTML = `<iframe class="embed" src="${embed}" title="${esc(p.titulo)}" allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe>`;
  else vMedia.innerHTML = `<div class="soon"><strong>${esc(p.titulo)}</strong><span>${'audio' in p ? 'Audio' : 'Video'} disponible pronto</span></div>`;
  vMeta.textContent = `${p.n} · ${p.tipo}`;
  vTitle.textContent = p.titulo;
  let body = `<p>${esc(p.texto)}</p>`;
  if (p.rol) body += `<p class="rol"><strong>Mi rol:</strong> ${esc(p.rol)}</p>`;
  if (p.creditos) body += '<dl class="credits">' + p.creditos.map(([a, b]) => `<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join('') + '</dl>';
  if (p.docs && p.docs.length) body += '<div class="doclist">' + p.docs.map(([a, h]) => `<a href="${h}" target="_blank" rel="noopener">${esc(a)} (PDF)</a>`).join('') + '</div>';
  if (p.links) body += '<div class="doclist btns">' + p.links.map(([a, h]) => `<a href="${h}" target="_blank" rel="noopener">${esc(a)} ↗</a>`).join('') + '</div>';
  vBody.innerHTML = body;
  openDialog();
}
function closeDialog() { visor.close(); }
visor.addEventListener('close', () => { if (!visor.open) vMedia.innerHTML = ''; if (lastFocus) lastFocus.focus({ preventScroll: true }); });
$('.visor-close').addEventListener('click', closeDialog);
visor.addEventListener('click', e => { if (e.target === visor) closeDialog(); });

/* ---------- montar ---------- */
const strips = [];
PROYECTOS.forEach(p => strips.push(buildStrip(p, $('#strips'), false)));
FOTOS.forEach(p => strips.push(buildStrip(p, $('#photo-strips'), true)));

/* revelado: las tiras salen del negro al entrar en pantalla */
const reveal = el => el.classList.add('in');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } }), { threshold: 0.15 });
  strips.forEach(s => io.observe(s));
  setTimeout(() => strips.forEach(reveal), 4000);
} else strips.forEach(reveal);
