
// 31.3 Breakup with var to have a relationship with let and const 

/* 
    What is ECMAScript?
        ECMAScript is the scripting language that forms the basis of JavaScript. (JavaScript / ECMAScript)
    What is tc 39?
        Ecma International's TC39 is a group of JavaScript developers, implementers, academics, and more, collaborating with 
        the community to maintain and evolve the definition of JavaScript.
*/

/* 
    var --> Rejected / Breakup / Don't use further more
    const --> Can't Reassign / Set / Unchangeable
    let --> Reassign / Set / Changeable
*/

// Use const --> if you doesn't change/set/assign variable value
const balance = 2340;
// balance = 1234; // TypeError: Assignment to constant variable.

// Use let --> if you change variable value or the variable is varying
let amount = 2340; 
amount = 1234;

const userName = 'janpakhi potas potas';
const weTogether = 'ami ' + userName;
console.log(weTogether); // ami janpakhi potas potas
// userName = 'moyna pakhi'; // TypeError: Assignment to constant variable.

const numbers = [45, 23, 92, 38];
// numbers = [99, 157, 145]; // Reassign not allowed
numbers.push(555);
numbers[1] = 333;

for (let i=0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

const student = { roll: 101, name: 'mofiz', job: 'intern' };
student.name = 'Mofazzol';
// student = { name: 'mofazzol' }; // Can't Reassign const object

