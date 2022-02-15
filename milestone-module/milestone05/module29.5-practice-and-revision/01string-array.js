
// 08. In an array there are some english javascript related book names as a string. You have to run a loop to check javascript word is there or not. This javaScript word is case sensitive.

const javaScriptBookNames = [
    'A smarter way to learn javaScript',
    'Eloquent javaScript: A Mordern Introduction to Programming', 
    'JavaScript & JQuery: Interactive Front-End Web Development', 
    'JavaScript: The Good Parts', 
    'Learn javaScript VISUALLY', 
    'JavaScript: The Definitive Guide', 
    'Effecttive JavaScript: 68 Specific Ways to Harness the Power of JavaScript', 
    'JavaScript for Kids: A Playful Introduction ot Programming', 
    'Programming javaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries', 
    'High-Performance Browser Networking'
];

const output1 = [];
const output2 = [];
const output3 = [];
const output4 = [];

const searching1 = 'JavaScript';
const searching2 = 'javaScript';

for (const book of javaScriptBookNames) {
    if (book.indexOf(searching1) != -1){
        output1.push(book);
    }
    if (book.toUpperCase().indexOf(searching1.toUpperCase()) != -1) {
        output2.push(book);
    }
}
console.log(output1);

/* Output:
[
    'JavaScript & JQuery: Interactive Front-End Web Development',
    'JavaScript: The Good Parts',
    'JavaScript: The Definitive Guide',
    'Effecttive JavaScript: 68 Specific Ways to Harness the Power of JavaScript',        
    'JavaScript for Kids: A Playful Introduction ot Programming'
]
*/

console.log(output2);

/* Output:
[
  'A smarter way to learn javaScript',
  'Eloquent javaScript: A Mordern Introduction to Programming',
  'JavaScript & JQuery: Interactive Front-End Web Development',
  'JavaScript: The Good Parts',
  'Learn javaScript VISUALLY',
  'JavaScript: The Definitive Guide',
  'Effecttive JavaScript: 68 Specific Ways to Harness the Power of JavaScript',        
  'JavaScript for Kids: A Playful Introduction ot Programming',
  'Programming javaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries'
]
*/

for (const book of javaScriptBookNames) {
    if (book.includes(searching2)){
        output3.push(book);
    }
    if (book.toLowerCase().includes(searching2.toLowerCase())) {
        output4.push(book);
    }
}
console.log(output3);

/* Output:
[
  'A smarter way to learn javaScript',
  'Eloquent javaScript: A Mordern Introduction to Programming',
  'Learn javaScript VISUALLY',
  'Programming javaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries'
]
*/

console.log(output4);

/* Output:
[
  'A smarter way to learn javaScript',
  'Eloquent javaScript: A Mordern Introduction to Programming',
  'JavaScript & JQuery: Interactive Front-End Web Development',
  'JavaScript: The Good Parts',
  'Learn javaScript VISUALLY',
  'JavaScript: The Definitive Guide',
  'Effecttive JavaScript: 68 Specific Ways to Harness the Power of JavaScript',        
  'JavaScript for Kids: A Playful Introduction ot Programming',
  'Programming javaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries'
]
*/


// 09. there is an array number of integers collection. you have to sort this array according to assending order.

const numbers = [ 23, 54, 6346, 46, 65, 34, 74, 90, 923, 111, 325, 45, 64, 457, 345 ];

console.log(numbers.sort()); // [ 111, 23, 325, 34, 345, 45, 457, 46, 54, 6346, 64, 65, 74, 90, 923 ]
console.log(numbers.sort(function(a, b){return a-b})); // [23, 34, 45, 46, 54, 64, 65, 74, 90, 111, 325, 345, 457, 923, 6346 ]

const sortNumbers = numbers.sort(function(a, b){
    return b-a;
}); 
console.log(sortNumbers); // [ 6346, 923, 457, 345, 325, 111, 90, 74, 65, 64, 54, 46, 45, 34, 23 ]

