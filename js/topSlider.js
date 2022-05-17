// インジケーターの生成
const indicator = document.getElementById("indicator");
const slideTotalNumber = 5; // slide画像の枚数
for (let i = 0; i < slideTotalNumber; i++) {
  const indicatorElement = document.createElement("li"); // indicator子要素li
  indicatorElement.classList.add(`indicator-${i + 1}`, "indicator-icon"); // indicatorの各子要素に固有のクラスを追加
  indicatorElement.textContent = "●"; // indicatorのアイコンをテキストで追加

  indicator.appendChild(indicatorElement);
}
let currentSlideNumber = 1; //現在のスライド番号

const lists = Array.from(document.querySelectorAll(".indicator-icon"));
lists.forEach((li) => {
  // 各インジケーターのクリックイベント、インジケーターの番号を取得する
  li.addEventListener("click", (e) => {
    const index = lists.findIndex((list) => list === e.target);
    currentSlideNumber = index + 1;
    chageIndicatorStatus();
    slideMove(index);
  });
});

// indicatorの表示を管理する関数
// 上のfor文で作成したindicatorの子要素に、inActiveクラスがあれば、（indicatorのどれかがinActiveなら）
// そのindicatorのinActiveクラスを削除(非アクティブ)し、現在のスライド(currenNumber)のindicatorにinActiveクラスを追加
// 初期ロード用、どのindicatorにもActiveクラスがなかったら(非アクティブ)なら、現在のスライド(currenNumber)のindicatorにinActiveクラスを追加
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
