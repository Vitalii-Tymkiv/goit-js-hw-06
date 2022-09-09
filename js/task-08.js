const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Заповніть всі поля!");
    return;
  }
  const userIdentificationData = {
    email: email.value,
    password: password.value,
  };
  console.log(userIdentificationData);
  event.currentTarget.reset();
}
