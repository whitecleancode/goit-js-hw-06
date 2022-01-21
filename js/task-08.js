const userForm = document.querySelector(".login-form");

userForm.addEventListener("submit", userFormSubmit);

function userFormSubmit(event) {
  event.preventDefault();
  const formPiece = event.currentTarget.elements;
  const email = formPiece.email.value;
  const password = formPiece.password.value;
  if (email === "" || password === "") {
    alert("Необходимо заполнить пустые поля.");
  } else {
    const data = {
      email,
      password,
    };
    console.log(data);
    event.currentTarget.reset();
  }
}
