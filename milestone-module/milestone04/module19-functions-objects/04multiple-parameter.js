
// (Advanced) Multiple parameter add, multiplication, etc

// Addition two number
function addTwoNumbers(number1, number2){
    console.log(number1, number2);
    // console.log(number2);
    var total = number1 + number2;
    return total;
};
addTwoNumbers(10, 15);

var firstNumber = 35;
var secondNumber = 47;
addTwoNumbers(firstNumber, secondNumber); // 35 47
addTwoNumbers(secondNumber, firstNumber); // 47 35

var result = addTwoNumbers(secondNumber, firstNumber);
console.log('Result value: ', result); // Result value:  82
// console.log(result); // undefined --> if return total is commented;

// Multiplication two number
function multiplyTwoNumbers(num1, num2){
    var result = num1 * num2;
    return result;
}

var total = multiplyTwoNumbers(5, 100);
console.log('Total after multiplication', total); // Total after multiplication 500

// Subtraction two number
function subtractTwoNumbers(x, y){
    var subtract = x - y;
    return subtract;
};
var subResult = subtractTwoNumbers(324, 24);
console.log('Total after subtraction', subResult); // Total after subtraction 300

// Division two number
function divideTwoNumbers(a, b){
    var divide = a / b;
    return divide;
};
var divResult = divideTwoNumbers(324, 24);
console.log('Total after Division', divResult); // Total after Division 13.5

