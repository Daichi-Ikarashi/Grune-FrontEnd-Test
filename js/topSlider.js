// make top slider and indicator
const indicator = document.getElementById("indicator");
const sliderList = document.querySelector(".top-slider-area");
const slideTotalNumber = 8; // sum of slide img
for (let i = 1; i <= slideTotalNumber; i++) {
  const sliderItem = document.createElement("li"); // sliderItem elements
  sliderItem.classList.add("slider-item"); // Add a class for sliderItem
  sliderItem.style.background = `url(./assets/img/catalog/slideshow/top/car${i}.jpg) no-repeat center /
    contain`;
  sliderItem.textContent = "ダミーテキスト";

  const indicatorElement = document.createElement("li"); // indicator child elements
  indicatorElement.classList.add(`indicator-${i}`, "indicator-icon"); // Add a class unique to each child element of indicator
  indicatorElement.textContent = "●"; // Add indicator icon as text

  sliderList.appendChild(sliderItem);
  indicator.appendChild(indicatorElement);
}
let currentSlideNumber = 1; // set currentSlideNumber

const lists = Array.from(document.querySelectorAll(".indicator-icon"));
lists.forEach((li) => {
  // Add a click event for each indicator and get the indicator number
  li.addEventListener("click", (e) => {
    const index = lists.findIndex((list) => list === e.target);
    currentSlideNumber = index + 1;
    chageIndicatorStatus();
    slideMove(index);
  });
});

// It is a function that manages the display of indicator
// If there is an inActive class in the child element of the indicator created by the above for statement,
// delete the inActive class of that indicator and add the inActive class to the indicator of the current slide.
// If none of the indicators have an Active class, add the inActive class to the indicator of the current slide
// (when loading for the first time)
const chageIndicatorStatus = () => {
  const indicatorInActive = document.querySelector(".indicator-icon.inActive");
  if (!!indicatorInActive) {
    indicatorInActive.classList.remove("inActive");
    document
      .querySelector(`.indicator-${currentSlideNumber}`)
      .classList.add("inActive");
  } else {
    document
      .querySelector(`.indicator-${currentSlideNumber}`)
      .classList.add("inActive");
  }
};

chageIndicatorStatus();

const slideMove = (targetSlide) => {
  let sliderDisplayWidth = document.querySelector(".top-slider").clientWidth;
  document.querySelector(".top-slider-area").style.left = `-${
    sliderDisplayWidth * targetSlide
  }px`;
};
