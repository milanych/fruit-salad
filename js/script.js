const fruitForm = document.querySelector('#inputSection form');
const fruitList = document.querySelector('#fruitSection ul');

const addFruit = (fruit, list) => {
  if (!fruit) {
    return null;
  }
  const li = document.createElement('li');
  li.textContent = fruit;
  list.appendChild(li)
}

const removeFruit = e => {
  console.log(e.target)
  e.target.remove();
}
fruitList.addEventListener('click', removeFruit)

fruitForm.addEventListener('submit', (el) => {
  el.preventDefault();
  addFruit(el.target.fruitInput.value, fruitList);
  el.target.fruitInput.value = '';
})
