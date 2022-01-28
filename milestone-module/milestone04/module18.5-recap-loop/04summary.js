
// Recap loop, run a loop for each element of an array

// While loop
var i = 0;
while (i < 7) {
    console.log(i);
    i++;
}
console.log('\n');

// For loop
for (var i=1; i<=7; i++){
    console.log(i);
}
console.log('\n');

// Loop in Array-1
var numbers = [45, 86, 23, 43, 87, 12, 98, 82];
numbers.push(55);
numbers.push(95);
console.log(numbers); // [ 45, 86, 23, 43, 87, 12, 98, 82, 55, 95 ]

numbers.shift();
numbers.pop();
console.log(numbers); // [ 86, 23, 43, 87, 12, 98, 82, 55 ]

numbers.unshift(23);
console.log(numbers); // [ 23, 86, 23, 43, 87, 12, 98, 82, 55 ]

// for (var i = 0; i < 8; i++){
//     var element = numbers[i];
//     console.log(element);
// }
// console.log('\n');

for (var i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// Loop in Array-2

var items = ['bottle', 'mobile', 'charger', 'watch', 'book', 'paper'];
for (var i = 0; i < items.length; i++){
    var item = items[i];
    console.log(item);
}
console.log(items); // [ 'bottle', 'mobile', 'charger', 'watch', 'book', 'paper' ]

