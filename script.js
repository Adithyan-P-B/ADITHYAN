// Fade-in effect when the page loads
window.addEventListener('load', () => {
    document.body.style.opacity = 1;
    document.body.style.transition = 'opacity 1s ease';
});

// Smooth scroll effect for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
