
// Find the largest element of an array

function largestElement(numbers) {
    let largest = numbers[0];
    for (let i=0; i<numbers.length; i++){
        let element = numbers[i];
        console.log(i, element, largest);
        if (largest < numbers[i]){
            largest = numbers[i];
        }
    }
    return largest;
}

const ages = [23, 32, 12, 15, 42, 24, 25];
const oldest = largestElement(ages);
console.log(oldest); // 42
console.log('\n');

const oldest2 = largestElement([-2, -25, -14, -5, -23]);
console.log(oldest2); // -2
console.log('\n');


// Task: Find the lowest element of an array

function lowestElement (numbers) {
    let lowest = numbers[0];
    for (let i=0; i<numbers.length; i++){
        let element = numbers[i];
        console.log(i, element, lowest);
        if(lowest > element){
            lowest = element;
        }
    }
    return lowest;
}

const lowest = lowestElement(ages);
console.log(lowest); // 12
console.log('\n');

const lowest2 = lowestElement([-2, -25, -14, -5, -23]);
console.log(lowest2); // -25


