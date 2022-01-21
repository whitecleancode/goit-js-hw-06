const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingrList = document.querySelector("#ingredients");

const createList = ingredients.map((el) => {
  const ingr = document.createElement("li");
  ingr.textContent = el;
  ingr.classList.add("item");
  return ingr;
});

ingrList.prepend(...createList);

console.log(ingrList);

//     const listItem = document.createElement("li");
//       const new = listItem.classList.add("item");
//       ingredients.forEach(el => )

// console.log(task2({ ingredients }));
