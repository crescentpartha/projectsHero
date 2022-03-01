
// 36.4 Loop through an object using for in, for of, object entries

/* Types of for Loop:
    1. for (let i=0; i<10; i++) {}
    2. for (const num of numbers) {} // array Or array like object
    3. for (const prop in student) {} // object
*/

/* 3 ways to get value form object:
    1. objectName.property
    2. objectName["property"]
    3. objectName[expression]
*/

const bottle = {
    color: 'yellow', 
    hold: 'water', 
    price: 50, 
    isCleaned: true 
}; 

for (const prop in bottle) {
    // console.log(prop); // color hold price isCleaned
    // console.log(bottle[prop]); // yellow water 50 true
    // console.log(prop, bottle[prop]); 
    // console.log(bottle["color"]); // yellow yellow yellow yellow
}

const keys = Object.keys(bottle);
// console.log(keys); // [ 'color', 'hold', 'price', 'isCleaned' ]
for (const prop of keys) {
    // console.log(prop, bottle[prop]);
}

// advanced
const entries = Object.entries(bottle);
console.log(entries);
/* Output:
[
  [ 'color', 'yellow' ],
  [ 'hold', 'water' ],
  [ 'price', 50 ],
  [ 'isCleaned', true ]
]
*/

// [key, value] = destructuring
// const [key, value] = ['color', 'yellow'];

for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}
/* Output:
    color yellow
    hold water
    price 50
    isCleaned true
*/

// const arr = ['color', 'jeans', 'tom'];
// arr[0]
