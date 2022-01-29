
// Check even and odd number using function 

const number = 4;
const remainder = number % 2;
console.log(remainder == 0); // true
console.log(number % 2 == 1); // false

// is even function
function isEven(num){
    if (num % 2 == 0){
        return true;
    }
    return false;
}
const myNum = 145;
const isMyNumberEven = isEven(myNum);
console.log('is my number even ', isMyNumberEven); // is my number even  false

const herNum = 168;
const isHerNumberEven = isEven(herNum);
console.log('is her number even ', isHerNumberEven); // is her number even  true

// is odd function 
function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}

const isMyNumberOdd = isOdd(myNum);
console.log('is my number odd ', isMyNumberOdd); // is my number odd  true

const isHerNumberOdd = isOdd(herNum);
console.log('is her number odd ', isHerNumberOdd); // is her number odd  false

