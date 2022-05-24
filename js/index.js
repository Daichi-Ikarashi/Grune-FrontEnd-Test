// DOMs preparation
const goTopBtn = document.querySelector(".go-top-btn");
const leftSlideBtn = document.getElementById("arrow-left-slide");
const rightSlideBtn = document.getElementById("arrow-right-slide");
const carouselArea = document.querySelector(".carousel-area-f");
const atBtn1 = document.getElementById("at-1");
const mtBtn1 = document.getElementById("mt-1");
const atBtn2 = document.getElementById("at-2");
const mtBtn2 = document.getElementById("mt-2");

const carouselChildNum = carouselArea.childElementCount; // sum of carousels child element

// Added css transitions on first load
window.onload = () => {
  document.querySelector(".top-slider-area").style.transition = "0.5s";
  document.querySelector(".carousel-area-f").style.transition = "0.5s";
};

// scroll to the top
goTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Carousel arrow button handling
rightSlideBtn.addEventListener("click", () => {
  let nowPosition = carouselArea.offsetLeft;
  let carouselAreaWidth = carouselArea.clientWidth;
  console.log(carouselArea.offsetLeft);
  carouselArea.style.left = `${nowPosition - carouselAreaWidth * 0.2 - 20}px`;
});
leftSlideBtn.addEventListener("click", () => {
  let nowPosition = carouselArea.offsetLeft;
  let carouselAreaWidth = carouselArea.clientWidth;
  carouselArea.style.left = `${nowPosition + carouselAreaWidth * 0.2 - 20}px`;
});

for (let i = 1; i <= carouselChildNum; i++) {
  // Set car image of carousel-item as background image
  document.getElementById(
    `carousel-car-${i}`
  ).style.background = `url(./assets/img/catalog/slideshow/car${i}.png) no-repeat center /
    contain`;
  // Add a change event for the fav button to each button
  document
    .getElementById(`favorite-btn-${i}`)
    .addEventListener("click", (e) => {
      document.getElementById(e.target.id).classList.toggle("active");
    });
}

// Function of AT / MT button of search option
atBtn1.addEventListener("click", () => {
  atBtn1.classList.toggle("in-active");
  mtBtn1.classList.toggle("in-active");
});
mtBtn1.addEventListener("click", () => {
  atBtn1.classList.toggle("in-active");
  mtBtn1.classList.toggle("in-active");
});
atBtn2.addEventListener("click", () => {
  atBtn2.classList.toggle("in-active");
  mtBtn2.classList.toggle("in-active");
});
mtBtn2.addEventListener("click", () => {
  atBtn2.classList.toggle("in-active");
  mtBtn2.classList.toggle("in-active");
});
