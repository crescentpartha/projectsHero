
// 29.6 Have fun with sort and reverse a javascript array
// JavaScript sometimes doesn't work for Double Digit number sort. But single digit number sort works well.

const numbers = [6, 4, 7, 1, 3, 9, 2, 8, 5];
console.log(numbers.reverse()); // [ 5, 8, 2, 9, 3, 1, 7, 4, 6 ]
console.log(numbers.sort()); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(numbers.reverse()); // [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

const friends = ['kabli', 'josim', 'razzak', 'anwar', 'deepjol', 'badsha'];
console.log(friends.reverse()); // [ 'badsha', 'deepjol', 'anwar', 'razzak', 'josim', 'kabli' ]
console.log(friends.sort()); // [ 'anwar', 'badsha', 'deepjol', 'josim', 'kabli', 'razzak' ]
console.log(friends.reverse()); // [ 'razzak', 'kabli', 'josim', 'deepjol', 'badsha', 'anwar' ]

const fruits = ['coconut', 'banana', 'lemon', 'apple', 'grapes', 'orange', 'strawberry', 'cherry', 'pineapple'];
console.log(fruits.sort().reverse()); // [ 'strawberry', 'pineapple', 'orange', 'lemon', 'grapes', 'coconut', 'cherry', 'banana', 'apple' ]




// number sorting fun | JavaScript sometimes doesn't work for Double Digit number sort.
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
console.log(bigNumbers.sort()); // [ 13,  2, 37, 58, 6, 66, 81,  9, 92 ]

// Syntax: array.sort(compareFunction)
// Sort the numbers in ascending order

let sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumbers); // [ 2,  6,  9, 13, 37, 58, 66, 81, 92 ]
// console.log(bigNumbers.sort(function(a, b){return a-b})); // [ 2,  6,  9, 13, 37, 58, 66, 81, 92 ]

// Sort the numbers in descending order:

sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return b - a;
});
console.log(sortedBigNumbers); // [ 92, 81, 66, 58, 37, 13,  9,  6,  2 ]
// console.log(bigNumbers.sort(function(a, b){return b-a})); // [ 92, 81, 66, 58, 37, 13,  9,  6,  2 ]




// Arrays of objects can be sorted by comparing the value of one of their properties | MDN Web Docs

const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

// sort by value
const sortByValue = items.sort(function (a, b) {
    return a.value - b.value;
});
console.log(sortByValue); 

/* Output:
[
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'Zeros', value: 37 },
    { name: 'And', value: 45 }
] */

// sort by name
const sortByName = items.sort(function (a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
});
console.log(sortByName); 

/* 
Output:
[
    { name: 'And', value: 45 },
    { name: 'Edward', value: 21 },
    { name: 'Magnetic', value: 13 },
    { name: 'Sharpe', value: 37 },
    { name: 'The', value: -12 },
    { name: 'Zeros', value: 37 }
] */

