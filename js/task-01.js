"use strict";

const catSum = document.querySelector("#categories").children.length;
console.log("Number of categories: " + catSum);

const firstCat = document.querySelectorAll(".item");

const count = firstCat.forEach((element) => {
  console.log("Category: " + element.firstElementChild.textContent);

  console.log("Elements: " + element.lastElementChild.children.length);
});
console.log(count);

// console.log("Category: " + firstCat[1].firstElementChild.textContent);

// console.log("Elements: " + firstCat[1].lastElementChild.children.length);

// console.log("Category: " + firstCat[2].firstElementChild.textContent);

// console.log("Elements: " + firstCat[2].lastElementChild.children.length);

// const im = firstCat.forEach((el, num, array) => {
//   console.log("Category: " + el.firstElementChild.textContent);
// });
// console.log(im);
