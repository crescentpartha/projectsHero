
// Different variable types and use toFixed with parseFloat

var tShirtPrice = 200;
console.log(tShirtPrice); // 200
console.log(typeof tShirtPrice); // number

var tShirtPrice2 = '200';
console.log(tShirtPrice2); // 200
console.log(typeof tShirtPrice2); // string

var isRaining = true;
console.log(isRaining); // true
console.log(typeof isRaining); // boolean

var isRomantic;
console.log(typeof isRomantic); // undefined

var today = new Date();
console.log(today); // 2022-01-27T17:18:30.885Z
console.log(typeof today); // object

// Special Edition
var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;
console.log(total); // 0.30000000000000004
console.log(total.toFixed(2)); // 0.30 - (Returns a string representing a number in fixed-point notation.)
console.log(parseFloat(total.toFixed(2))); // 0.3

// toFixed --> Returns a string 
// parseFloat --> Converts a string to a floating-point number. 

