
// 35.5 double equal (==) Vs triple equal (===) | implicit conversion

/* double equal (==) Vs triple equal (===)
    double equal (==): 
        1. values check 
        2. doesn't check type
        3. Non-primitive type (you can use for)
        4. support implicit conversion (convert itself)
        5. true --> 1, false --> 0, '1' --> 1, '0' --> 0, '2' --> 2
-------------------------------------------------
    triple equal (===): 
        1. values check
        2. check type
        3. primitive type (you can use for)
        4. support implicit conversion (convert itself)
*/

/* Summary:
    primitive type --> check with ===
    Non-primitive type --> check with ==
*/

// primitive type

// const first = 2; // '2', 2
// const second = '2'; // 2, '2'

const first = 1; // 1, '1', '0', 0
const second = true; // true, false

if (first == second) {
    console.log('condition is true');
}
else {
    console.log('condition is false');
}

// more comparison | Non-primitive type

/* const a = { name: 'ali' };
const b = { name: 'ali' }; */

const a = [];
const b = [];
if (a == b) {
    console.log('both are same');
}
else {
    console.log('they are not same'); 
}

// Output: they are not same | Because of Non-primitive types, Object & Array check reference wise.

