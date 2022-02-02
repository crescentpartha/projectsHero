
// Basic Javascript concept checklist and practice

// 1. Write 3 variables (number, string, boolean)

var number = 20;
var string = 'Hi, My name is Partha.';
var isItRanning = false;
console.log(number, string, isItRanning); // 20 Hi, My name is Partha. false
console.log('\n');


// 2. Write 2 variables using (let, const)

let roll = 23;
const name = 'Crescent Deb Nath Partha';
console.log(roll, name); // 23 Crescent Deb Nath Partha
roll = 1712020046;
// name = 'Crescent Partha'; // TypeError: Assignment to constant variable.
console.log(roll, name); // 1712020046 Crescent Deb Nath Partha
console.log('\n');


// 3. Simple Math Operations ( +, -, *, /, % )

function mathOperations (n1, n2) {
    const sum = n1 + n2;
    const sub = n1 - n2;
    const mul = n1 * n2;
    const div = n1 / n2;
    const remainder = n1 % n2;
    console.log(sum, sub, mul, div, remainder); // 50 40 225 9 0
}
mathOperations(45, 5);
console.log('\n');

// 4. Comparison ( >, <, ==, !=, >=, <=)

function comparisonOperation (n1, n2) {
    if (n1 > n2) {
        console.log(n1, 'is greater than', n2);
    }
    if (n1 < n2) {
        console.log(n1, 'is smaller than', n2);
    }
    if (n1 == n2) {
        console.log(n1, 'is equal to', n2);
    }
    if (n1 != n2) {
        console.log(n1, 'is not equal to', n2);
    }
    if (n1 >= n2) {
        console.log(n1, 'is greater than or equal to', n2);
    }
    if (n1 <= n2) {
        console.log(n1, 'is smaller than or equal to', n2);
    }
}
comparisonOperation(15, 10);
comparisonOperation(15, 30);
comparisonOperation(15, 'partha');
comparisonOperation(15, 15);
console.log('\n');

// 5. Two conditions. Case-1: Fulfill both conditions( && ). Case-2: Fulfill at least one condition ( || )

function condition(x, y){
    if(x == 'Crescent' && y == 'sust'){
        console.log('Crescent studied in sust');
    }
    else if (x == 23 || y == 'mit'){
        console.log(x, 'is the mit student');
    }
}
condition('Crescent', 'sust');
condition(23, 'sust');
condition('Crescent', 'mit');
console.log('\n');

// 6. if - else if - else

const vagetableRoll = 25;
const varger = 50;
function choiceFood (food) {
    if (food <= 49){
        console.log('I will eat vagetable-Roll');
    }
    else if(food == 50){
        console.log('Varger is a popular food');
    }
    else{
        console.log('Chomosa and shingara is the most popular food');
    }
}
choiceFood(vagetableRoll);
choiceFood(varger);
choiceFood(90);
console.log('\n');

// 7. While loop to display 7 to 19 all numbers. Only display odd numbers including 7 to 19

var n = 19;
var i = 7;
while (i<=n){
    console.log(i);
    if(i%2 !=0){
        console.log('Odd number =', i);
    }
    i++;
}
console.log('\n');

// 8. Declare an array. Number of elements. Update or change 4th position element. Add or remove elements. Check whether a specific value exists in the array.

var numbers = [5, 23, 153, 612, 64, 92, 120, 49];
console.log(numbers); // [ 5, 23, 153, 612, 64, 92, 120,  49 ]
numbers[3] = 26;
numbers.pop();
numbers.push(90);
console.log(numbers); // [ 5, 23, 153, 26, 64, 92, 120, 90 ]

if(numbers.indexOf(90) != -1){
    console.log('Exist');
}
else {
    console.log('Does not Exist');
}
console.log('\n');


// 9. Use any for loop to display every elements of an array

for (let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}
console.log('\n');
for (const element of numbers){
    console.log(element);
}
console.log('\n');

// 10. You have an array of numbers. Display only the numbers bigger than 80.

for (const element of numbers){
    if (element > 80){
        console.log(element);
    }
}
console.log('\n');

// 11. Write a function that takes three numbers and returns the multiplication of the three numbers

function multiplication (n1, n2, n3){
    const mul = n1 * n2 * n3;
    return mul;
}
const result = multiplication(5, 10, 15);
console.log(result, '\n'); // 750

// 12. Declare an object and change any property of that object

var lightVehical = {
    name: 'tata',
    color: 'white',
    engineNo: 24,
    silinder: 4,
    valve: 2 
};
console.log(lightVehical); // { name: 'tata', color: 'white', engineNo: 24, silinder: 4, valve: 2 }
lightVehical.color = 'skyblue';
lightVehical.name = 'Corola';
console.log(lightVehical); // { name: 'Corola', color: 'skyblue', engineNo: 24, silinder: 4, valve: 2 }

