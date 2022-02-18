
// 31.8 Spread operator, array max, copy arrays

/* 
    01. Create one array from two different array
    02. Get all elements from one array
    03. We can set all array value from another array by using Spread operator
    04. Spread operators can be used for arrays or objects
*/

const numbers = [23, 65, 99, 21, 34];
console.log(numbers); // [ 23, 65, 99, 21, 34 ]
console.log(...numbers); // 23 65 99 21 34

const max1 = Math.max(23, 99, 65, 21, 35);
const max2 = Math.max([23, 99, 65, 21, 35]);
const maxInArray1 = Math.max(numbers);
const maxInArray2 = Math.max(...numbers); // cloning to prevent mutation.
console.log(max1, max2, maxInArray1, maxInArray2); // 99 NaN NaN 99

const numbers2 = numbers; // Reference
numbers.push(55);
console.log(numbers); // [ 23, 65, 99, 21, 34, 55 ]
console.log(numbers2); // [ 23, 65, 99, 21, 34, 55 ]

let numbers3 = [numbers];
console.log(numbers3); // [ [ 23, 65, 99, 21, 34, 55 ] ]  --> 2 dimensional array

const numbers4 = [22, ...numbers, 88];
numbers.push(66);
console.log(numbers); // [ 23, 65, 99, 21,34, 55, 66 ]
console.log(numbers4); // [ 22, 23, 65, 99, 21, 34, 55, 88 ]




const numList = [1, 2, 3];
const numListClone = [...numList]; // [1, 2, 3]
console.log(numList, numListClone); // [ 1, 2, 3 ] [ 1, 2, 3 ]

const newNumList = [...numList, ...numListClone]; // spread operator for merging arrays or objects
console.log(newNumList); // [ 1, 2, 3, 1, 2, 3 ]


let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 }; // Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 }; // Object { foo: "baz", x: 42, y: 13 }

console.log(clonedObj, mergedObj); // { foo: 'bar', x: 42 } { foo: 'baz', x: 42, y: 13 }


let animal = {
    name: 'dog',
    color: 'brown',
    age: 7
};
console.log(animal); // { name: 'dog', color: 'brown', age: 7 }

let fruit = {
    name: 'mango',
    color: 'green'
};
console.log(fruit); // { name: 'mango', color: 'green' }

const margedAnimalFruit1 = { ...animal, ...fruit };
const margedAnimalFruit2 = { ...fruit, ...animal };

console.log(margedAnimalFruit1); // { name: 'mango', color: 'green', age: 7 }
console.log(margedAnimalFruit2); // { name: 'dog', color: 'brown', age: 7 }






/* Some Confusion */

let { age, ...otherProperties } = animal;
// console.log(animal); // { name: 'dog', color: 'brown', age: 7 }

// Rest parameters
function sum(x, y, ...rest) {
    const total = x + y + rest;
    return total;
}
console.log(sum(3, 4, 5, 6, 7, 'partha')); // 75,6,7,partha


function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a)
    console.log("b", b)
    console.log("manyMoreArgs", manyMoreArgs)
}
myFun("one", "two", "three", "four", "five", "six");

/* Output:
    a one
    b two
    manyMoreArgs [ 'three', 'four', 'five', 'six' ]
*/
