const rangeInputRef = document.querySelector("#font-size-control");

const textRef = document.querySelector("#text");

textRef.style.fontSize = `${rangeInputRef.value}px`;

rangeInputRef.addEventListener("input", inputValueChanger);

function inputValueChanger(event) {
  textRef.style.fontSize = `${event.target.value}px`;
}
