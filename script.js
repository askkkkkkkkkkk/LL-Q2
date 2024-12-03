function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

function showContent() {
    const content = document.querySelector('.content');
    content.classList.add('visible');
}

// Expanding Cards Functionality
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        removeActiveClasses();
        card.classList.add('active');
    });
});

function removeActiveClasses() {
    cards.forEach(card => {
        card.classList.remove('active');
    });
}