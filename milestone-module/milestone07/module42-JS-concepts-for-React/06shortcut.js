
// 42.6 (advanced) truthy, false Ternary operator, shortcut and or

// 1. Truthy = 'almas', 5, true, {}, []
// 2. Falsy = '', 0, false, null, undefined

// check truthy
let myVar = 5; 
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

// you check negative or falsy anything
let myMoney = 50; 
if (!myMoney) {

}

// 3. Ternary Operation

// normal conditional statement
const money = 800; 
let food; 
if (money > 100) {
    food = 'biryani';
}
else {
    food = 'cha biscuit';
}
console.log(food);

/* ------------------------- */

// ternary operation | return something
let food1 = money > 100 ? 'biryani' : 'cha biscuit';
console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'Coke' : 'Filter Water';
console.log(drink);

/* 4. Types Conversion Shortcut */

// number to string conversion (Using empty string)
const num = 52; 
console.log(num); 
const numStr = num  + ''; 
console.log(numStr);

// string to number conversion (Using + sign)
const input = '560';
console.log(input);
const inputNum = +input; 
console.log(inputNum); 

/* Ternary Operation Shortcut */
let isActive = true;
const showUser = () => console.log('Display User');
const hideUser = () => console.log('Hide User');
isActive ? showUser() : hideUser(); // Display User

/* 5. Shortcut And OR */

// Use && -->  if the left side is true then right side will be executed
isActive && showUser(); // Display User
!isActive && hideUser();

// Use || --> if the left side is false then right side will be executed
isActive || showUser();
!isActive || hideUser(); // Hide User

/* 6. toggle boolean */

// console.log(isActive); // true
isActive = !isActive;
// console.log(isActive); // false

