
// 32.2 Destructuring Object to extract values to variables

/* 
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack 
values from arrays, or properties from objects, into distinct variables.

    1. Array destructuring
    2. Object destructuring
    3. Nested object and array destructuring

    Must Visit: Destructuring Assignment - MDN Web Docs
*/

// 1. Array Destructuring 
const foo = ['one', 2, 'three'];

const [ red, yellow, green, blue ] = foo;
console.log(red, yellow, green, blue) // one 2 three undefined


// 2. Object Destructuring
const fish = { id: 58, name: 'King Hilsha', price: 9000, phone: '01717-347755', address: 'Chandpur', dress: 'silver' };

console.log(fish.name); // King Hilsha

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const { phone, price, dress, id } = fish;

console.log(phone, price); // 01717-347755 9000
console.log(phone); // 01717-347755
console.log(phone, dress); // 01717-347755 silver
console.log(phone); // 01717-347755
console.log(phone, id); // 01717-347755 58


const user = {
    name: 'Alex', 
    age: 25
};
const {name, address} = user; // extract values to variables
console.log(name, address); // Alex undefined


// 3. Nested Object Destructuring
const company = {
    name: 'GP', 
    ceo: { 
        id: 01, 
        name: 'Azmol', 
        food: 'fuchka' 
    }, 
    web: { 
        work: 'website-development', 
        employee: 22, 
        framework: 'react', 
        tech: {
            first: 'html', 
            second: 'css', 
            third: 'js'
        }
    }
};
// const employee = company.web.employee;
// const framework = company.web.framework;
// console.log(employee, framework) // 22 react

const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;
console.log(work, framework, food, second, third); // website-development react fuchka css js


