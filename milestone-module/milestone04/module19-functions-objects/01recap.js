
// Module Introduction and concept Recap

// 01. Variable
var favoriteBook = '4 hour work week';

// 02. Array
var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog'];
var shoeDogIndex = bookList.indexOf('shoe dog');
console.log(shoeDogIndex); // 3
console.log(bookList); // [ 'positioning', 'hooked', 'start with why', 'shoe dog' ]

bookList[1] = 'Story Brand';
console.log(bookList); // [ 'positioning', 'Story Brand', 'start with why', 'shoe dog' ]
bookList.push('Small Giants');
console.log(bookList); // [ 'positioning', 'Story Brand',  'start with why', 'shoe dog', 'Small Giants' ]
bookList.pop();
console.log(bookList); // [ 'positioning', 'Story Brand',  'start with why', 'shoe dog' ]

// 03. Conditionals
if (bookList[1] == 'hooked') {
    console.log('I am hooked');
}
else {
    console.log('I am not hooked');
}

// 04. While loop
var i = 0; // loop variable
while (i < 15) {
    console.log(i);
    console.log('While looping looping looping');
    i++;
}

// 05. For loop

for (var i = 0; i < 15; i++) {
    console.log(i);
    console.log(' For looping looping looping');
}
