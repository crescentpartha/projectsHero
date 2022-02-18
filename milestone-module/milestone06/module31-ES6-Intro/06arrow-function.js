
// 31.6 Arrow function, multiple parameter, function body 

// function declaration
function add(num1, num2) {
    /* const sum = num1 + num2;
    return sum; */
    return num1 + num2;
}

// function expression 
const add2 = function add2(num1, num2) {
    return num1 + num2;
}

// function expression (Anonymous)
const add3 = function (num1, num2) {
    return num1 + num2;
}

// function expression (arrow function)
const add4 = (num1, num2) => num1 + num2;


const sum1 = add(15, 17);
const sum2 = add2(15, 17);
const sum3 = add3(15, 17);
const sum4 = add4(15, 17);
console.log(sum1, sum2, sum3, sum4); // 32 32 32 32


/* document.getElementById('my-btn').onclick = function handleEvent(){

} */


/* Extra Learning:

    01. Non-anonymous function
    02. Anonymous function
    03. Arrow function | ES5 vs ES6 Expression 
    04. Callback function 


    // 01. Non-anonymous, you name it
    function hello() {
        console.log('Hello World');
    }
    hello(); // Call as usual

..............................................................    

    // 02. Anonymous function
    var hello = function() {
        console.log('Hello World');
    }
    hello(); // Call as usual

..............................................................

    // 03. Arrow function | ES5 vs ES6 function expression
    
    // (parameter1, parameter2, parameterN) => expression

    // ES5
    var multiplyES5 = function(x, y) {
        return x * y;
    };

    // ES6
    const multiplyES6 = (x, y) => { return x * y };

..............................................................

    // 04. Callback function - A callback function is a function passed into another function as an argument.

    function greeting(name) {
        alert('Hello ' + name);
    }
    function processUserInput(callback) {
        var name = prompt('Please enter your name.');
        callback(name);
    }
    processUserInput(greeting);

*/