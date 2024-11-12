let slideIndex = 0;
const slides = document.querySelectorAll('.product');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    setInterval(() => changeSlide(1), 3000); // Change slide every 3 seconds
});
