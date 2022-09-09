function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const currentColorText = document.querySelector(".color");
const body = document.querySelector("body");

changeColorBtn.addEventListener("click", bodyBcgColorChanger);

function bodyBcgColorChanger() {
  currentColorText.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}
