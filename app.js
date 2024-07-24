// ***Carousel slider functionalities***
const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".prev-btn");
const carouselSlider = document.querySelector(".carousel-slider");
const slides = document.querySelectorAll(".review");

let slideNumber = 1; // this variable is used because slider button does not work after one click

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

// ***Product popup modal functionalities***
const productItems = document.querySelectorAll(".item");
const productPopup = document.querySelector(".product-popup");
const closePopupButton = document.querySelector(".close-popup-btn");
const productSection = document.querySelector("#products");

// open popup modal by clicking on a product card
productItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    productPopup.style.transform = "translateY(0)";
    productPopup.style.opacity = "1";

    //change popup modal contents
    let itemPhotoSrc = item.querySelector(".item-photo").src;
    let itemTitle = item.querySelector(".item-title").innerText;
    let itemPrice = item.querySelector(".item-price").innerText;

    productPopup.querySelector(".product-popup-img").src = itemPhotoSrc;
    productPopup.querySelector(".product-info-title").innerText = itemTitle;
    productPopup.querySelector(".product-info-price").innerText = itemPrice;
  });
});

// close popup modal by clicking on the x (top right)
closePopupButton.addEventListener("click", () => {
  productPopup.style.transform = "translateY(-300%)";
  productPopup.style.opacity = "0";
});

// close popup modal by clicking outside the modal
// this section code needs more work!
window.addEventListener("click", (event) => {
  if (event.target == productSection) {
    productPopup.style.transform = "translateY(-300%)";
    productPopup.style.opacity = "0";
  }
});

// ***menu icon functionalities***
const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector(".navList");

navList.style.maxHeight = "0px";

menuIcon.addEventListener("click", () => {
  if (navList.style.maxHeight == "0px") {
    navList.style.maxHeight = "12em";
  } else {
    navList.style.maxHeight = "0px";
  }
});
