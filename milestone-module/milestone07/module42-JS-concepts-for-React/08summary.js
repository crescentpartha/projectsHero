
// 42.8 Module Summary: default parameter of function 

/* 

Fundamentals:
    1.1 variable (let, const) - three types of variable
    1.2 condition (<, >, ===, !==, <=, >=) && || if, else if, else
    1.3 array: declare, length, index, push, pop, indexOf, includes
    1.4 for loop, while
    1.5 function return parameter
    1.6 Object declare, property, including array & object

    --------------------------

ES6:
    1. template string ${}
    2. spread (...)
    2.1 copy an array then add a new element to an array
    2.2 use filter to remove an element from an array
    3. Arrow function 
    3.1 no parameter ()
    3.2 single parameter
    3.3 muultiple parameters ()
    3.4 multi line
    4. Destructuring: array destructuring & object destructuring
    5. object declaration shorthand 
    6. function default parameter | parameter default value
    7. Optional Chaining (?.)

    ----------------------------

Browser API:
    1. local storage & seesion storage & cookies
    2. location API
    3. History API
    4. fetch

    ----------------------------

Others: 
    1. array: map, forEach, filter, find
    2. ternary operator
    3. logical and logical or (&& - ||)
    4. JSON (stringify, parse)
    5. conversion shortcut: '' --> string, + --> integer

*/

/* 1. Shorthand: shortcut */

const x = 50;
const y = 100;
const obj = {
    x: x,
    y: y
};

// shortcut
const obj2 = { x, y };

const name = 'SoliMullah';
const area = 'Dhaka';
const nobab = {
    name: name,
    area: area
};

// shortcut
const nabab2 = { name, area };

/* 2. default parameter of function */
function multiply(a, b = 1) {
    return a * b;
}


