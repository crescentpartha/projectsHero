
//29.5 Get part of an array and insert elements using slice, splice
// 01. The slice begins at index 0 | (2, 8) --> Output: (3, 7) | doesn't change original array

const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];

console.log(numbers.slice(4)); // [ 9, 19, 15, 21, 45, 87 ]
console.log(numbers.slice(2, 5)); // [ 4, 8, 9 ]
console.log(numbers.slice(4, 8)); // [ 9, 19, 15, 21 ]
console.log(numbers); // [ 3, 6, 4, 8, 9, 19, 15, 21, 45, 87 ]



// 02. splice(start, end) | splice(start, deleteCount) - JavaScript array method
// The splice begins at index 0 | (4, 2) --> Output: (4, 2 elements delete from 4 index) | Change original array | splice can remove element

// splice to remove an element from an array
console.log(numbers.splice(4, 2)); // [ 9, 19 ]
console.log(numbers); // [ 3, 6, 4, 8, 15, 21, 45, 87 ]

// splice can remove elements and insert elements from the start index
// splice(start, deleteCournt, insert1, .... insertX)
const integer = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(integer); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(integer.splice(4, 4, 99, 98, 100, 102)); // [ 5, 6, 7, 8 ]
console.log(integer); // [ 1, 2, 3, 4, 99, 98, 100, 102, 9 ]
console.log(integer.splice(2, 0, 22, 44)); // []
console.log(integer); // [1,  2, 22,  44, 3, 4, 99, 98, 100, 102, 9 ]


