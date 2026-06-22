// Simple scroll behavior for header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 20) {
        header.classList.add('shadow-md');
    } else {
        header.classList.remove('shadow-md');
    }
});