
/* 
    fetch vs async await: https://www.quora.com/What-is-the-difference-between-async-await-and-fetch

    Fetch:
        1. Fetch returns a promise which resolves to the request data or an error.
        2. It is asynchronous in nature, that is execution of the rest of the program does not pause.
        3. Fetch is an external function(browser API) or module(nodejs) that help us make request to external services(mainly backend APIs or 3rd party APIs).
    Async await:
        1. Async await is the modern syntex to handle promises.
        2. The code looks like synchronous code, which makes it easier for people to read and understand the code.

    Example:

        fetch('https://apiYouWantToFetch.com/players') // returns a promise
        .then(response => response.json()) // converting promise to JSON
        .then(players => console.log(players)); // console.log to view the response

        ---------------------------------------------------------------------------

        fetch('http://example.com/songs')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
*/

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all') // https://restcountries.com/
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries => {
    // console.log(countries[0]);
    const allCountriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(allCountriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');
}

const getCountryHTML = country => {
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src='${country.flags.png}'>
            <h3>${country.name.official}</h3>
            <p>Capital: <b>${country.capital}</b></p>
            <p>Continents: <b>${country.continents}</b></p>
            <p>Subregion: <b>${country.subregion}</b></p>
            <p>Population: <b>${country.population}</b></p>
        </div>
    `
}

loadCountries();

