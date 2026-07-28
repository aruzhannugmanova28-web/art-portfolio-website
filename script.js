/* ============================================
   ARUZHAN NUGMANOVA — Visual Art Portfolio
   javascript
   ============================================ */


/* =====  YOUR WORKS  =====

   Each work has an `images` array (files display in lightbox in order).
   A file with .mov or .mp4 extension renders as a video with controls;
   everything else renders as an image.

   Order: best/most recent first. Winners of major awards lead each category,
   then chronological within.

   File-format note: for images, use .jpg, .jpeg, or .png only. .NEF, .HEIC,
   .heic, and .pdf files won't render in browsers — convert to .jpg first.
   For videos, .mp4 works everywhere. .mov works in Safari but not always
   in Chrome/Firefox — convert to .mp4 for best compatibility.
*/
const works = [

  // ==========  FEATURED / RECENT  ==========
  {
    title:    "My Heritage",
    year:     "2025",
    medium:   "Acrylic on canvas",
    category: "painting",
    badge:    "Gold Key · American Visions Nominee · Persky Award",
    gold:     true,
    images:   ["images/paintings_1 imageners/My Heritage.png"]
  },
  {
    title:    "The Time We Met",
    year:     "2025",
    medium:   "Ceramics, rope, wire, branches",
    category: "sculpture",
    badge:    "Honorable Mention, Scholastic (Conceptual, Installation & Participatory Art)",
    images:   [
      "images/the time we met/The Time We Met_1.png",
      "images/the time we met/The Time We Met_2.jpg",
      "images/the time we met/The Time We Met_3.jpg",
      "images/the time we met/The Time We Met_4.jpg",
      "images/the time we met/The Time We Met_5.jpg"
    ]
  },
  {
    title:    "Light the Way Ahead",
    year:     "2026",
    medium:   "Sculpture, collaboration with Bradom Zhang",
    category: "sculpture",
    badge:    "Claire Skinner Memorial Winner · Permanent Installation at Interlochen",
    gold:     true,
    images:   [
      "images/claire skinner/claire skinner_1.jpg",
      "images/claire skinner/claire skinner_2.jpg",
      "images/claire skinner/claire skinner_3.png",
      "images/claire skinner/claire skinner_4.png",
      "images/claire skinner/claire skinner_5.png",
      "images/claire skinner/claire skinner_6.png",
      "videos/claire_skinner.mov"
    ]
  },
  {
    title:    "Bird Ocarina",
    year:     "2025",
    medium:   "Ceramics",
    category: "sculpture",
    badge:    "Gold Key, Scholastic (Ceramics & Glass)",
    gold:     true,
    images:   [
      "images/bird ocarina/bird ocarina_1.png",
      "images/bird ocarina/ocarina bird_2.png",
      "images/bird ocarina/ocarina bird_3.png",
      "images/bird ocarina/ocarina bird_4.png"
    ]
  },
  {
    title:    "Stars and Bones",
    year:     "2025",
    medium:   "Ceramics, wire",
    category: "sculpture",
    badge:    "Honorable Mention, Scholastic (Jewelry)",
    images:   [
      "images/stars and bones/stars and bones_1.png",
      "images/stars and bones/stars and bones_2.jpg",
      "images/stars and bones/stars and bones_5.jpg"
    ]
  },
  {
    title:    "Broccoli",
    year:     "2025",
    medium:   "Digital illustration",
    category: "design",
    badge:    "Gold Key, Scholastic (Graphic Design)",
    gold:     true,
    images:   [
      "images/broccoli/broccoli_1.jpg",
      "images/broccoli/broccoli_2.jpg",
      "images/broccoli/broccoli_3.png"
    ]
  },
  {
    title:    "I bloom",
    year:     "2025",
    medium:   "Oil on woodboard, watercolor on paper",
    category: "painting",
    badge:    "Silver Key, Scholastic (Painting)",
    images:   [
      "images/i bloom/i bloom_1.jpg",
      "images/i bloom/i bloom_2.png"
    ]
  },
  {
    title:    "Cups and Mugs · Constellations",
    year:     "2025",
    medium:   "Pottery, ceramics",
    category: "sculpture",
    badge:    "Silver Key, Scholastic (Ceramics & Glass)",
    images:   [
      "images/cups and mugs/cups and mugs_2.jpg",
      "images/cups and mugs/cups and mugs_8.jpg",
      "images/cups and mugs/cups and mugs_11.jpg"
    ]
  },
  {
    title:    "Khan Shatyr Model",
    year:     "2025",
    medium:   "Architectural model",
    category: "architecture",
    badge:    "Silver Key, Scholastic (Architecture & Industrial Design)",
    images:   [
      "images/architecture stuff/Khan Shatyr Final.png",
      "images/architecture stuff/Khan Shatyr's Model.JPG"
    ]
  },

  // ==========  ARCHITECTURE  ==========
  {
    title:    "Branch Commons",
    year:     "2025",
    medium:   "Architectural project",
    category: "architecture",
    images:   [
      "images/branch commons/branch commons_1.jpeg",
      "images/branch commons/branch commons_2.jpeg",
      "images/branch commons/branch commons_3.jpeg"
    ]
  },
  {
    title:    "Yansong Study",
    year:     "2025",
    medium:   "Architectural study",
    category: "architecture",
    images:   [
      "images/architecture stuff/yansong_1.png",
      "images/architecture stuff/yansong_2.png"
    ]
  },
  {
    title:    "Okzhetpes",
    year:     "2025",
    medium:   "Architectural model",
    category: "architecture",
    images:   ["images/architecture stuff/okzhetpes.png"]
  },
  {
    title:    "Tree House",
    year:     "2024",
    medium:   "Architectural model",
    category: "architecture",
    badge:    "Honorable Mention, Scholastic (Architecture & Industrial Design)",
    images:   [
      "images/tree house/tree house_1.png",
      "images/tree house/tree house_2.png",
      "images/tree house/tree house_3.png"
    ]
  },

  // ==========  PAINTINGS (more)  ==========
  {
    title:    "Uide (At Home)",
    year:     "2025",
    medium:   "Digital art in Photoshop",
    category: "painting",
    images:   ["images/paintings_1 imageners/Uide.png"]
  },
  {
    title:    "Umai Ana",
    year:     "2025",
    medium:   "Acrylic on canvas",
    category: "painting",
    images:   ["images/paintings_1 imageners/Umai Ana.png"]
  },
  {
    title:    "Hometown Sunsets",
    year:     "2025",
    medium:   "Watercolor on paper",
    category: "painting",
    images:   ["images/paintings_1 imageners/Hometown Sunsets.png"]
  },
  {
    title:    "Colored Still Life",
    year:     "2025",
    medium:   "Acrylic on canvas",
    category: "painting",
    images:   ["images/paintings_1 imageners/Colored_still_life.jpg"]
  },
  {
    title:    "Farm",
    year:     "2025",
    medium:   "Acrylic on canvas",
    category: "painting",
    images:   ["images/paintings_1 imageners/Farm.jpg"]
  },
  {
    title:    "Interlochen Landscape",
    year:     "2025",
    medium:   "Acrylic on canvas",
    category: "painting",
    images:   ["images/paintings_1 imageners/interlochen_landscape_1.jpeg"]
  },
  {
    title:    "Still Life",
    year:     "2025",
    medium:   "Acrylic on canvas",
    category: "painting",
    images:   ["images/paintings_1 imageners/still_life.jpeg"]
  },
  {
    title:    "Observational Drawings",
    year:     "2025",
    medium:   "Graphite on paper",
    category: "painting",
    images:   [
      "images/paintings_1 imageners/observational_drawing_1.png"
    ]
  },
  {
    title:    "Creative Writing House",
    year:     "2024",
    medium:   "Acrylic on canvas",
    category: "painting",
    badge:    "Honorable Mention, Scholastic (Painting)",
    images:   [
      "images/creative writing house/creative_2.jpg",
      "images/creative writing house/creative_3.jpg",
      "images/creative writing house/creative_4.jpg"
    ]
  },
  {
    title:    "Kazakh Steppe",
    year:     "2024",
    medium:   "Acrylic on canvas",
    category: "painting",
    badge:    "Silver Key, Scholastic (Painting)",
    images:   ["images/paintings_1 imageners/Steppe.jpg"]
  },
  {
    title:    "Korpe",
    year:     "2024",
    medium:   "Mixed media",
    category: "painting",
    badge:    "Honorable Mention, Scholastic (Mixed Media)",
    images:   [
      "images/korpe/korpe_1.jpeg",
      "images/korpe/korpe_2.jpeg",
      "images/korpe/korpe_3.jpeg"
    ]
  },
  {
    title:    "Catch the Star",
    year:     "2024",
    medium:   "Acrylic on canvas",
    category: "painting",
    badge:    "Sold at Student Jury Exhibition",
    images:   ["images/paintings_1 imageners/Catch the Star.png"]
  },

  // ==========  3D & DIGITAL  ==========
  {
    title:    "Kazakh Earrings",
    year:     "2024",
    medium:   "3D model in Blender",
    category: "3d",
    images:   [
      "images/kazakh earrings/kazakh earrings_1.png",
      "images/kazakh earrings/kazakh earrings_2.png",
      "images/kazakh earrings/kazakh earrings_3.png",
      "videos/kazakh earrings.mov"
    ]
  },
  {
    title:    "Public Art Project",
    year:     "2025",
    medium:   "3D model in Blender",
    category: "3d",
    images:   [
      "images/public art project/3D Model.png",
      "images/public art project/3D Model 2.png",
      "images/public art project/3D Model 5.png",
      "images/public art project/Aruzhan_Entry_2.png"
    ]
  },
  {
    title:    "Net",
    year:     "2025",
    medium:   "Sculpture",
    category: "sculpture",
    images:   ["images/net/net_1.JPG"]
  },

  // ==========  DESIGN  ==========
  {
    title:    "Tang Club Merch",
    year:     "2026",
    medium:   "Merch design for the Tang Club, Milton Academy",
    category: "design",
    images:   ["images/merch_photos.png"]
  },
  {
    title:    "Signature",
    year:     "2024",
    medium:   "Digital illustration in Adobe Illustrator",
    category: "design",
    images:   ["images/paintings_1 imageners/signature.png"]
  }
];


