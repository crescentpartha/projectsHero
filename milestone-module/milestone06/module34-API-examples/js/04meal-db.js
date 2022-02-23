
// 34.5 Explore meal db api and create dynamic url to load meals

const searchFood = () => {
    // get text from the field
    const searchField = document.getElementById('serach-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    // create a dynamic url by template string
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
}

// 34.6 Display dynamic search result using bootstrap cards
const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}
