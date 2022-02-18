
// 31.7 More Arrow funcitons and big arrow function 

// Arrow function with implicit return 
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4, 12, 3);
console.log(result); // 144

const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);
console.log(sum); // 112

const tenTimes = (num) => num * 10; // One variable with bracket
const output = tenTimes(17); 
console.log(output); // 170

const fiveTimes = num => num * 5; // One variable without bracket
const value = fiveTimes(5); 
console.log(value); // 25

const getName = () => 'Brandom Sam'; // without argument
const name = getName();
console.log(name); // Brandom Sam

// Arrow function with explicit return 

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y; 
    const result = sum * diff;
    const output = result * 5; 
    // return output; 
    return sum, diff, result;
}
// console.log(doMath(6, 5)); // 55
console.log(doMath(6, 5)); // 11 // One function return only One value.


/* document.getElementById('my-btn').addEventListener(event => {

}) */



