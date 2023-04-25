const categorys = document.querySelector('#categories');
console.log(`Number of categories: ${categorys.children.length}`);
const array = [...categorys.children];
array.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}
    Elements: ${element.lastElementChild.children.length}`);
});
