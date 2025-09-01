// Efeito de desvanecimento do logo ao rolar
window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    const scrollPosition = window.scrollY;
    hero.style.opacity = 1 - scrollPosition / 400;
});
