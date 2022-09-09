const inputNameEl = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");

function handleInputValue(event) {
  const { value } = event.target;
  outputNameEl.textContent = value ? value : "Anonymous";
}

inputNameEl.addEventListener("input", handleInputValue);
