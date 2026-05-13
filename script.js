const works = [
    {
        title: "My Heritage",
        year: "2025", 
        medium: "Acrylic on canvas",
        category: "painting",
        badge: "Gold Key · American Visions Nominee",
        gold: true,
    },
    {
        title: "The Time We Met",
        year: "2025", 
        medium: "Ceramics, rope, wire, branches",
        category: "sculpture",
        badge: "Honorable Mention, Scholastic",
    },
    {
        title: "Stars and Bones",
        year: "2025", 
        medium: "Ceramics, wire",
        category: "sculpture",
        badge: "Honorable Mention, Scholastic",
    },
    {
        title: "I flourish",
        year: "2025", 
        medium: "Oil on woodboard, watercolor on paper",
        category: "painting",
        badge: "Silver Key, Scholastic",
    },
    {
        title: "Catch the Star",
        year: "2024", 
        medium: "Acrylic on canvas",
        category: "painting",
        badge: "High Art Gallery participant · sold",
    },
    {
        title: "Uide(At Home trans. from kazakh)",
        year: "2025", 
        medium: "Digital art in Photoshop",
        category: "painting",
    },
    {
        title: "Umai Ana",
        year: "2025", 
        medium: "Acrylic on canvas",
        category: "painting",
    },
    {
        title: "Hometown Sunsets",
        year: "2025", 
        medium: "Watercolor on paper",
        category: "painting",
    },
    {
        title: "Kazakh Earrings",
        year: "2024", 
        medium: "3D model in Blender",
        category: "3d",
    },
    {
        title: "Light the Way Ahead",
        year: "2024", 
        medium: "3D model in Blender",
        category: "3d",
        badge: "Claire Skinner Memorial Winner",
    },
    {
        title: "Cups and Mugs",
        year: "2025", 
        medium: "Pottery, ceramics",
        category: "sculpture",
        badge: "Silver Key, Scholastic",
    },
    {
        title: "Signature",
        year: "2024", 
        medium: "Digital illustration in Adobe Illustrator",
        category: "design",
    },
]
/*BACKGROUND STARS*/
function makeStars() {
    const bg=document.getElementById('starsBg');
    const STAR_PATH = "M10 1 L12.4 7.6 L19.5 8 L13.8 12.2 L15.8 19 L10 15 L4.2 19 L6.2 12.2 L0.5 8 L7.6 7.6 Z";
    const SPARKLE_PATH = "M10 0 L11.2 8.8 L20 10 L11.2 11.2 L10 20 L8.8 11.2 L0 10 L8.8 8.8 Z";
    const N = 55; //how many stars to scatter

    for (let i = 0; i < N; i++) {
        const svg = document.createElementNS("http://www.w3.org/2000/sv", "svg");
        svg.setAttribute("viewBox", "0 0 20 20");
        svg.classList.add("bg-star");
        if (Math.random() > 0.7) svg.classList.add("bright");

        const path = document.createElementNS("http://www.w3.org/2000/sv", "path");
        path.setAtttribute("d", Math.random() > 0.5 ? STAR_PATH : SPARKLE_PATH);
        svg.appendChild(path);

        const size = 8 + Math.random() * 26; 
        svg.style.width = svg.style.height = size + 'px';
        svg.style.left = (Math.random() * 100) + '%';
        svg.style.left = (Math.random() * 100) + '%';
        svg.style.animationDelay = (Math.random() * 4) + 's';
        svg.style.animationDuration = (2.8 + Math.random() * 3) + 's';

        bg.appendChild(svg);
    }
}

/*INTRO */
function startIntro() {
    makeStars();
    //each element has its own animation-delay in the CSS so we can triger them all together here
    setTimeout(() => document.getElementById('shooting-star').classList.add('go'), 50);
    setTimeout(() => document.getElementById('signature-wrap').classList.add('show'), 50);
    setTimeout(() => document.getElementById('tagline').classList.add('show'), 50);
    setTimeout(() => document.getElementById('enter-btn').classList.add('show'), 50);
}

function endIntro() {
    document.body.classList.remove('intro-active');
    document.getElementById('intro').classList.add('gone');
    document.getElementById('main').classList.add('show');
}

document.getElementById('enter-btn').addEventListener('click', endIntro);
document.getElementById('skipBtn').addEventListener('click', endIntro);

/*GALLERY */
function renderGallery(filter = 'all') {
    const grid = document.getElementById('grid');
    const filtered = filter === 'all'
        ? works 
        : works.filter(w => w.category === filter);
        
  grid.innerHTML = filtered.map(w => `
    <article class="work" data-cat="${w.category}">
      <div class="frame">
        <span class="placeholder">${w.title}</span>
      </div>
      <div class="meta-line">
        <span class="title">${w.title}</span>
        <span class="year">${w.year}</span>
      </div>
      <div class="medium">${w.medium}</div>
      ${w.badge ? `<span class="badge ${w.gold ? 'gold' : ''}">${w.badge}</span>` : ''}
    </article>
  `).join('');

    document.getElementById('count').textContent =
    `${filtered.length} work${filtered.length === 1 ? '' : 's'}`;
}

document.getElementById('filters').addEventListener('click', e => {
    if (!e.target.classList.contains('filter')) return;
    document.querySelectorAll('.filter')

});


/*INIT */
startIntro();
renderGallery();

