
// 36.5 (advanced) Compare objects, referential integrity

// objects works with reference, doesn't matter it looks same or not.

/* Objects Comparison Concepts:
    1. works with reference
    2. looks same, but not equal
    3. Use JSON.stringify() for camparison
*/

const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;
// if (first == second) {
if (first === second) {
    console.log('objects are equal');
}
else {
    console.log('objects are different'); // objects are different
}

if (first === third) {
    console.log('objects are equal'); // objects are equal
}
else {
    console.log('objects are different'); 
}

console.log(JSON.stringify(first)); // {"a":1,"b":2}
console.log(JSON.stringify(second)); // {"a":1,"b":2}

if (JSON.stringify(first) === JSON.stringify(second)) {
    console.log('objects are equal'); // objects are equal
}
else {
    console.log('objects are different'); 
}

// const first2 = { a: 1, b: 2, c: 2 }; // false
const first2 = { a: 1, b: 2 };
const second2 = { b: 2, a: 1 };
// const second2 = { b: '2', a: 1 }; // false
console.log(JSON.stringify(first2)); // {"a":1,"b":2}
console.log(JSON.stringify(second2)); // {"b":2,"a":1}

if (JSON.stringify(first2) === JSON.stringify(second2)) {
    console.log('objects are equal'); 
}
else {
    console.log('objects are different'); // objects are different
}

function compareObjects(obj1, obj2) {
    if(Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        console.log(obj1[prop], obj2[prop]); // 1 1, 2 2
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}
const isEqual = compareObjects(first2, second2);
console.log(isEqual); // true


