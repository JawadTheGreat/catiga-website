const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".prev-btn");
const carouselSlider = document.querySelector(".carousel-slider");
const slides = document.querySelectorAll(".review");

let slideNumber = 1;

nextButton.addEventListener("click", () => {
  if (slideNumber < slides.length) {
    carouselSlider.style.transform = `translateX(-${slideNumber * 100}vw)`;
    slideNumber++;
  } else {
    carouselSlider.style.transform = `translateX(0vw)`;
    slideNumber = 1;
  }
});

prevButton.addEventListener("click", () => {
  if (slideNumber >= 1) {
    carouselSlider.style.transform = `translateX(${slideNumber * 100}vw)`;
    slideNumber--;
  }
  //  else {
  //   slideNumber = slides.length;
  //   carouselSlider.style.transform = `translateX(${slideNumber * 100}vw)`;
  // }
});
