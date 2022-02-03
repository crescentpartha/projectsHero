
// 01. Write a code that returns a smallest number from the array

var smNumber = [23, 56, 67, 94, 34, 51, 90, 32, 52, 99, 11];
let num = smNumber[0];
for (let i=0; i<smNumber.length; i++){
    if (smNumber[i] < num) num = smNumber[i];
}
console.log(num); // 11

// 02. Write a code that returns smallest number from three number

const num1 = 5, num2 = 6, num3 = 7;
if (num1 < num2 && num1 < num3) console.log(num1, 'is smallest number from three given number');
else if (num2 < num3 && num2 < num1) console.log(num2, 'is smallest number from three given number');
else console.log(num3, 'is smallest number from three given number');

// 03. Write a function that calculate and return the avarage of the elements of array

var numbers = [23, 56, 67, 94, 34, 51, 90, 32, 52, 99, 11];

function calculateAvarage (num){
    const lengthOfNumbers = num.length;
    // console.log(lengthOfNumbers); // 11
    let sum = 0;
    for (const element of num){
        sum += element;
    }
    // console.log(sum); // 609
    return sum/lengthOfNumbers;
}

const result = calculateAvarage(numbers);
console.log(result); // 55.36363636363637

// 04. Write a function that takes height and width and calculate area of a ractengle.

function areaOfRactengle (h, w) {
    return h*w;
}
const area = areaOfRactengle(5, 10);
console.log(area); // 50

// 05. Write a function that returns second largest number from the array

var intList = [23, 56, 67, 94, 34, 51, 90, 32, 52, 99, 11];
function secondLargest (arr) {
    console.log(arr);
    // arr.sort(function(a,b){return b-a}); // Desending Order
    arr.sort(); // Assending Order
    console.log(arr);
    console.log(arr[arr.length-2], 'is the 2nd largest number of the array'); // 94 is the 2nd largest number of the array
    arr.reverse();
    console.log(arr);
    console.log(arr[1], 'is the 2nd largest number of the array'); // 94 is the 2nd largest number of the array
    return arr[1];
}
const second = secondLargest(intList);
console.log(second); // 94
