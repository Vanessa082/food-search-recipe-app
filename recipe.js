const searchParams = new URLSearchParams(window.location.search)
const ingredientsMeasurement = document.querySelector('.ingredients-Measurement')
const mealImage = document.querySelector('.strMealThumb')
const mealName = document.querySelector('.strMeal')
const mealCategory = document.querySelector('.strCategory')
const mealArea = document.querySelector('.strArea')
const sourceButton = document.querySelector('.strSource')
const youtubeButton = document.querySelector('.strYoutube')
const mealInstructions = document.querySelector('.instructions')

const idMeal = searchParams.get('idMeal')




if (idMeal) {
  // fetch for meal with that id.
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then((response) => response.json())
    .then((data) => displayMealDetails(data.meals[0]))
    .catch((error) => console.error('Error fetching data:', error));
}

const displayMealDetails = (meal) => {
  const mealThumbnail = meal.strMealThumb
  mealImage.src = mealThumbnail;
  mealImage.alt = meal.strMeal;

  mealName.innerHTML = meal.strMeal
  mealCategory.innerHTML = meal.strCategory
  mealArea.innerHTML = meal.strArea

  const listOfIngredients = document.querySelector('.listOfIngredients')
  const listOfMeasurements = document.querySelector('.listOfMeasurements')

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`]
    const measurement = meal[`strMeasure${i}`]

    if (ingredient) {
      const ingredientItem = document.createElement('li')
      ingredientItem.textContent = ingredient
      listOfIngredients.appendChild(ingredientItem)
    }

    if (measurement) {
      const measurementItem = document.createElement('li')
      measurementItem.textContent = measurement
      listOfMeasurements.appendChild(measurementItem)
    }
  }

  mealInstructions.innerHTML = meal.strInstructions

  const mealYutubeLink = meal.strYoutube
  const mealSourceLink = meal.strSource

  youtubeButton.href = mealYutubeLink
  sourceButton.href = mealSourceLink

}
console.log('id to fetch', idMeal) 