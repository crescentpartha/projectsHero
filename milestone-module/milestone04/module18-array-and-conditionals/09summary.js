
// Module summary and two more comparisons

// Variable Declarations and value assignment
var tableLength = 12;

// Array Declarations
var tourDestinations = ['coxsbazar', 'nepal', 'vutan', 'paris'];
console.log(tourDestinations); // [ 'coxsbazar', 'nepal', 'vutan', 'paris' ]
// Index: 0, 1, 2, 3, 4, 5

tourDestinations.indexOf('vutan');
console.log(tourDestinations.indexOf('vutan')); // 2

var fourthDestination = tourDestinations[3];
console.log(fourthDestination); // paris
tourDestinations[1] = 'sreelanka';
console.log(tourDestinations); // [ 'coxsbazar', 'sreelanka', 'vutan', 'paris' ]

tourDestinations.push('London');
console.log(tourDestinations); // [ 'coxsbazar', 'sreelanka', 'vutan', 'paris', 'London' ]
tourDestinations.pop();
console.log(tourDestinations); // [ 'coxsbazar', 'sreelanka', 'vutan', 'paris' ]

if (tourDestinations[1] == 'nepal') {
    console.log('Phara ahare ahare');
}
else if (tourDestinations[1] == 'china') {
    console.log('china tor kache jamuna');
}
else if (tourDestinations.length == 4) {
    console.log('Aro taka ase aro besi ghurmu');
}
else {
    console.log('Kothao jamuna basai thakmu ar mosa marmu');
}

var eggPrice = 32;
var myBudget = 32;
if (eggPrice <= myBudget) {
    console.log('ami dim khamu');
}
else if (eggPrice >= myBudget) {
    console.log('Lebu diye vat khabo');
}

// JavaScript Comparison Operators
