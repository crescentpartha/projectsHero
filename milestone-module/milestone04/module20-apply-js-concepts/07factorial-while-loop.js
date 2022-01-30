
// Factorial using a while loop or a decrementing loop


// incrementing while loop
function getFactorial (number) {
    let factorial = 1;
    let i = 1; 
    while (i <= number) {
        factorial *= i;
        i++;
    }
    return factorial;
}

const myFactorial = getFactorial(6);
console.log('Factorial of 6 =', myFactorial); // Factorial of 6 = 720


// decrementing while loop
function getFactorial2(number) {
    let factorial = 1; 
    let i = number;
    while (i >= 1){
        factorial *= i;
        i--;
    }
    return factorial;
}

const myFactorial2 = getFactorial(6);
console.log('Factorial of 6 =', myFactorial2); // Factorial of 6 = 720


// For loop reverse
function getFactorial3 (number) {
    let factorial = 1;
    for (let i=number; i>=1; i--){
        factorial *= i;
    }
    return factorial;
}

const myFactorial3 = getFactorial(6);
console.log('Factorial of 6 =', myFactorial3); // Factorial of 6 = 720

