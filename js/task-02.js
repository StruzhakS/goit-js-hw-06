const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const list = document.querySelector('#ingredients');

const items = ingredients.map(elem => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = elem;
  return item;
});

list.append(...items);
