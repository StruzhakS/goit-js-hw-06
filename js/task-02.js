const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')
console.log(list
);

for (const ingredient of ingredients) {
  const item = document.createElement('li');
item.classList.add('item');
  item.textContent = ingredient;
  console.log(item);
  list.append(item)
  
}


