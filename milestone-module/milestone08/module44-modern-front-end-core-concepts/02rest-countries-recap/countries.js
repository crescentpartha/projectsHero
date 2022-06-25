
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

/* -------------------------------------------------------------------------------- */

/* 
    In HTML, 
        - <a> --> tag/element
        - href --> attribute
        - attribute come in name/value pairs like (name="value" | href="https://www.google.com")
        - attributes (href, src, alt, style, width, height, id, class, title, )
    In JavaScript,
        - A JavaScript object is a collection of properties.
        - Properties can be changed, added, deleted and read only.
        - Properties (objName.property = person.age)
        - Properties (name, age, color, country, capital, flags)

    ------------------------------------------------------------------------------------------------------
    
    Attributes vs Properties:
        # In HTML Tags = attributes (ex: id, class, title)
        # In JS Object = properties (ex: name, flags, capital)
    
    Props:
        - we can set attributes by JS also. ( Ex: imgElement.setAttribute('src', imgUrl); )
        - We can send attributes/properties in HTML, This attributes/properties called props.
        - In short, Properties is props.

    ------------------------------------------------------------------------------------------------------

    1. In JavaScript (the DOM, really), an element has attributes and properties. The terms are often used interchangeably, 
    but they're actually two separate things. An attribute is the initial state when rendered in the DOM. A property is the current state.
    2. In the specific context of HTML / Javascript the terms get confused because the HTML representation of a DOM element has attributes 
    (that being the term used in XML for the key/value pairs contained within a tag) 
    but when represented as a JavaScript object those attributes appear as object properties.

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

// option-2:
const getCountryHTML = ({name, flags, capital, continents, subregion, population}) => {
    // distructuring
    // const {name, flags, capital, continents, subregion, population} = country;

    return `
        <div class="country">
            <h2>${name.common}</h2>
            <img src='${flags.png}'>
            <p>Capital: <b>${capital}</b></p>
            <p>Continents: <b>${continents}</b></p>
            <p>Subregion: <b>${subregion}</b></p>
            <p>Population: <b>${population}</b></p>
        </div>
    `
}

/* ------------------------------------------------------------------ */

/* 
    In Console Panel:
        const student = { name: 'sakib', age: 27 };
        student.name // 'sakib'
        name // ' '

        const {name, age} = student; // Object Distructuring
        name // 'sakib'
        age // 17
*/

// // option-1: distructuring
// const getCountryHTML = country => {
//     // distructuring
//     const {name, flags, capital, continents, subregion, population} = country;

//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src='${flags.png}'>
//             <p>Capital: <b>${capital}</b></p>
//             <p>Continents: <b>${continents}</b></p>
//             <p>Subregion: <b>${subregion}</b></p>
//             <p>Population: <b>${population}</b></p>
//         </div>
//     `
// }

/* ------------------------------------------------------------------ */

// // option-0: Original
// const getCountryHTML = country => {
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src='${country.flags.png}'>
//             <h3>${country.name.official}</h3>
//             <p>Capital: <b>${country.capital}</b></p>
//             <p>Continents: <b>${country.continents}</b></p>
//             <p>Subregion: <b>${country.subregion}</b></p>
//             <p>Population: <b>${country.population}</b></p>
//         </div>
//     `
// }


loadCountries();

