const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onOutputBlur);

function onOutputBlur(event) {
  const { dataset, value } = event.target;
  const requiredInputLength = Number(dataset.length);

  if (requiredInputLength === value.length) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  } else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  }
}
