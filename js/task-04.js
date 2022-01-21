const btnDown = document.querySelector('button[data-action="decrement"]');
const btnUp = document.querySelector('button[data-action="increment"]');
let counterValue = document.querySelector("#value");

let currentValue = counterValue.textContent;

function decrement() {
  currentValue -= 1;
  console.log(currentValue);
  counterValue.textContent = currentValue;
}
function increment() {
  currentValue += 1;
  console.log(currentValue);
  counterValue.textContent = currentValue;
}

btnDown.addEventListener("click", decrement);
btnUp.addEventListener("click", increment);
