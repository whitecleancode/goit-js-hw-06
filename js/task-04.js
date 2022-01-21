const btnDown = document.querySelector('button[data-action="decrement"]');
const btnUp = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

let currentValue = counterValue.textContent;

function decrement() {
  --currentValue;
  console.log(currentValue);
  counterValue.textContent = currentValue;
}
function increment() {
  ++currentValue;
  console.log(counterValue);
  counterValue.textContent = currentValue;
}

btnUp.addEventListener("click", increment);
btnDown.addEventListener("click", decrement);
