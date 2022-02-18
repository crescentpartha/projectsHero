
// 31.1 Simple Recap of JavaScript six core parts

// Variable
var deposit = 400;
const name = 'partha';
let id = 23;

// Condition | switch
if (deposit > 500) {
    
}
else if (deposit < 500) {

}
else if (deposit == 500) {

}
else if (deposit != 500) {

}
else if (deposit >= 500) {

}
else if (deposit >= 500) {

}
else {

}

// Array
const numbers = [45, 65, 87, 534, 1, 23, 98, 10];
const numberCount = numbers.length;
console.log(numbers[0]);
numbers.pop();
numbers.push(111);
numbers[2] = 555;
// check whether 222 included in the array
if (numbers.indexOf(222) != -1){

}
if (numbers.includes(222)) {
    // Output: true or false
}

// Loop --> while, for, for of
for (const number of numbers) {

}

// function 
function fullName (first, second) {
    const name = first + ' ' + second;
}
const person = fullName('Rahim', 'Ali');

// Object
const bottle = {color: 'yellow', contain: 'water', price: 50};
const student = {
    name: 'Karim',
    id: 23,
    age: 24
};
