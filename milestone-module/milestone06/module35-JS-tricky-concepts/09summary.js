
// 35.9 Module Summary, pass by reference, pass by value

/* 
    # Primitive (immutable) = {number, string, boolean, undefined, null, symbol}
    # Non-Primitive (mutable) = {array, object, function}
    # immutable --> they cannot be altered.
    # mutable --> they can be altered.
*/
const nums = [23, 12, 56, 34];
console.log(typeof nums); // object
console.log(Array.isArray(nums)); // true

function triple(x, y, z) {

}
console.log(typeof triple); // function
console.log(triple.length); // 3
console.log(typeof null); // object

/* Why is null an object?
    ==> In JavaScript null is "nothing". It is supposed to be something that doesn't exist. 
    Unfortunately, in JavaScript, the data type of null is an object. 
    You can consider it is a bug in JavaScript that typeof null is an object.
*/

// pass by value | primitive
function threeParameter (x, y, z) {
    x = 111; 
    y = 222; 
    z = 333;
}
const n1 = 3;
const n2 = 5;
const n3 = 7;
threeParameter(n1, n2, n3);
console.log(n1, n2, n3); // 3 5 7 | Primitive type doesn't alter

// pass by reference | Non-primitive
function threePara (x, y, z) {
    x.age = 111; 
}
const myObj = {name: 'kuddus', age: 63};
threePara(myObj);
console.log(myObj); // { name: 'kuddus', age: 111 } | Non-primitive type does alter


