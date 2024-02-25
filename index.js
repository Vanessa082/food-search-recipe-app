const mealCategory = document.querySelector('.category');

const catergoryApiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';


async function fetchDisplayCategoryData() {
  try {
    const response = await fetch(catergoryApiUrl);
    const data = await response.json();

    // create category div 

    data.categories.forEach(category => {
      const div = document.createElement('div')
      div.classList.add('.mealCategory')
      div.style.backgroundImage = `url(${category.strCategoryThumb})`


      // button for each category

      const button = document.createElement('button')
      button.textContent = category.strCategory

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



