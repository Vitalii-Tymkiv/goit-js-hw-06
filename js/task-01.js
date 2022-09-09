const categoriesListRef = document.querySelectorAll(".item");
console.log("Number of categories: ", categoriesListRef.length);

categoriesListRef.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);

  const itemsList = item.querySelectorAll("li");

  console.log("Elements: ", itemsList.length);
});
