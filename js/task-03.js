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

const galleryListRef = document.querySelector(".gallery");

galleryListRef.style.cssText =
  "display: flex; flex-wrap: wrap; margin: -15px; list-style: none";

const itemsListEl = images.map(({ url, alt }) => {
  return `<li class="gallery-item"><img src="${url}" alt="${alt}"></li>`;
});

const markup = itemsListEl.join(" ");

galleryListRef.insertAdjacentHTML("beforeend", markup);
console.log(galleryListRef);
