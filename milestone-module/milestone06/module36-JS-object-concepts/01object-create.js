
// 36.1 Module Introduction | Different way to Create Object

// 1. using object literal
const student = { name: 'Sakib Al Hasan', job: 'cricketer' };

// 2. object constructor
const person = new Object();
console.log(person); // {}

// 3. 
const human1 = Object.create(null);
console.log(human1); // [Object: null prototype] {}

const human2 = Object.create(student);
console.log(human2); // {}
console.log(human2.job); // cricketer

// 4. Creating object from class 
// Syntactical Sugar - work as a function inside the class - class er pater bitore function die e kaj kore
class People { 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manus', 12);
console.log(peop); // People { name: 'Manus', age: 12 }

// 5. function 
function Manus(name) {
    this.name = name;
}
const man = new Manus('Kader');
console.log(man); // Manus { name: 'Kader' }