/* =====  HELPER  ===== */
function isVideo(path) {
  if (!path) return false;
  const p = path.toLowerCase();
  return p.endsWith('.mov') || p.endsWith('.mp4') || p.endsWith('.webm');
}


/* =====  TWINKLING BACKGROUND STARS (intro)  ===== */
function makeStars() {
  const bg = document.getElementById('starsBg');
  if (!bg) return;
  const STAR    = "M10 1 L12.4 7.6 L19.5 8 L13.8 12.2 L15.8 19 L10 15 L4.2 19 L6.2 12.2 L0.5 8 L7.6 7.6 Z";
  const SPARKLE = "M10 0 L11.2 8.8 L20 10 L11.2 11.2 L10 20 L8.8 11.2 L0 10 L8.8 8.8 Z";
  for (let i = 0; i < 55; i++) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 20 20");
    svg.classList.add("bg-star");
    if (Math.random() > 0.7) svg.classList.add("bright");
    const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("d", Math.random() > 0.5 ? STAR : SPARKLE);
    svg.appendChild(p);
    const size = 8 + Math.random() * 26;
    svg.style.width = svg.style.height = size + 'px';
    svg.style.left = (Math.random() * 100) + '%';
    svg.style.top  = (Math.random() * 100) + '%';
    svg.style.animationDelay    = (Math.random() * 4) + 's';
    svg.style.animationDuration = (2.8 + Math.random() * 3) + 's';
    bg.appendChild(svg);
  }
}


