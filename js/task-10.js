function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const creatBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const boxesContainerRef = document.querySelector("#boxes");
const inputAmountRef = document.querySelector("#controls input");

creatBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", destroyBoxes);

function createBoxes() {
  const markup = [];
  for (let i = 0; i <= inputAmountRef.value; i += 1) {
    const newDivEl = `<div style ="background-color: ${getRandomHexColor()};width: ${
      30 + i * 10
    }px; height: ${30 + i * 10}px"></div>`;

    markup.push(newDivEl);
    console.log(markup);
  }
  boxesContainerRef.insertAdjacentHTML("beforeend", markup.join(""));
}

function destroyBoxes() {
  boxesContainerRef.innerHTML = "";
}
