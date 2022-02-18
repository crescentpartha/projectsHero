
// 31.9 Module Summary and ES6 Recap

// Variables types --> var, let, const
let priyoPerson = 'Koolsum Begum';
priyoPerson = 'Momotaj Begum';

const hubby = 'Akbar the great';

/* 
Const 
    1. Don't Reassign/set

Const for array or object
    1. We can push, pop, indexOf
    2. Don't Reassign/set
*/

// default parameter
function getName(first, last='Chowdhury') {
    return first + ' ' + last;
}

// templete string 
/* 
    1. It allows embedding multiline strings without using '\n'.
    2. Templete literals are enclosed by the ``(backtick) characters.
    3. Allows expression interpolation like `${2+3}`
*/
const myPeople = `My lovely person is ${hubby} and his fullName is ${getName('Akbar')}. My name is ${priyoPerson}.`;

console.log(myPeople); // My lovely person is Akbar the great and his fullName is Akbar Chowdhury. My name is Momotaj Begum.


// Arrow function 
const getName2 = (first, last) => first + ' ' + last;
const fiveTimes = x => x*5;
const birArrow = (x, y, z) => {
    const firstPart = x + y;
    const secondPart = y * z;
    const thridPart = x / z;
    const result = (firstPart + secondPart) * thridPart;
    return result;
}

// Spread operators
const numbers = [2, 45, 27, 23];
const min = Math.min(...numbers);
console.log(min); // 2
