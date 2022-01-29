
// Module Introduction Apply JS and let, const

// Variable - 3 types (var, let, const)
// String, Number, Boolean;
var time = '10:15pm';
var bookPrice = 150;
var isWhiteColor = false;
console.log(time, bookPrice, isWhiteColor); // 10:15pm 150 false

// array
var partners = ['sajid', 'mojid', 'nojid', 'lajit'];
var elementCount = partners.length;
var nojidIndex = partners.indexOf('nojid');
partners.push('kajit');
partners.pop();
console.log(partners); // [ 'sajid', 'mojid', 'nojid', 'lajit' ]
// array index start with 0 then increase consequencely and if any element doesn't exist in array then it's index(position) is -1;

// conditionals
if (bookPrice < 120) {
    console.log('I will buy this book');
}
else {
    console.log('Mama, kichu discount den naa, apni na mama!');
}

// loop
var i = 0;
while(i <= 17) {
    // do some work
    i++;
}

for (var i=0; i<=15; i++){
    // do some work
}

// function 
function isMoonUp(time){
    if (time <= 19 && time >= 5){
        return false; // Moon is down
    }
    return true; // Moon is up
}
var moonStatus = isMoonUp(21);
console.log(moonStatus); // true

// Variable - 3 types (var, let, const)
// let const (Variables)

// let --> changable and const --> unchangable; (variables)
// value of variable could change
let price = 27;
price = 29;
price = 31;
console.log(price); // 31

// value of the variable won't change
const name = 'lal e lal Mr. Helal';
console.log(name); // lal e lal Mr. Helal
// name = 'Partha'; // TypeError: Assignment to constant variable.

