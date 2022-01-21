const inputFocus = document.querySelector("#validation-input");
const six = Number(inputFocus.dataset.length);

const amountOfSymbolsValidation = (event) => {
  if (event.currentTarget.value.length === six) {
    inputFocus.classList.add("valid");
    inputFocus.classList.replace("invalid", "valid");
  } else {
    inputFocus.classList.add("invalid");
    inputFocus.classList.replace("valid", "invalid");
  }
};

inputFocus.addEventListener("blur", amountOfSymbolsValidation);
