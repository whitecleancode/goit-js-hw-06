const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imageGallery = document.querySelector(".gallery");

const onMarkupImagePush = ({ url, alt }) => {
  const element = document.createElement("li");
  element.style.listStyle = "none";
  element.style.display = "flex";
  element.style.justifyContent = "center";
  element.insertAdjacentHTML(
    "afterbegin",
    `<img width="1200" class="picture" src='${url}' alt='${alt}'>`
  );
  element.classList.add("list-item");

  return element;
};
const onGalleryPull = images.map(onMarkupImagePush);

imageGallery.append(...onGalleryPull);

console.log(onGalleryPull);
