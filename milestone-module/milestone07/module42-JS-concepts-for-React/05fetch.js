
// 42.5 JSON, Fetch, Keys, values, array add or remove using dots

/* 1. JSON --> stringify, parse */

const student = {
    name: 'Amir Khan',
    age: 32,
    movies: ['3-Idiots', 'Dangal']
};
const studentJSON = JSON.stringify(student);
console.log(student); // { name: 'Amir Khan', age: 32, movies: [ '3-Idiots', 'Dangal' ] }
console.log(studentJSON); // {"name":"Amir Khan","age":32,"movies":["3-Idiots","Dangal"]}

const studentObj = JSON.parse(studentJSON);
console.log(studentObj); // { name: 'Amir Khan', age: 32, movies: [ '3-Idiots', 'Dangal' ] }

/* 2. Fetch */

/* 
    fetch('url')
        .then(res => res.json())
        .then(data => console.log(data));
*/

/* 3. Object --> keys, values */

const keys = Object.keys(student);
const values = Object.values(student);

console.log(keys); // [ 'name', 'age', 'movies' ]
console.log(values); // [ 'Amir Khan', 32, [ '3-Idiots', 'Dangal' ] ]

/* Types of Loop */

const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num)); // 23 54 67 87 23 78
const results = numbers.map(num => num * 2);
console.log(results); // [ 46, 108, 134, 174, 46, 156 ]

// (for of) on array like object

const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value); // 10 20 30
}

// loop on an object using (for in)

var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}
/* Output:
    obj.a = 1
    obj.b = 2
    obj.c = 3
*/


/* 4. add or remove from an array  */

const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },
];
const newProduct = { name: 'webcam', price: 700, brand: 'HTC' };

// copy products array and then add newProduct
const newProducts = [...products, newProduct];

/* 
    # create a new array without one specific item
    ==> remove phone means create a new array without the phone 
*/
const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining);
/* Output:
    [
        { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
        { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
        { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
        { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
    ] 
*/


