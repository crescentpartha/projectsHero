
// 32.5 ES6 Recap and practice with checklist

// 01. let and const
let name = 'Bangladesh';
const war = 1971;
console.log(name, 'is independent in',  war); // Bangladesh is independent in 1971

// 02. Template string 
const country = `Bangladesh is a beautiful country.
I love Bangladesh.
Today is 21st February, our International Mother Language Day.`;
console.log(country);
/* Output:
    Bangladesh is a beautiful country.
    I love Bangladesh.
    Today is 21st February, our International Mother Language Day.
*/

// 02.a: use variable 
const useVariable = `${name} is a Asian country.`;
console.log(useVariable); // Bangladesh is a Asian country.

// 02.b: use object property
const computer = {
    name: 'Dell laptop', 
    color: 'black', 
    price: 29000
};
const useObject = `I want to buy a ${computer.name} for better performance.`;
console.log(useObject); // I want to buy a Dell laptop for better performance.

// 03. Arrow function 
const x = (n) => n*n;
console.log(x(9)); // 81

// 03.a: with one parameter. will return the number after dividing by 5
const one = (n) => n/5;
console.log(one(9)); // 1.8

// 03.b: with two parameter. will add two to each number and then multiply the result.
const two = (num1, num2) => (num1+2) * (num2+2);
console.log(two(3, 4)); // 30

// 03.c: three parameters. will multiply all three parameters
const three = (num1, num2, num3) => num1 * num2 * num3;
console.log(three(5, 6, 7)); // 210

// 03.d: with two parameters but it will be a multi line arrow function. will add two to each number and then multiply the result.
const twoMulty = (x, y) => {
    const a = x + 2; 
    const b = y + 2; 
    const result = a * b;
    return result;
}
console.log(twoMulty(8, 3)); // 50

// 04. [home work]: JavaScript function declaration Vs arrow function 

// 05. array of numbers. and then map to get each elements multiplied by 5. must use arrow function 
const numbers = [23, 3, 5, 4, 98, 59, 39, 29, 30];
const result = numbers.map(x => x * 5);
console.log(result) // [ 115,  15,  25,  20, 490, 295, 195, 145, 150 ]

// 06. [Challenging] numbers of array. get odd numbers by using filter with arrow function 
const oddNubers = numbers.filter(number => number%2);
console.log(oddNubers); // [ 23, 3, 5, 59, 39, 29 ]

// 07. [Challenging] array of objects (e.g. products). use find to get the object with price 5000.
const products = [
    { name: 'Dell', color: 'black', price: 29302 },
    { name: 'hp', color: 'goldenrod', price: 30000 },
    { name: 'asus', color: 'yellow', price: 5000 }
];
const findObject = products.find( product => product.price == 5000);
console.log(findObject); // { name: 'asus', color: 'yellow', price: 5000 }

// 08. You have an object. Now use destructing to create a simple variable of any property of the object.
const phone = {
    phoneName: 'iPhone', 
    color: 'blue', 
    price: 30000
};
const {phoneName, color, price} = phone;
console.log(phoneName, price); // iPhone 30000

// 09. [Challenging] You have an array. Now use destructing to create a simple (or more) variable to get the third element of the array in a variable called 'three'.
const arr = [2, 32, 523, 34, 64, 60];
const [ , , third] = arr;
console.log(third); // 523

// 10. [Optional] just write a function with three parameters and the last pareameter will have a default parameter with value 7. this function will take three parameters and will return the sum of all the three parameters.

function sum ( x, y, z = 7) {
    const total = x + y + z;
    return total;
}
const totalResult = sum(30, 50);
console.log(totalResult); // 87
