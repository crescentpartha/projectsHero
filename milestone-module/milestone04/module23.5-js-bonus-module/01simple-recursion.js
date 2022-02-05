
// Understand for loop in a forward and reverse way

// for (let i=1; i<6; i++) {
//     console.log(i);
// }
// console.log('\n');

// Recursion is a programming technique using function or algorithm that calls itself one or more times until a specified condition is met at which time the rest of each repetition is processed from the last one called to the first.
// Recursion --> It's do similer work like as loop
function consoleNumber(i) {
    if (i>5) {
        return;
    }
    console.log(i);
    // consoleNumber(i); // Constant i | Infinity Loop | Ctrl + C = stop
    // consoleNumber(i++); // i don't increase
    // consoleNumber(i+1); // i increasing 
    consoleNumber(++i); // i increasing 
}
consoleNumber(1);




