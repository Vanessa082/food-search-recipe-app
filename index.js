const mealCategory = document.querySelector('.category');

const catergoryApiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';


async function fetchDisplayCategoryData() {
  try {
    const response = await fetch(catergoryApiUrl);
    const data = await response.json();

    // create category div 

    data.categories.forEach(category => {
      const div = document.createElement('div')
      div.classList.add('mealCategory')
      div.style.backgroundImage = `url(${category.strCategoryThumb})`
      div.style.borderRadius = '10px'


      // button for each category

      const button = document.createElement('button')
      button.textContent = category.strCategory
      button.classList.add('mealbtn')
      button.style.borderRadius = '15px'

      button.addEventListener('click ', (e) => {
        e.defaultPrevented
      });
      div.appendChild(button)

      mealCategory.appendChild(div)
    });

  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

fetchDisplayCategoryData()

const input = document.querySelector('.input')
const mealList = document.querySelector('.mealList')


const fetchMeals = async (searchInput) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
  const data = await response.json();
  return data.meals;
}

const displayMeals = async () => {
  const searchInput = input.value
  const meals = await fetchMeals(searchInput)

  mealList.innerHTML = ''

  if(meals) {
    meals.forEach(meal => {
      const item = document.createElement('li')

    item.innerHTML = `<a href='/recipe.html?idMeal=${meal.idMeal}'>${meal.strMeal}</a>`


      mealList.appendChild(item)
    })
  } else {
    const noResultsItem = document.createElement('li')
    noResultsItem.textContent = 'No meals found.'
    mealList.appendChild(noResultsItem)
}
}
input.addEventListener('input', displayMeals);


// const form = document.querySelector('form')
// form.addEventListener('submit', (e) => {
//   e.defaultPrevented()
// })
