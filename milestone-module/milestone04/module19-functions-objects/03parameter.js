
// (Advanced) Function parameter, function return;

// Function Declaration 

// function function_name (parameter1, parameter2, parameter2 ....) {
//     //Function body
//     //write a code
// };
// function_name();

function bringSingara (taka) {
    console.log('Singara er jonno dise', taka, 'taka.');
    console.log('Mama Singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
};
bringSingara(100);
console.log('\n');

var money = 250;
var singaraQuantity = bringSingara(money);
console.log('Total Singara = ', singaraQuantity);
console.log('\n');

console.log(bringSingara(150));
console.log('\n');

// Return statement close a function execution;

