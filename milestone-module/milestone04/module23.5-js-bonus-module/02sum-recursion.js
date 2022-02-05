
// Understand recursion using sum of numbers

// let sum = 0;
// for (let i=5; i>=1; i--){
//     sum = sum + i;
// }
// console.log(sum); // 15


// Recursion 
function sum(i) {
    console.log(i);
    if (i == 1) {
        return 1;
    }
    // if you don't use condition, then RangeError is happend;
    // return i + sum(i--); // RangeError: Maximum call stack size exceeded | Remaining constant value = 5
    return i + sum(--i); // RangeError: Maximum call stack size exceeded | decreasing value 5 4 .. -10 -11 ...
}
console.log(sum(5)); // 15

// i + sum(--i);
// 5 + sum(4);
// 5 + 4 + sum(3);
// 5 + 4 + 3 + sum(2);
// 5 + 4 + 3 + 2 + sum(1);
// 5 + 4 + 3 + 2 + 1;
// 15

// function er vitor teke function ke call kora e recursion

// Condition for use of recursion 
    // value need to be changed
    // function need to be stoped anywhere


