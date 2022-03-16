
// 42.1 Six JavaScript Fundamentals that you need to know

// 1. How to declare a variable using let and const

const fatherName = 'Jhon Wicks';
let season = 'rainy';
season = 'winter';

// 2. Conditions
// Six Basic Conditions using: >, <, ===, !==, <=, >= 
// Multiple Conditions using: && and ||
// if, else if, else

if (fatherName === 'jhone wicks' || season === 'rainy') {

}
else if (fatherName === 'Jhon Wicks' && season !== 'rainy') {

}
else {

}

// 3. Array Declare
// index, length, push, pop, indexOf, includes

const numbers = [ 89, 35, 98, 12 ];
numbers[0] = 56;

// 4. Loop: (for | while | forEach | for of | for in)

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// 5. Simple function - (return | parameters)

function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(35, 78);
console.log(output);

// 6. Object

const student = {
    name: 'Sakib khan', 
    age: 32, 
    movies: ['king khan', 'Dhakar Mastan']
};
const myVariable = 'age';

// 3 ways to access property by name
console.log(student.age); // direct by property
console.log(student['age']); // access by property name string
console.log(student[myVariable]); // access via property name in a variable


