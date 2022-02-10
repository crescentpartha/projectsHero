
// 7 types of click handler

// SystemNumber-01 | onclick function

// SystemNumber-02 | custom function name
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// SystemNumber-03 | custom function name with id
// handle blue button click by setting function name
const blueButton = document.getElementById('make-blue-button');
// console.log(blueButton);
// just set the name of the function --> makeBlue;
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// SystemNumber-04 | Anonymous Function with id
// handle event using anonymous function
const greenButton = document.getElementById('make-green-button');
// console.log(greenButton);
// Anonymous Function
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}
// Anonymous Fuction | function name is optional --> makeGreen
// greenButton.onclick = function makeGreen() {
//     document.body.style.backgroundColor = 'green';
// }

// SystemNumber-05 | addEventListener
// handle by using addEventListener
const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

// SystemNumber-06 | addEventListener
const hotPinkButton = document.getElementById('make-hotpink');
// console.log(hotPinkButton);
// Write function name --> makePink | Anonymous Function
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

// SystemNumber-07 | addEventListener | Direct Shortcut
document.getElementById('make-lightblue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
});
