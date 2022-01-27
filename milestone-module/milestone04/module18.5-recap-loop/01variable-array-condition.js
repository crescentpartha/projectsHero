
// Variable array and conditionals revision

// Variable
var bottleColor = 'yellow';
var waterQuantity = 1;
var isFull = false;

// Array
var items = ['bottle', 'mug', 'paper', 'pen'];
console.log(items.indexOf('logens')); // -1
items.push('envelope');
items.push('watch');
console.log(items); // [ 'bottle', 'mug', 'paper', 'pen', 'envelope', 'watch' ]
items.pop();
console.log(items); // [ 'bottle', 'mug', 'paper', 'pen', 'envelope' ]

// Conditionals
if(items.length >= 4){
    console.log('You have too many stuff on your desk.');
}
else if (items.length == 4){
    console.log('You only have four items.');
}
else {
    console.log('WOW! You have a clean desk.');
}


