
// Find max of two values, find max of three values

const business = 450;
const minister = 550;
const army = 600;

// Find max of two values
if (business > minister) {
    console.log('Business person er pola is bigger');
}
else {
    console.log('Minister er pola is bigger');
}

// Find max of three values
if (business > minister && business > army) {
    console.log('Business is bigger than minister and army');
}
else if (minister > business && minister > army) {
    console.log('Minister is bigger than business and army');
}
else {
    console.log('Army is bigger than business and minister');
}

// Find Max number using Math Library
var max = Math.max(business, minister, army);
console.log('Largest is', max);

// Find Max number using function
function findLargestTwo(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}
var two = findLargestTwo(1650, 1230);
console.log('Largest between two number is =', two); // Largest between two number is = 1650

// Task 1: Create a function that takes three numbers as input parameter and returns you the largest number of the three.
function findLargestThree(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) return second;
    else return third;
}
var three = findLargestThree(23432, 3423, 23434);
console.log('Largest among three number is =', three); // Largest among three number is = 23434

// Task 2: Write a function to find the smallest of three numbers.
function findSmallestThree(first, second, third) {
    if (first < second && first < third) {
        return first;
    }
    else if (second < first && second < third) return second;
    else return third;
}
var three = findSmallestThree(23432, 3423, 23434);
console.log('Smallest among three number is =', three); // Smallest among three number is = 3423

