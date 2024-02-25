const searchParams = new URLSearchParams(window.location.search)

const idMeal = searchParams.get('idMeal')

if (idMeal) {
  // fetch for meal with that id.
  fetch(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then((response) => response.json())
    .then((data) => displayMealDetails(data.meals[0]))
    .catch((error) => console.error('Error fetching data:', error));
}

const displayMealDetails = (meal) => {
}
console.log('id to fetch', idMeal) 