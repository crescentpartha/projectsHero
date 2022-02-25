
/* 
    fetch --> (alternative version) --> async await
*/

document.getElementById('error-message').style.display = 'none';

// 34.5 Explore meal db api and create dynamic url to load meals
// 34.8 (advanced) Remove previous result and async await

const searchFood = async () => {
    // get text from the field
    const searchField = document.getElementById('serach-field');
    const searchText = searchField.value;
    // console.log(searchText);
    // clear data

    // Empty first mealDetail section to remove selected meals
    const mealDetail = document.getElementById('meal-details');
    // mealDetail.innerHTML = ''; // But doesn't recommended | It's for single item | for multiful items, remove this line;
    mealDetail.textContent = '';

    // clear searField 
    searchField.value = '';
    document.getElementById('error-message').style.display = 'none';
    if (searchText == '') {
        const searchResult = document.getElementById('search-result');
        // searchResult.innerHTML = ''; // But it doesn't recommended
        searchResult.textContent = '';
        
        // please write something to display
    }
    else {
        // Load data | create a dynamic url by template string
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        // console.log(url);
        
        try {
            const res = await fetch(url);
            const data = await res.json();
            displaySearchResult(data.meals);
        }
        catch(error) {
            displayError(error);
        }
        
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => displaySearchResult(data.meals))
    }

}

const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}

// 34.6 Display dynamic search result using bootstrap cards
const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML = ''; // But it doesn't recommended
    searchResult.textContent = '';
    if (meals.length == 0) {
        // show no result found
    }
    else {
        meals.forEach(meal => {
            // console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div onclick="loadMealDetail(${meal.idMeal})" class="card" h-100>
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
}

// 34.7 Create dynamic url based on click and display data

// 34.8 (advanced) Remove previous result and async await
const loadMealDetail = async mealId => {
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0]);
    
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
    console.log(meal);
    const mealDetail = document.getElementById('meal-details');
    // mealDetail.innerHTML = ''; // But doesn't recommended | It's for single item | for multiful items, remove this line;
    mealDetail.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.style.marginBottom = '10px';
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    mealDetail.appendChild(div);
}
