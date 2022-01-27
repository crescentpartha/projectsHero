
// Add or remove element from array using push, pop 

/* 
pop(): Remove an item from the end of an array. 
push(): Add items to the end of an array.
shift(): Remove an item from the beginning of an array.
unshift(): Add items to the beginning of an array.
*/

// add elements to an array
var lastBench = ['kalam', 'balam', 'salam'];
console.log(lastBench); // [ 'kalam', 'balam', 'salam' ]

lastBench.push('jalam');
console.log(lastBench); // [ 'kalam', 'balam', 'salam', 'jalam' ]

lastBench.push('palam');
lastBench.push("nalam");
console.log(lastBench); // [ 'kalam', 'balam', 'salam', 'jalam', 'palam', 'nalam' ]

var friendAge = [11, 13, 17, 12];
console.log(friendAge); // [ 11, 13, 17, 12 ]
friendAge.push(15);
console.log(friendAge); // [ 11, 13, 17, 12, 15 ]

// remove an elements form an array

friendAge.pop();
console.log(friendAge) // [ 11, 13, 17, 12 ]

friendAge.pop();
friendAge.pop();
console.log(friendAge) // [ 11, 13 ]

friendAge.pop();
friendAge.pop();
friendAge.pop();
friendAge.pop();
console.log(friendAge) // [ ]

var lastItem = lastBench.pop();
console.log(lastBench) // [ 'kalam', 'balam', 'salam', 'jalam', 'palam' ]
console.log(lastItem); // nalam

// JavaScript remove first item from an array !!

var arr = [1, 2, 3, 4];
console.log(arr); // [ 1, 2, 3, 4 ]
var removeFirstElement = arr.shift();
console.log(arr); // [ 2, 3, 4 ]

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits); // [ 'Orange', 'Apple', 'Mango' ]

// JavaScript array add element in the beginning !!

var colors = ["white", "blue"];
console.log(colors); // [ 'white', 'blue' ]
colors.unshift("red");
console.log(colors); // [ 'red', 'white', 'blue' ]

const array = [3, 2, 1];
const newFirstElement = 4
const newArray = [newFirstElement].concat(array) // [ 4, 3, 2, 1 ]
console.log(newArray); // [ 4, 3, 2, 1 ]


