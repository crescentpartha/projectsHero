
// 35.7 (advanced) Closure, encapsulation, private variable

/* What is a Closure in JS
    ==> A closure gives you access to an outer function's scope from an inner function
    ==> A closure is a function having access to the parent scope, even after the parent function has closed.

    ==> If I return one function to another function and If it access outter function's variable, 
        then it create closure / encapsulation / private reference / private variable.
        It takes the reference of outter variables that we can't access from outside. 
        But If we call it then it increase by taking reference.
*/

function stopWatch() {
    let counter = 0;
    return function() { // inner function, a closure
        counter++;
        return counter;
    }
}
let clock1 = stopWatch();
console.log(clock1); // [Function (anonymous)]
console.log(clock1()); // 1
console.log(clock1()); // 2
console.log(clock1()); // 3
console.log(clock1()); // 4
// clock1 have reference value

let clock2 = stopWatch();
console.log(clock2()); // 1
console.log(clock2()); // 2
// clock2 have reference value

console.log(clock1()); // 5