/* =====  INTRO → MAIN  ===== */
function endIntro() {
  document.body.classList.remove('intro-active');
  document.getElementById('intro').classList.add('gone');
  document.getElementById('main').classList.add('show');
  // Kick off the brush-reveal init after main becomes visible
  setTimeout(initBrushReveal, 100);
}


/* =====  BRUSH-REVEAL PORTRAIT  =====
   The hero photo sits behind a canvas painted with a cream-colored overlay.
   As the user moves their cursor across the canvas, we "erase" the overlay
   with a soft brush, revealing the photo underneath — like clearing steam
   from a window with your hand. */
function initBrushReveal() {
  const canvas = document.getElementById('revealCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;

  // The cream overlay color must match the hero background so the
  // uncovered canvas is invisible against the page.
  const OVERLAY_COLOR = 'rgba(251, 243, 228, 0.90)';   // semi-transparent cream
  const BRUSH_SIZE    = 90;                            // radius of the brush
  const BRUSH_SOFT    = 40;                            // extra soft edge

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = canvas.width = rect.width * window.devicePixelRatio;
    height = canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    paintOverlay();
  }

  function paintOverlay() {
    // Fill the canvas with the cream overlay (this hides the photo)
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = OVERLAY_COLOR;
    ctx.fillRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
  }

  function erase(x, y) {
    // 'destination-out' punches a hole in the canvas at (x, y)
    ctx.globalCompositeOperation = 'destination-out';
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, BRUSH_SIZE + BRUSH_SOFT);
    gradient.addColorStop(0, 'rgba(0,0,0,1)');
    gradient.addColorStop(BRUSH_SIZE / (BRUSH_SIZE + BRUSH_SOFT), 'rgba(0,0,0,0.7)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, BRUSH_SIZE + BRUSH_SOFT, 0, Math.PI * 2);
    ctx.fill();
  }

  function handleMove(e) {
    const rect = canvas.getBoundingClientRect();
    let x, y;
    if (e.touches && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }
    erase(x, y);
  }

  resize();
  window.addEventListener('resize', resize);
  canvas.addEventListener('mousemove', handleMove);
  canvas.addEventListener('touchmove', handleMove, { passive: true });
}


