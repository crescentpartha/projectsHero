
// Explore Factorial Recursion using a for loop concept

// 4! = 4*3*2*1
// let factorial = 1; 
// for (let i = 4; i>=1; i--) {
//     factorial = factorial * i;
// }
// console.log(factorial); // 24

function factorial(i) {
    console.log(i); 
    if (i == 1) {
        return 1;
    }
    return i * factorial(--i); // 24
    // return factorial(--i) * i; // 6
}
console.log(factorial(4)); 

// i * factorial(--i);
// 4 * factorial(3)
// 4 * 3 * factorial(2)
// 4 * 3 * 2 * factorial(1)
// 4 * 3 * 2 * 1
// 24


// factorial(--i) * i;
// factorial(3) * 4;
// factorial(2) * 3 * 4;
// factorial(1) * 2 * 3 * 4;
// 1 * 2 * 3 * 4;
// 6 --> 4 don't multiply | why?

