

// Q2: Which of the following is not considered as an error in JavaScript?
//     A. Syntax error
//     B. Missing of semicolons
//     C. Division by zero
//     D. All of the mentioned
//     E. Missing of Bracket
// Answer: Option C
// Explanation:
// Division by zero is not an error in JavaScript: it simply returns infinity or negative infinity. There is one exception, however: zero divided by zero does not have a welldefined value, and the result of this operation is the special not-a-number value, printed as NaN.

// Q4: What will be the output of the following JavaScript code?
function compare1(a, b) {
    if (a == b) {
        return true;
    } else {
        return false;
    }
}
const result1 = compare1(15, "15");
console.log(result1); // true
  
// Q5: What will be the output of the following JavaScript code? (Hey , Read Carefully)
function compare2(a, b) {
    if (a.toString() === b) {
        return true;
    } else {
        return false;
    }
}
const result2 = compare2(25, 25);
console.log(result2); // false
  
// Q6: What will be the output of the following JavaScript code? (Hint: Implicit type conversion)
console.log("123" + 123); // 123123

// Q7: What will be the output of the following JavaScript code?
let a= "hi"
let b= "there"
console.log(a+b); // hithere
  
// Q9: What will be the output of the following code ?( Don’t be overconfident , see the code carefully)
const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
    if (i == 5) {
    continue;
    }
    console.log(array[i]); // 2 3 4 5 7
}
// console.log(array.length); // 7
  

// Q11: What is the purpose of a return statement in a function?
// Answer: Stops executing the function and returns the value 


