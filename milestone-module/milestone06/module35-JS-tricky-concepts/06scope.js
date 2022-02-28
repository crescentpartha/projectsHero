
// 35.6 Global Scope, Local Scope, Block scope, Hoisting, Global Leaking

/* Scope:
    1. global scope --> access from everywhere
    2. local scope --> area of function | access from function only
    3. block scope --> area of (if, switch, conditions, for, while loops) | access from block only
*/

/* Var Vs let, const
    1. Var --> Hoisting - Declaration moves to top But value doesn't move to top
    2. let --> maintain Block Scope | can reassign value | don't Hoisting
    3. const --> maintain Block Scope | can't reassign value | don't Hoisting
    4. Global Leaking --> If we don't set type, It will be global | Hoisting
*/

// global scope --> access from everywhere
const favNumber = 23;
console.log(i); // undefined | Global Leaking

function add(first, second) {
    // local scope --> area of function 
    const result = first + second;
    console.log(first, second, result); // 11 35 46
    console.log(favNumber); // 23
    console.log(mood); // undefined
    if (result > 9) {
        // block scope --> area of (if, switch, conditions, for, while loops)
        var mood = 'happy'; // Hoisting - Declaration moves to top But value doesn't move to top
        console.log(mood); // happy
        mood = 'cranky';
        name = 'partha'; // Global Leaking - It will be global, if we don't set type
    }
    console.log(mood); // cranky
    return result;
}
const sum = add(11, 35);
// console.log(first, second, result); // ReferenceError: first is not defined
console.log(favNumber); // 23
console.log(name); // partha


for (var i=0; i<10; i++) {

}
console.log(i); // 10 | Global Leaking
