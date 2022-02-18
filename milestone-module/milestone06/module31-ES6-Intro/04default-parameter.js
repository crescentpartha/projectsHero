
// 31.4 Function default parameter for not provided values

// Function default parameter
function add(num1, num2 = 100) {
    console.log(num1, num2); // 15 undefined | 15 100 | 15 0
    // option 2
    // num2 = num2 || 0;

    // option 1
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(15);
// console.log(result); // NaN

console.log(add(15, 0)); // 15

// Function default parameter
function fullName (first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}
console.log(fullName('Adithi')); // Adithi Chowdhury
console.log(fullName('Adithi', 'Roy')); // Adithi Roy

console.log(fullName('Sudip')); // Sudip Chowdhury
console.log(fullName('Sudip', 'Kashu')); // Sudip Kashu


