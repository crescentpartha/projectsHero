
// Array index, get and set by index, indexOf

var books = ['Hablu', 'Bolod', 'Ami Topu', 'Battery', 'Paracitamol', 'gymnesium'];

console.log(books); // [ 'Hablu', 'Bolod', 'Ami Topu', 'Battery', 'Paracitamol', 'gymnesium' ]

var batteryIndex = books.indexOf('Battery');
console.log(batteryIndex); // 3

var numbers = [45, 98, 65, 72, 52, 63];
console.log(numbers); // [ 45, 98, 65, 72, 52, 63 ]
var index = numbers.indexOf(98);
console.log(index); // 1

index = numbers.indexOf(152);
console.log(index); // -1 (Not Found)

var secondIndex = books[2];
console.log(secondIndex); // Ami Topu

var secondIndex = books[119];
console.log(secondIndex); // undefined

console.log(numbers); // [ 45, 98, 65, 72, 52, 63 ]
numbers[1] = 95;
numbers[4] = 21;
console.log(numbers); // [ 45, 95, 65, 72, 21, 63 ]

