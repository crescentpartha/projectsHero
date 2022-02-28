
// 35.2 Primitive data type and non-primitive data type

/* Data types in JavaScript
       -- Primitive --
    1. number
    2. string
    3. boolean 
    4. undefined
    5. null
    6. object (Non-primitive)
    7. symbol (new with ES6)

    1. Primitive (immutable)   2. Non-Primitive (mutable)

    # immutable --> they cannot be altered.
    # mutable --> they can be altered. (objects, arrays & functions)
    # arrays are technically a type of object.

    # Primitive = {number, string, boolean, undefined, null, symbol}
    # Non-Primitive = {array, object, function}
*/

// primitive
let a = 'hello';
let b = a;
console.log(a, b); // hello hello
a = 'gello';
console.log(a, b) // gello hello

// Non-primitive (They hold a reference, that's way both values are altered)
const x = { job: 'web developer' };
const y = x; 
console.log(x, y); // { job: 'web developer' } { job: 'web developer' }
// x.job = 'front end developer';
y.job = 'front end developer';
console.log(x, y); // { job: 'front end developer' } { job: 'front end developer' }
