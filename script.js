function toggleMenu() {
    const menu = document.querySelector('.menu');
    const crossIcon = document.querySelector('.cross-icon');
    const lines = document.querySelectorAll('.menu-icon .line');

    menu.classList.toggle('active');
    crossIcon.classList.toggle('visible');

    lines.forEach(line => {
        line.classList.toggle('hidden');
    });
}
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    testimonials[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    currentIndex = index;
    testimonials[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

