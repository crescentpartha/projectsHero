
// 29.3 How to split, slice, substr, substring, concat, join

// 01. split() method splits a string into an array of substrings | doesn't change the origial string.

// Systax: string.split(separator, limit) | First character is at index 0.

const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const myString = "An,array,in,a,string,separated,by,a,comma";
const path = "/user/home/crescentpartha";

let words = anthem.split();
console.log(words); // [ 'Amar Sonar Bangla Ami Tomai Valobashi' ]

words = anthem.split('');
console.log(words); // [ 'A', 'm', 'a', 'r', ' ', 'S', 'o', ........., 'i' ]

words = anthem.split(' ');
console.log(words); // [ 'Amar', 'Sonar', 'Bangla', 'Ami', 'Tomai', 'Valobashi' ]
console.log(anthem.split(' ', 3)); // [ 'Amar', 'Sonar', 'Bangla' ]
console.log(words[2]); // Bangla

const withoutA = anthem.split('a');
console.log(withoutA); // [ 'Am', 'r Son', 'r B', 'ngl', ' Ami Tom', 'i V', 'lob', 'shi' ]

let result = myString.split(',');
console.log(result); // [ 'An', 'array', 'in', 'a', 'string', 'separated', 'by', 'a', 'comma' ]

result = path.split('/');
console.log(result); // [ '', 'user', 'home', 'crescentpartha' ]



// 02. slice() can return a small part of string
// slice() method extracts a part of a string | returns the extracted part in a new string | doesn't change the original string

// Systax: string.slice(start, end) | First character is at index 0.

console.log(anthem); // Amar Sonar Bangla Ami Tomai Valobashi
const smallSlice = anthem.slice(5, 13);
console.log(smallSlice); // Sonar Ba
console.log(anthem.slice(6, 13)); // onar Ba

let str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(31)); // the lazy dog.
console.log(str.slice(0, 3)); // The
console.log(str.slice(4, 19)); // quick brown fox
console.log(str.slice(6, 8)); // ic
console.log(str.slice(6, 9)); // ick
console.log(str.slice(-4)); // dog.
console.log(str.slice(-6)); // y dog.
console.log(str.slice(-9, -5)); // lazy
console.log(str.slice(-9, -3)); // lazy d
console.log(str.slice()); // The quick brown fox jumps over the lazy dog.



// 03. substr() method extracts a part of a string 
// substr() method begins at a specified position and returns a specified number of characters | doesn't change the original string.

// Syntax: string.substr(start, length) | First character is at index 0.

console.log(anthem); // Amar Sonar Bangla Ami Tomai Valobashi
let anotherPart = anthem.substr(11, 7);
console.log(anotherPart); // Bangla
console.log(anthem.substr(11, 8)); // Bangla A
console.log(anthem.substr(11, 9)); // Bangla Am

str = 'substr';
console.log(str.substr(1, 2)); // ub
console.log(str.substr(1)); // ubstr
console.log(str.substr(-3, 2)); // st
console.log(str.substr(-3)); // str

/* 3 ways to get substring in javascript
        1. substring() method
        2. slice() method
        3. substr() method 
*/



// 04. substring() method extracts characters from start to end | does not change the original string.

// Syntax: string.substring(start, end) | First character is at index 0.

console.log(anthem); // Amar Sonar Bangla Ami Tomai Valobashi
anotherPart = anthem.substring(11, 15);
console.log(anotherPart); // Bang
console.log(anthem.substring(12, 15)); // ang



// 05. concat() method concatenates (joins) two or more arrays.

const first = 'Amader';
const second = 'City';
let fullString = first + second;
console.log(fullString); // AmaderCity
fullString = first.concat(second).concat('Abc').concat('Partha');
console.log(fullString); // AmaderCityAbcPartha
fullString = first.concat(second, 'Abc', 'Partha');
console.log(fullString); // AmaderCityAbcPartha

// Syntax: array1.concat(array2, array3, ..., arrayX)

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2,arr3);
console.log(children); // [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin' ]



// 06. join() method returns an array as a string | doesn't change the original array

// Syntax: array.join(separator)

const name = ['alim', 'badhon', 'cameron', 'david'];
console.log(name.join()); // alim,badhon,cameron,david
console.log(name.join('')); // alimbadhoncamerondavid
console.log(name.join('-')); // alim-badhon-cameron-david
console.log(name.join(' ')); // alim badhon cameron david
console.log(name.join(',')); // alim,badhon,cameron,david
console.log(name.join(', ')); // alim, badhon, cameron, david

