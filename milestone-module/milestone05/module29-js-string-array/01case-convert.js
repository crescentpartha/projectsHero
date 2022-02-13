
// 29.1 String comparison using toLowerCase & toUpperCase

const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const search = 'valo';

const userInput = 'blackPinK';
const savedUserName = 'blackPink';
console.log(userInput, savedUserName);
console.log(userInput.toLowerCase(), savedUserName.toLowerCase());
if (userInput.toLowerCase() == savedUserName.toLowerCase()) {
    console.log('user exists');
}

