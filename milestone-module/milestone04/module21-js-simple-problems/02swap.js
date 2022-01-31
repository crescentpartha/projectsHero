
// Swap variable, swap without temp, destructing 

var first = 5;
var second = 7;
console.log(first, second); // 5 7

// Swap - first approach
var temp = first;
first = second;
second = temp;
console.log(first, second); // 7 5

// Swap - second approach = Destructuring Assignment in Js
[first, second] = [second, first];
console.log(first, second); // 5 7

let a, b, rest;
[a, b] = [10, 20];
console.log(a, b); // 10 20
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // [ 30, 40, 50 ]
console.log(a, b, rest); // 10 20 [ 30, 40, 50 ]

({a, b} = {a:100, b:200});
console.log(a, b); // 100 200
({a, b, ...rest} = {a:100, b:200, c: 300, d:400});
console.log(rest); // { c: 300, d: 400 }
console.log(a, b, rest); // 100 200 { c: 300, d: 400 }

