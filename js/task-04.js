const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");

decrBtn.addEventListener("click", () => {
  counter.decrement();
  counterValue.textContent = counter.value;
});

incrBtn.addEventListener("click", () => {
  counter.increment();
  counterValue.textContent = counter.value;
});
