
// (Advanced) String Concatenation, Integer float parseInt parseFloat type conversion

var firstName = 'Jennie';
var lastName = 'Kim';
var fullName = firstName + ' ' + lastName;
console.log(fullName); // Jennie Kim

var first = 'Ariana';
var last = 'Grande';
var name = first + ' ' + last;
console.log(name); // Ariana Grande

// var onionPrice = '42';
// var eggPrice = '41';
// var totalPrice = onionPrice + eggPrice;
// console.log(totalPrice); // 4241

// var onionPrice = 42;
// var eggPrice = '41';
// var totalPrice = onionPrice + eggPrice;
// console.log(totalPrice); // 4241

// var onionPrice = '42';
// var eggPrice = 41;
// var totalPrice = onionPrice + eggPrice;
// console.log(totalPrice); // 4241

// var onionPrice = 42;
// var eggPrice = 41;
// var totalPrice = onionPrice + eggPrice;
// console.log(totalPrice); // 83

// Integer 
var sunglass = 3;
// Float 
var price = 99.99;

var onionPrice = '42';
var eggPrice = '41.50';
var onionPriceNumber = parseInt(onionPrice);
console.log(onionPriceNumber); // 42
console.log(parseInt(eggPrice)); // 41
console.log(parseFloat(eggPrice)); // 41.5
console.log(parseInt(eggPrice) + parseFloat(eggPrice)); // 82.5

