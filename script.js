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
        medium: "Acrylic on canvas",
        category: "painting",
        badge: "Gold Key · American Visions Nominee",
        gold: true,
    },
    {
        title: 'My Heritage",
        year: "2025", 
        medium: "Acrylic on canvas",
        category: "painting",
        badge: "Gold Key · American Visions Nominee",
        gold: true,
    },
    {
        title: 'My Heritage",
        year: "2025", 
        medium: "Acrylic on canvas",
        category: "painting",
        badge: "Gold Key · American Visions Nominee",
        gold: true,
    },
    {
        title: 'My Heritage",
        year: "2025", 
        medium: "Acrylic on canvas",
        category: "painting",
        badge: "Gold Key · American Visions Nominee",
        gold: true,
    },
]


/*INTRO */
function startIntro() {
    makeStars();
    //each element has its own animation-delay in the CSS so we can triger them all together here
    setTimeout(() => document.getElementById('shooting-star').classList.add('go'), 50);
    setTimeout(() => document.getElementById('shooting-star').classList.add('show'), 50);
    setTimeout(() => document.getElementById('shooting-star').classList.add('show'), 50);
    setTimeout(() => document.getElementById('shooting-star').classList.add('show'), 50);
}