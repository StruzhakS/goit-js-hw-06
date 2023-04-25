const btnMinus = document.querySelector('button[data-action="decrement"]');
console.log(btnMinus);
const btnPlus = document.querySelector('button[data-action="increment"]');
console.log(btnPlus);
const text = document.querySelector('#value');
let counterValue = 0;
btnPlus.addEventListener('click', () => {
  counterValue += 1;
  text.textContent = counterValue;
});
btnMinus.addEventListener('click', () => {
  counterValue -= 1;
  text.textContent = counterValue;
});
