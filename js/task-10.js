function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const creatBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const boxesContainerRef = document.querySelector("#boxes");
const inputAmountRef = document.querySelector("#controls input");

creatBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", destroyBoxes);

// inputAmountRef.addEventListener("input", (elem) => {
//   console.log(elem.currentTarget.value);
//   elem.currentTarget.value;
// });

const markup = [];
let amount = inputAmountRef.value;
function createBoxes(amount) {
  for (let i = 0; i <= inputAmountRef.value; i += 1) {
    const newDivEl = `<div style ="background-color: ${getRandomHexColor()};width: ${
      30 + i * 10
    }px; height: ${30 + i * 10}px"></div>`;
    markup.push(newDivEl);

    console.log(markup);
  }
}

boxesContainerRef.insertAdjacentHTML("beforeend", markup.join(""));

// console.log(boxesContainerRef);
function destroyBoxes() {
  boxesContainerRef.innerHTML = "";
}
