
// Module Introduction, Math and Random number

// Math.abs(-5); --> |-5| = 5;

const myNumber = -5;
const output = Math.abs(myNumber);
console.log(output); // 5

// Math.ceil(num1);

const num1 = 6.0398; // 6.0001 | 6.9999 | 6.5555
const num1Result = Math.ceil(num1);
console.log(num1Result); // 7

// Math.floor(num2);

const num2 = 21.9999; // 21.0001 | 21.5555
const num2Result = Math.floor(num2);
console.log(num2Result); // 21

// Math.round(num1);

const num3 = 21.5000;
const round1 = Math.round(num1);
const round2 = Math.round(num2);
const round3 = Math.round(num3);
console.log(round1, round2, round3); // 6 22 22

// Math.random(); --> Return a pseudorandom number between 0 to 1.

console.log(Math.random()); // 0.44919161614295855

const random1 = Math.random();
console.log(random1); // 0.19742170489292943
console.log('\n');

const random2 = Math.random() * 10;
const rounded2 = Math.floor(random2);
console.log(random2); // 9.704384855500564
console.log(rounded2); // 9

console.log('\n');
for (let i = 0; i <= 20; i++){
    const random3 = Math.random() * 6; // Chokka guti;
    // const rounded3 = Math.round(random3); // 0-6
    // const rounded3 = Math.floor(random3); // 0-5
    const rounded3 = Math.ceil(random3); // 1-6
    console.log(rounded3); // 6
}

