// script.js
let currentIndex = 0;
const carouselInner = document.querySelector(".carousel-inner");
const images = document.querySelectorAll(".carousel-inner img");
const totalImages = images.length;

function getVisibleImages() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 3;
  return 5;
}

function showSlide(index) {
  const visibleImages = getVisibleImages();
  const maxIndex = Math.ceil(totalImages / visibleImages);

  if (index >= maxIndex) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = maxIndex - 1;
  } else {
    currentIndex = index;
  }

  const translateX = -(currentIndex * (100 / visibleImages)) * visibleImages;
  carouselInner.style.transform = `translateX(${translateX}%)`;
}

function moveSlide(step) {
  showSlide(currentIndex + step);
}

// Update carousel on window resize
window.addEventListener("resize", () => showSlide(currentIndex));

// Initialize the carousel
showSlide(currentIndex);

// setInterval(() => moveSlide(1), 3000);

const carousel = document.querySelector(".carousel");
carousel.style.cursor = "pointer";
let autoSlide = setInterval(() => moveSlide(1), 3000);
carousel.addEventListener("mouseenter", () => clearInterval(autoSlide));
carousel.addEventListener(
  "mouseleave",
  () => (autoSlide = setInterval(() => moveSlide(1), 3000))
);
