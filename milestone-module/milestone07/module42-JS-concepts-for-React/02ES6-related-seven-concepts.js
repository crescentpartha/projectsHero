
// 42.2 template string, arrow function, spread operator

// 1. Template String

const numbers = [89, 35, 98, 12];
const student = {
    name: 'Sakib khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};
const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`; // template string
console.log(about);

// 2. Spread Operator

let num = [2, 4, 6, 8, 10];
const newNum = num;
num.push(99);
num.push(99);
console.log(newNum); // [2,  4,  6, 8, 10, 99, 99]
console.log(...num); // 2 4 6 8 10 99 99
console.log(88, ...num, 99); // 88 2 4 6 8 10 99 99 99

/* create a new array from an older array and add an element */
const currentNumbers = [...num, 55];
console.log(currentNumbers); // [2,  4,  6,  8, 10, 99, 99, 55]

/* spread operator for destructuring */
let animal = {
    name: 'dog',
    color: 'brown',
    age: 7
};
let { age, ...otherProperties } = animal;
console.log(age); // 7
console.log(otherProperties); // { name: 'dog', color: 'brown' }

/* spread operator as rest operator */
function sum(x, y, ...rest) { }

/* spread operator for merging arrays */
let numLists = [...num, age];
console.log(numLists); // [ 2, 4, 6, 8, 10, 99, 99, 7 ]

/* spread operator for merging objects */
let animalWithBreed = {
    ...animal,
    breed: ''
};
console.log(animalWithBreed); // { name: 'dog', color: 'brown', age: 7, breed: '' }

// 3.1 Arrow function with Zero parameter

const getFiftyFive = () => 55;
console.log(getFiftyFive()); // 55

// 3.2 Arrow function with One parameter

const addSixtyFive = num => num + 65;
console.log(addSixtyFive(23)); // 88

const isEven = x => x % 2 == 0;
console.log(isEven(5)); // false

// 3.3 Arrow function with Two parameter

const addTwo = (x, y) => x + y;
console.log(addTwo(5, 7)); // 12

// 3.4 Arrow function with Multiline parameter

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
console.log(doMath(5, 15)); // 20


// 4. Array Destructuring

/* Array Destructuring */
const number = ['one', 'two', 'three', 4, 5, 6];
const [one, , three, ...rest] = number;
console.log(one, three, rest); // one three [ 4, 5, 6 ]

const color = ['red', 'blue', 'green'];
const [first, second, third, fourth] = color;
console.log(first, second, third, fourth); // red blue green undefined

/* Object Destructuing */
let obj = {
    name: 'Max',
    age: 22,
    address: 'Delhi'
};
const { name, address } = obj;
console.log(name, address) // Max Delhi

// 5. Object Literal Shorthand | Object declaration by Shorthand

let name1 = 'John Kabir';
let email = 'john.kabir@gmail.com';
let age1 = 25;

let user1 = {
    name1: name1,
    email: email,
    age1: age1
};
console.log(user1) // { name1: 'John Kabir', email: 'john.kabir@gmail.com', age1: 25 }

/* Object Literal Shorthand */
let user2 = { name1, email, age1 };
console.log(user2); // { name1: 'John Kabir', email: 'john.kabir@gmail.com', age1: 25 }

function foods1(favFood, badFood) {
    return {
        favFood,
        badFood
    };
}
let myFood1 = foods1('Burger', 'Nothing');
console.log(myFood1); // { favFood: 'Burger', badFood: 'Nothing' }

/* Object Literal Shorthand */
function foods2(favFood, badFood) {
    return {
        favFood: favFood,
        badFood: badFood
    };
}
let myFood2 = foods2('Grill', 'Nothing');
console.log(myFood2); // { favFood: 'Grill', badFood: 'Nothing' }

// 6. Default parameter declaration in the function
function greeting(name = 'stranger') {
    console.log(`Hello, ${name}!`)
}
greeting('Nick'); // Hello, Nick!
greeting(); // Hello, stranger!

/* 
    How to write a function that accepts any number of arguments in JavaScript? 
    (Link: https://levelup.gitconnected.com/how-to-write-function-with-n-number-of-parameters-in-javascript-a916de1be7a2)

    A function that accepts any number of arguments.
        We can handle it in two ways:
            1. arguments object (ES5)
            2. Rest parameters (ES6)

    The main difference between rest parameters and the arguments object is:
    ==> All the array methods like map, sort, and filter can be applied directly on the rest parameters array but not on the arguments object.
    ==> To use Array methods on the arguments object, it must be converted to a real array first.
*/

/* arguments object (ES5) */
function add() {
    console.log(arguments); // [Arguments] { '0': 3, '1': 4, '2': 7, '3': 8 }
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(add(3, 4, 7)); // 14
console.log(add(3, 4, 7, 10, 20)); // 44
console.log(add(3, 4, 7, 8)); // 22

/* Using rest parameter in ES6 

    Since the arguments object isn’t an array, we first have to convert it into an array using the Array.from method before we can use the reduce method.
*/
function add2(...args) {
    return args.reduce(function (acc, cur) {
        return acc + cur;
    })
}
console.log(add2(3, 4, 7)); // 14
console.log(add2(3, 4, 7, 10, 20)); // 44
console.log(add2(3, 4, 7, 8)); // 22

// 7. Optional Chaining

/* 
    Optional chaining: (?.)

    The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects 
    without having to check that each reference in the chain is valid.

    The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), 
    the expression returns a value of undefined. 

    const greeting = object?.deepProp?.deeperProp?.greet
*/

const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah'
    }
};
const dogName = adventurer.dog?.name;
console.log(dogName); // undefined

let customer = {
    name: "Carl",
    details: {
        age: 82,
        location: "Paradise Falls" // detailed address is unknown
    }
};
let customerCity = customer.details?.address?.city;
console.log(customerCity); // undefined

