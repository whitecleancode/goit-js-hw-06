function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onBoxesReady = document.querySelector("#boxes");
const onButtons = document.querySelectorAll("button");
const inputAmount = document.querySelector("input");

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newItem = document.createElement("div");
    newItem.style.backgroundColor = getRandomHexColor();
    newItem.style.width = 30 + i * 10 + "px";
    newItem.style.height = 30 + i * 10 + "px";

    onBoxesReady.append(newItem);
  }
}
onButtons.forEach((el) => {
  if (el.dataset.hasOwnProperty("create")) {
    el.addEventListener("click", () => {
      createBoxes(inputAmount.value);
    });
  } else {
    el.addEventListener("click", () => {
      onBoxesReady.innerHTML = ``;
    });
  }
});
