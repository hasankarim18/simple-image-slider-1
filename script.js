// script.js
let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slides img").length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  console.log(currentIndex);
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveSlide(step) {
  showSlide(currentIndex + step);
}

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener("click", () => {
  moveSlide(-1);
});

next.addEventListener("click", () => {
  moveSlide(1);
});

// Automatic sliding
// setInterval(() => {
//   moveSlide(1);
// }, 3000);
