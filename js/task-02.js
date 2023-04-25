const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
// console.log(item);
const list = document.querySelector('#ingredients');

ingredients.map(elem => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = elem;
  list.append(item);
});
