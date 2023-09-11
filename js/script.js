const fruitForm = document.querySelector('#inputSection form');
const fruitList = document.querySelector('#fruitSection ul');
const fruitNutrition = document.querySelector('#nutritionSection');

const fetchFruitData = (fruit) => {
  fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      addFruit(data)
    })
    .catch(e => console.error(e))
}
let calories = 0;
let carbohydrates = 0;
let fat = 0;
let protein = 0;
let sugar = 0;

const addFruit = (fruit) => {
  if (!fruit) {
    return null;
  }
  const li = document.createElement('li');
  li.textContent = fruit.name;
  fruitList.appendChild(li)


  calories += fruit.nutritions.calories;
  fat += fruit.nutritions.fat;
  carbohydrates += fruit.nutritions.carbohydrates;
  protein += fruit.nutritions.protein;
  sugar += fruit.nutritions.sugar;

  fruitNutrition.textContent = `Calories: ${calories.toFixed(2)} Carbohydrates: ${fruit.nutritions.carbohydrates.toFixed(2)} Fat: ${fat.toFixed(2)} Protein: ${protein.toFixed(2)} Sugar: ${fruit.nutritions.sugar.toFixed(2)}`
}

fruitList.addEventListener('click', (e) => {
  console.log(e)
  e.target.remove()
})

fruitForm.addEventListener('submit', (el) => {
  el.preventDefault();
  fetchFruitData(el.target.fruitInput.value, fruitList)
  el.target.fruitInput.value = '';
})
