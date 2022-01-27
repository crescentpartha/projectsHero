
// Handle multiple conditions, and or

var gotJob = true;
var moneySaved = 25000000;
var hasFlat = false;
var hasHouse = true;

// if (gotJob == true && moneySaved > 10000000) {
//     console.log('Cholo biya kore feli!!');
// }
// else {
//     console.log('Tor kopale biya nai!!');
// }

// if (gotJob == true && moneySaved > 10000000 && hasFlat == true) {
//     console.log('Cholo biya kore feli!!');
// }
// else {
//     console.log('Tor kopale biya nai!!');
// }

// if (gotJob == true || moneySaved > 10000000) {
//     console.log('Cholo biya kore feli!!');
// }
// else {
//     console.log('Tor kopale biya nai!!');
// }

if ((gotJob == true && moneySaved > 10000000) || (hasFlat || hasHouse)) {
    console.log('Cholo biya kore feli!!');
}
else {
    console.log('Tor kopale biya nai!!');
}


