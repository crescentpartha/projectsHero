
// Recalculate factorial multiple times using a function

// let factorial = 1;
// for (let i = 1; i<=5; i++){
//     factorial = factorial * i;
// }
// console.log(factorial);

function getFactorial (number) {
    let factorial = 1;
    for (let i = 1; i<= number; i++){
        factorial *= i;
    }
    return factorial;
}

const firstFactorialValue = 5;
var firstFactorial = getFactorial(firstFactorialValue);
console.log("Factorial of", firstFactorialValue , "=", firstFactorial); // Factorial of 5 = 120

var secondFactorial = getFactorial(7);
console.log('Factorial of 7 =', secondFactorial); // Factorial of 7 = 5040

