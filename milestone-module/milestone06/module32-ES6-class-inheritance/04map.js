
// 32.4 Array map to do one line loop magic

const numbers = [4, 6, 8, 10];
const output = [];

// function doubleOld(number) {
//     return number * 2; 
// }

const doubleNew = number => number * 2; 

for (const number of numbers) {
    // const result = number * 2;
    const result = doubleNew(number);
    output.push(result);
}
console.log(output); // [ 8, 12, 16, 20 ]

/* 
    map(): call function for each element and returns all function in a new array
    1. loop through each element
    2. call the provided function for each element
    3. result will be stored in an array for each element
*/

// const output2 = numbers.map(doubleNew);
// console.log(output2); // [ 8, 12, 16, 20 ]

// const output2 = numbers.map(number => number * 2);
const output2 = numbers.map(x => x * 2);
console.log(output2); // [ 8, 12, 16, 20 ]

const squares = numbers.map(x => x * x);
console.log(squares); // [ 16, 36, 64, 100 ]

