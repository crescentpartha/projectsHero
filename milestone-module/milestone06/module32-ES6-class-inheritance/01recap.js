
// 32.1 Module Indroduction and Basic ES6 Recap

// 01. Variables - let and const 
const hubby = 'Omor Sani';
let phone = 'Samsung Galaxy S17';
phone = 'iPhone 15';

// 02. Default Parameter
function maxNumber(array = []){
    const max = Math.max(...array); // Spread syntax (...) allows an iterable
    return max;
}
const biggest = maxNumber();
console.log(biggest); // -Infinity

// 03. Template String | Interpolation
const myNotes = `I am laili of ${hubby}. I don't have mojnu.
I have a ${phone}.`;
console.log(myNotes);
/* Output:
    I am laili of Omor Sani. I don't have mojnu.
    I have a iPhone 15.
*/

// 04. Arrow function 
/* function square(x) {
    return x * x;
} */
const square = x => x * x;
console.log(square(5)); // 25

// 05. Spread or three dots (...)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr = [...arr1, ...arr2];
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

