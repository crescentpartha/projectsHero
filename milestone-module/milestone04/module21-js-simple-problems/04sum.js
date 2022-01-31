
// Sum of all numbers in an array

const numbers = [45, 82, 23, 46, 92, 28, 78, 90, 52];
let sum = 0;
for (let i=0; i<numbers.length; i++){
    const element = numbers[i];
    sum += element;
    console.log(i, element, sum);
}
console.log(sum); // 536
console.log('\n');

function arrayTotal (numbers) {
    let sum = 0;
    for (let i=0; i<numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
        console.log(i, element, sum);
    }
    return sum;
}

const total = arrayTotal([23, 32, 45, 93, 30]);
console.log(total); // 223
console.log('\n');

const arraySum = arrayTotal(numbers);
console.log(arraySum); // 

