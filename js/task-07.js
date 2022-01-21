const onRangePick = document.querySelector("#font-size-control");
const onText = document.querySelector("#text");

const onTextSizePick = (event) => {
  onText.style.fontSize = `${onRangePick.value}px`;
};

onRangePick.addEventListener("input", onTextSizePick);
