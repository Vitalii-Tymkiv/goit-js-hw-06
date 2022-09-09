const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

const listItems = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = `${ingredient}`;
  itemEl.classList.add("item");
  return itemEl;
});

ingredientsListRef.append(...listItems);
console.log(ingredientsListRef);