/* =====  GALLERY  =====
   Gallery thumbnails always show an image (never a video), so we
   find the first non-video item in the images array for the card. */
let visibleWorks = [];

function firstImagePath(work) {
  if (!work.images) return null;
  return work.images.find(p => !isVideo(p)) || null;
}

function renderGallery(filter = 'all') {
  const grid = document.getElementById('grid');
  visibleWorks = filter === 'all'
    ? works
    : works.filter(w => w.category === filter);

  grid.innerHTML = visibleWorks.map((w, idx) => {
    const thumb = firstImagePath(w);
    return `
      <article class="work" data-index="${idx}">
        <div class="frame">
          ${thumb
            ? `<img src="${thumb}" alt="${w.title}" loading="lazy">`
            : `<span class="placeholder">${w.title}</span>`}
        </div>
        <div class="meta-line">
          <span class="title">${w.title}</span>
          <span class="year">${w.year}</span>
        </div>
        <div class="medium">${w.medium}</div>
        ${w.badge ? `<span class="badge ${w.gold ? 'gold' : ''}">${w.badge}</span>` : ''}
      </article>
    `;
  }).join('');

  document.getElementById('count').textContent =
    `${visibleWorks.length} work${visibleWorks.length === 1 ? '' : 's'}`;

  document.querySelectorAll('.work').forEach(el => {
    el.addEventListener('click', () => {
      const workIdx = parseInt(el.dataset.index, 10);
      openLightbox(workIdx, 0);
    });
  });
}


/* =====  LIGHTBOX  ===== */
let lbWorkIdx  = 0;
let lbImageIdx = 0;

const lb            = document.getElementById('lightbox');
const lbImage       = document.getElementById('lbImage');
const lbVideo       = document.getElementById('lbVideo');
const lbPlaceholder = document.getElementById('lbPlaceholder');
const lbTitle       = document.getElementById('lbTitle');
const lbYear        = document.getElementById('lbYear');
const lbMedium      = document.getElementById('lbMedium');
const lbBadge       = document.getElementById('lbBadge');
const lbDots        = document.getElementById('lbDots');
const lbClose       = document.getElementById('lbClose');
const lbPrev        = document.getElementById('lbPrev');
const lbNext        = document.getElementById('lbNext');

function openLightbox(workIdx, imageIdx) {
  lbWorkIdx  = workIdx;
  lbImageIdx = imageIdx;
  updateLightbox();
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lb-open');
}

function closeLightbox() {
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lb-open');
  // Pause any playing video
  if (lbVideo) {
    lbVideo.pause();
    lbVideo.removeAttribute('src');
    lbVideo.load();
  }
}

