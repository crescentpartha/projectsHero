
// 36.9 Module summary and checklist

/* Arrow Function Vs Normal Function
    Arrow Function: doesn't have own this | need to set using bind | Arrow function used inside upper level function. 
*/

/* 
    1. Different way to Create Object
    2. Object method property review
        -- property of different data type stay together in Object
        -- method (function) - access property, update value, return value
        -- Accessing Object Properties = objectName.methodName()
    3. Keys, values, entries, delete, seal, freeze
    4. Loop through an object using for in, for of, object entries
        -- Types of for Loop
        -- 3 ways to get value form object
    5. Objects Comparison Concepts | referential integrity
    6. Use bind to borrow method from another object
    7. Difference among bind, call and apply
    8. Understand this keyword in JavaScript
*/

const pen = {
    brand: 'econo', 
    price: 10, 
    writePoem: function(food) {
        console.log(food);
    }
}
const keys = Object.keys(pen);
const values = Object.values(pen);

for (const key in pen) {
    console.log(pen[key]);
}

// similer to "pass by value & pass by reference"
const a = {a:1};
const b = {a:1};
const c = a;

if (a === b) {

}

const aBounded = pen.writePoem.bind(a);
aBounded();

