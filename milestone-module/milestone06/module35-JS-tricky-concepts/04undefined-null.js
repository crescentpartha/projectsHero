
// 35.4 Null Vs Undefined, different ways you will get undefined

/* Null Vs Undefined
    Null: 
        1. used for intentionally missing values (lack of value)
        2. a value explicitly set by the programmer
        3. doesn't have | not defined
----------------------------------------------------
    Undefined:
        1. used for unintentionally missing values (lack of value)
        2. a value implictily or explicitly set
        3. lots of meaning
*/

/* undefined:
    1. variable value not assigned
    2. function but didn't return anything 
    3. just wrote return but didn't return anything
    4. parameter that isn't passed
    5. property that doesn't exist in an object
    6. accessing array element out of range
    7. accessing deleted array element
    8. explicitly set value to undefined
*/

/* 1. variable value not assigned */
let first; 
console.log(first); // undefined

/* 2. function but didn't return anything */
function second(x, y) {
    const sum = x + y;
}
const result = second(3, 92);
console.log(result); // undefined

/* 3. just wrote return but didn't return anything */
function add(a, b) {
    const sum = a + b;
    if (b < 10) {
        return; 
    }
    const fun = a * b;
    return sum;
}
const fourth = add(2, 7);
console.log(fourth); // undefined

/* 4. parameter that isn't passed */
function double(a, b) {
    const result = a*2; 
    console.log(b); // undefined
    return result;
}
console.log(double(81)); // 162

/* 5. property that doesn't exist in an object */
const fifth = { name: 'sagor', age: 15, location: 'bandarban' };
console.log(fifth.phone); // undefined

/* 6. accessing array element out of range */
const sixth = [54, 12, 51, 33];
console.log(sixth[4]); // undefined

/* 7. accessing deleted array element */
const seven = [23, 43, 65, 43];
delete seven[2]; // Should not recommend, use splice for delete.
console.log(seven); // [ 23, 43, <1 empty item>, 43 ]
console.log(seven[2]); // undefined

// Use of splice | Recommend for deletion
let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2,2);
console.log(array); // [ 'today', 'was', 'great' ]
console.log(array[2]); // great | accessing deleted element index

/* 8. explicitly set value to undefined */
const eight = undefined;
console.log(eight); // undefined


/* Null
    1. explicitly set
    2. set null instead of undefined
---------------------------------------------
    # null --> doesn't have | not defined
    # undefined --> lots of meaning
*/

const myObject = { name: 'samiul', profession: null };
console.log(myObject.profession); // null

console.log(typeof null); // object
console.log(typeof undefined); // undefined
