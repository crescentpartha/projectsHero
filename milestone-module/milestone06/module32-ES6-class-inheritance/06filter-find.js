
// 32.6 (advanced) Inplement filter, find on an array of objects

/* 
    filter & find is similer to map
    ***** filter() Vs find() *****
filter():
    1. takes them to a new array and returns them which elements are full-fill the conditions by iterating every element of the array
    2. return a new array | return more element | return [] --> if not found

find():
    1. return the first element of array which is full-fill the condition and return only One element.
    2. return element | return Only One element | return undefined --> if not found

*/

const numbers = [5, 13, 7, 41, 30, 5, 2, 19];

const bigNumbers2 = numbers.map(number => number > 20);
console.log(bigNumbers2); // [ false, false, false, true, true,  false, false, false ]

const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers); // [ 41, 30 ]

const bigNumbers3 = numbers.filter(number => number < 10);
console.log(bigNumbers3); // [ 5, 7, 5, 2 ]

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 50, color: 'white' }
];

const expensive = products.filter(product => product.price > 100);
console.log(expensive);
// Output:
// [
//     { name: 'mobile phone', price: 15000, color: 'black' },
//     { name: 'smart watch', price: 3000, color: 'black' }
// ]

const blacks = products.filter(product => product.color == 'black');
// console.log(blacks);

const blue = products.filter(product => product.color == 'blue');
console.log(blue); // []



// find() 
const whiteItem = products.find(product => product.color == 'pink');
console.log(whiteItem); // { name: 'sticky note', price: 30, color: 'pink' }

const blueItem = products.find(product => product.color == 'blue');
console.log(blueItem); // undefined

/* 
                            find Vs filter
    find: return element | return Only One element | return undefined --> if not found
    filter: return a new array | return more element | return [] --> if not found

*/
