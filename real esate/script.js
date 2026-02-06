// ===== HAMBURGER TOGGLE =====
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// ===== HEADER SCROLL =====
const header = document.querySelector(".header");
const sliderContainer = document.querySelector(".slider-container");

window.addEventListener("scroll", () => {
  const sliderBottom = sliderContainer.getBoundingClientRect().bottom;
  
  if (sliderBottom <= 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// ===== AUTO SLIDER =====
const slides = document.querySelectorAll(".slides");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 4000);
