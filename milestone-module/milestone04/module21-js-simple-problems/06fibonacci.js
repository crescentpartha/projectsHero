
// Create a Fibonacci Series using a for loop

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
/* 
    3rd = 2nd + 1st
    4th = 3rd + 2nd
    5th = 4th + 3rd
    16th = 15th + 14th
    nth = (n-1)th + (n-2)th
    ith = (i-1)th + (i-2)th
*/

const fibo = [0, 1];
for(let i = 2; i<=10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo); // [ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34, 55 ]

function fibonacciSeries (num) {
    console.log(typeof num); // number, string, object

    // const fibo = [0, 1];
    // for (let i = 2; i<=num; i++){
    //     fibo[i] = fibo[i-1] + fibo[i-2];
    // }
    // return fibo;
    
    if (typeof num != 'number') {
        return 'Please give a number';
    }
    else if (num < 2) {
        return 'Please enter a positive number greater than 2';
    }
    else {
        const fibo = [0, 1];
        for (let i = 2; i<=num; i++){
            fibo[i] = fibo[i-1] + fibo[i-2];
        }
        return fibo;
    }
}
// We can't update the value of a variable declared using const. Declared using let.
let fiboSeries = fibonacciSeries(15);
console.log(fiboSeries); // [ 0,   1,   1,   2,  3,  5, 8,  13,  21,  34, 55, 89, 144, 233, 377, 610 ]

// Wrong Inputs - We need to through error - But we use conditionals
fiboSeries = fibonacciSeries(-15);
console.log(fiboSeries); // [ 0, 1 ] | number | Please enter a positive number greater than 2

fiboSeries = fibonacciSeries([1]);
console.log(fiboSeries); // [ 0, 1 ] | object | Please give a number

fiboSeries = fibonacciSeries('partha');
console.log(fiboSeries); // [ 0, 1 ] | string | Please give a number


// Q15: What code you have to write to know the number of “a” in a string

var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(letter == 'a'){
    count++;
  }
}
console.log(count) // 4

// Q11: What would be the output of the code below?

function add(a, b){
    console.log(a, b, a+b); // adameve undefined adameveundefined
    return a + b;
}
console.log(add("adam" + "eve")); // adameveundefined

