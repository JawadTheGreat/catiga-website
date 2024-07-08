const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".prev-btn");
const carouselSlider = document.querySelector(".carousel-slider");
const slides = document.querySelectorAll(".review");

let slideNumber = 1;
// this variable is used because slider button does not work after one click

// next button functionalities
nextButton.addEventListener("click", () => {
  if (slideNumber < slides.length) {
    carouselSlider.style.transform = `translateX(-${slideNumber * 100}vw)`;
    slideNumber++;
  } else {
    carouselSlider.style.transform = `translateX(0vw)`;
    slideNumber = 1;
  }
});

// previous button functionalities
prevButton.addEventListener("click", () => {
  if (slideNumber > 1) {
    carouselSlider.style.transform = `translateX(-${
      (slideNumber - 2) * 100
    }vw)`;
    slideNumber--;
  } else {
    carouselSlider.style.transform = `translateX(-${
      (slides.length - 1) * 100
    }vw)`;
    slideNumber = slides.length;
  }
});
