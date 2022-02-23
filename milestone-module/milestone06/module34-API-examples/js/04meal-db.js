
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
    .then(data => console.log(data.meals))
}
