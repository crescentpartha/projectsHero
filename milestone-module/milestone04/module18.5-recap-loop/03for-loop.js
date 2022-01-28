
// For loop, How for loop works, while vs for loop

// for (initialization, condition, increment/decrement) {
//     Statements;
// }

// Compare to while loop

// var roastGiven = 0;
// while (roastGiven <= 5) {
//     console.log(roastGiven + ". Roast den, Please!!");
//     roastGiven++;
// }

// for (var roastGiven = 0; roastGiven <= 5; roastGiven++){
//     console.log(roastGiven + '. Roast den, Please!!');
// }

// Always try to keep short name as a looping variable;
for (var i = 0; i <= 5; i++){
    console.log(i + '. Roast den, Please!!');
}
console.log('\n');
// Odd Number
for (var i = 1; i <= 20; i += 2){
    console.log(i);
}
console.log('\n');
// Even Number
for (var i = 0; i <= 20; i += 2){
    console.log(i);
}

