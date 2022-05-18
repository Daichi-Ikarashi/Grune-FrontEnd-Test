// DOMの取得
const goTopBtn = document.querySelector(".go-top-btn"); // topへ戻るボタン
const leftSlideBtn = document.getElementById("arrow-left-slide");
const rightSlideBtn = document.getElementById("arrow-right-slide");
const carouselArea = document.querySelector(".carousel-area-f");
// at, mt ボタン取得
const atBtn1 = document.getElementById("at-1");
const mtBtn1 = document.getElementById("mt-1");
const atBtn2 = document.getElementById("at-2");
const mtBtn2 = document.getElementById("mt-2");

const carouselChildNum = carouselArea.childElementCount; // carouselの子要素数

// 初回ロード時に、cssのトランジションを追加
window.onload = () => {
  document.querySelector(".top-slider-area").style.transition = "0.5s";
  document.querySelector(".carousel-area-f").style.transition = "0.5s";
};

// topへスクロールする処理
goTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// カルーセルのarrowボタンの処理
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

// "./assets/img/catalog/slideshow/car5.png"
// background: ;

for (let i = 1; i <= carouselChildNum; i++) {
  // 車の画像をbgに当てる
  document.getElementById(
    `carousel-car-${i}`
  ).style.background = `url(../assets/img/catalog/slideshow/car${i}.png) no-repeat center / contain`;
  // favボタンの切り替えイベントを各ボタンに当てる
  document
    .getElementById(`favorite-btn-${i}`)
    .addEventListener("click", (e) => {
      document.getElementById(e.target.id).classList.toggle("active");
    });
}

// 検索optionの AT/MT ボタンの処理
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
