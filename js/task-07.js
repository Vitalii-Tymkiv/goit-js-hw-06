const rangeInputRef = document.querySelector("#font-size-control");

const textRef = document.querySelector("#text");

rangeInputRef.addEventListener("input", inputValueChanger);

function inputValueChanger(event) {
  textRef.style.fontSize = `${event.target.value}px`;
}
