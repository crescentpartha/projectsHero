
// Handle unexpected function input parameter error

// Add Function 
function add(num1, num2) {
    console.log('parameter', num1, num2);
    const sum = num1 + num2;
    return sum;
}

const firstTotal = add(63, 7);
console.log(firstTotal); // 70
const secondTotal = add(54, 981);
console.log(secondTotal); // 1035
let thirdTotal = add(12 + 8);
console.log(thirdTotal); // NaN  // 20 + undefined = NaN
thirdTotal = add(12 + 8, 1);
console.log(thirdTotal); // 21


// Multiply Function 
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

const firstResult = multiply(12, 12);
console.log(firstResult); // 144