function updateLightbox() {
  const work = visibleWorks[lbWorkIdx];
  if (!work) return;

  lbTitle.textContent  = work.title;
  lbYear.textContent   = work.year;
  lbMedium.textContent = work.medium;

  if (work.badge) {
    lbBadge.textContent = work.badge;
    lbBadge.className = 'lb-badge show' + (work.gold ? ' gold' : '');
  } else {
    lbBadge.className = 'lb-badge';
  }

  const hasImages = work.images && work.images.length > 0;

  // Always pause + reset any old video before switching
  lbVideo.pause();
  lbVideo.removeAttribute('src');
  lbVideo.load();

  if (hasImages) {
    const currentPath = work.images[lbImageIdx];

    if (isVideo(currentPath)) {
      // Show video, hide image + placeholder
      lbImage.style.display = 'none';
      lbPlaceholder.classList.remove('show');
      lbVideo.style.display = 'block';
      lbVideo.src = currentPath;
      lbVideo.load();
    } else {
      // Show image, hide video + placeholder
      lbVideo.style.display = 'none';
      lbPlaceholder.classList.remove('show');
      lbImage.style.display = 'block';
      lbImage.classList.add('loading');
      lbImage.src = currentPath;
      lbImage.alt = work.title;
      lbImage.onload = () => lbImage.classList.remove('loading');
    }
  } else {
    // No images at all — show placeholder card
    lbImage.style.display = 'none';
    lbVideo.style.display = 'none';
    lbPlaceholder.classList.add('show');
    lbPlaceholder.textContent = work.title;
  }

  // Dots — one per image/video item
  if (hasImages && work.images.length > 1) {
    lbDots.innerHTML = work.images.map((path, i) =>
      `<span class="lb-dot ${i === lbImageIdx ? 'active' : ''} ${isVideo(path) ? 'video' : ''}"></span>`
    ).join('');
  } else {
    lbDots.innerHTML = '';
  }

  // Show/hide nav arrows at ends
  const isFirstWork  = lbWorkIdx === 0;
  const isLastWork   = lbWorkIdx === visibleWorks.length - 1;
  const isFirstImage = lbImageIdx === 0;
  const isLastImage  = !hasImages || lbImageIdx === work.images.length - 1;

  lbPrev.style.display = (isFirstWork && isFirstImage) ? 'none' : 'flex';
  lbNext.style.display = (isLastWork && isLastImage)   ? 'none' : 'flex';
}

function lbNextClick() {
  const work = visibleWorks[lbWorkIdx];
  const hasImages = work.images && work.images.length > 0;

  if (hasImages && lbImageIdx < work.images.length - 1) {
    lbImageIdx++;
  } else if (lbWorkIdx < visibleWorks.length - 1) {
    lbWorkIdx++;
    lbImageIdx = 0;
  }
  updateLightbox();
}

function lbPrevClick() {
  if (lbImageIdx > 0) {
    lbImageIdx--;
  } else if (lbWorkIdx > 0) {
    lbWorkIdx--;
    const prevWork = visibleWorks[lbWorkIdx];
    lbImageIdx = (prevWork.images && prevWork.images.length > 0)
      ? prevWork.images.length - 1
      : 0;
  }
  updateLightbox();
}


/* =====  EVENTS  ===== */
document.getElementById('enter-btn').addEventListener('click', endIntro);
document.getElementById('skipBtn').addEventListener('click', endIntro);

document.getElementById('filters').addEventListener('click', e => {
  if (!e.target.classList.contains('filter')) return;
  document.querySelectorAll('.filter').forEach(f => f.classList.remove('active'));
  e.target.classList.add('active');
  renderGallery(e.target.dataset.f);
});

lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', lbPrevClick);
lbNext.addEventListener('click', lbNextClick);

lb.addEventListener('click', e => {
  if (e.target === lb) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowRight') lbNextClick();
  if (e.key === 'ArrowLeft')  lbPrevClick();
});

let touchStartX = 0;
lb.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});
lb.addEventListener('touchend', e => {
  const touchEndX = e.changedTouches[0].screenX;
  const diff = touchEndX - touchStartX;
  if (Math.abs(diff) < 50) return;
  if (diff < 0) lbNextClick();
  else          lbPrevClick();
});


/* INIT */
makeStars();
renderGallery();
