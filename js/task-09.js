function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyDoc = document.body;
const randomColorButton = document.querySelector(".change-color");
const randomColorText = document.querySelector(".color");

randomColorButton.addEventListener("click", changeColorFunc);

function changeColorFunc(event) {
  bodyDoc.style.backgroundColor = getRandomHexColor();
  randomColorText.innerHTML = getRandomHexColor();
}
