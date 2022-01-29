
// (Advanced) while and for loop break and continue

// While loop - break statement
var i = 0; 
while (i < 15) {
    console.log(i);
    if (i == 5) {
        break;
    }
    i++;
}
console.log('\n');

// For loop - break statement
for (var i=0; i<20; i++) {
    console.log(i);
    if (i > 8) {
        break;
    }
}
console.log('\n');

// Numbers Array - break statement
var numbers = [54, 35, 21, 98, 23, 101, 45, 67];
for (var i=0; i<numbers.length; i++){
    var number = numbers[i];
    console.log(number);
    if (number > 90) {
        break;
    }
}
console.log('\n');

// Numbers Array - continue statement
for (var i=0; i<numbers.length; i++){
    var number = numbers[i];
    if (number > 90) {
        continue;
    }
    console.log(number);
}

