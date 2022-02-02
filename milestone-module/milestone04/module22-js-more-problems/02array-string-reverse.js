
// Explore string nature and reverse a string 

// Array
const myArray = [1, 3, 54, 6, 78, 5];
console.log(myArray); // [ 1, 3, 54, 6, 78, 5 ]
console.log(myArray.length); // 6
console.log(myArray[0]); // 1
console.log(myArray[2]); // 54
myArray.push(33);
console.log(myArray); // [ 1, 3, 54, 6, 78, 5, 33 ]
console.log(myArray.length); // 7

// String
const myString = 'Hello how are you';
console.log(myString); // Hello how are you
console.log(myString.length); // 17
console.log(''.length); // 0
console.log(' '.length); // 1
console.log('a '.length); // 2
console.log('a b'.length); // 3
console.log('ab'.length); // 2
console.log('st b'.length); // 4
console.log('I am'.length); // 4
console.log('I am.'.length); // 5
console.log('I am '.length); // 5

console.log(myString[0]); // H
console.log(myString[5]); // " "
console.log(myString[6]); // h

// String - Immutable (Unchanging over time or nable to be changed)
console.log(myString); // Hello how are you
myString[0] = 'W';
console.log(myString); // Hello how are you

// myString.push('?'); // TypeError: myString.push is not a function

for (const char of myString) {
    console.log(char); // H e l l o   h o w   a r e   y o u
}


// Array - Mutable
console.log(myArray); // [ 1, 3, 54, 6, 78, 5, 33 ]
myArray[0] = 999;
console.log(myArray); // [ 999, 3, 54, 6, 78, 5, 33 ]

myArray.push(1111);
console.log(myArray); // [ 999, 3, 54, 6, 78, 5, 33, 1111 ]

for (const element of myArray) {
    console.log(element); // 999 3 54 6 78 5 33 1111
}

// Reverse a string
const greetings = 'Hello, how are you?';

function reverseString (text) {
    let reverse = '';
    for (const letter of text) {
        console.log(letter);
        // reverse = reverse + letter;
        reverse = letter + reverse;
    }
    return reverse;
}

const reversed = reverseString(greetings);
console.log(greetings); // Hello, how are you?
console.log(reversed); // ?uoy era woh ,olleH
