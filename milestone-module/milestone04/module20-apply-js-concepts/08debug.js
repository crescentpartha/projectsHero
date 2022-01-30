
// Module Summary and Simple JavaScript debug

let factorial = 1; 
function getFactorial (number) {
    // console.log(number);
    for (let i = 1; i<=number; i++){
        factorial  = factorial * i;
        // console.log(i, factorial);
    }
    return factorial;
}

const getMyFactorial = getFactorial(8);
console.log(getFactorial); // [Function: getFactorial]
console.log(getMyFactorial); // 40320


// Two Types Debug:
//     01. Debug
//     02. console.log();

