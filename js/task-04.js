const btnMinus = document.querySelector('button[data-action="decrement"]')
console.log(btnMinus);
const btnPlus = document.querySelector('button[data-action="increment"]')
console.log(btnPlus);
const text = document.querySelector('#value')
let counterValue = 0;

// console.log(text.textContent);
btnPlus.addEventListener('click', () =>
    {counterValue += 1;
text.textContent = counterValue})
btnMinus.addEventListener('click', () => 
   {counterValue -= 1;
text.textContent = counterValue})



//     btnPlus.addEventListener('click', () => 
//     text.textContent  += 1
// )
// btnMinus.addEventListener('click', () => 
//     text.textContent -= 1)


