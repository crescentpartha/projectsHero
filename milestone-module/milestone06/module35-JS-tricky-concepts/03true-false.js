
// 35.3 Different Truthy and Falsy values in JavaScript

/* 
    Falsy: 
        false
        0
        empty string
        undefined
        null
        NaN
-----------------------------------------------
    Truthy: 
        true
        any number (positive or negative)
        any string (single whitespace, character, word, sentence, '0', 'false')
        [] --> empty array / array
        {} --> empty object / object
        anything else that is not falsy will be truthy
*/

// const x = true; // false, true, 5, -5, 0, 'Solaimen', '', ' ', '0', 'false';

/* let x; 
console.log('value of x', x); // value of x undefined */

// let x = null; 

/* let x = parseInt('string'); 
console.log('value of x', x); // value of x NaN */

/* let x = []; 
console.log('value of x', x); // value of x [] */

/* let x = {}; 
console.log('value of x', x); // value of x {} */

let x = [23, 233]; 
console.log('value of x', x); // value of x [ 23, 233 ]

if(x) {
    console.log('variable is Truthy');
}
else {
    console.log('variable is Falsy');
}

