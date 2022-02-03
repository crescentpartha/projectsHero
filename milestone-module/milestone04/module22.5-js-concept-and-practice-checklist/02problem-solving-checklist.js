
// Simple Problem Solving Checklist and Practice

// 1. conversation - feetToInch

function feetToInch (feet) {
    const inch = feet * 12;
    return inch;
}
const feet = 5;
const feetToInchResult = feetToInch(feet);
console.log(feet, 'Feet is equal to', feetToInchResult, 'Inch'); // 5 Feet is equal to 60 Inch

// 2. conversion - centimeterToMeter

function centimeterToMeter (centimeter) {
    const meter = centimeter * 0.01;
    return meter;
}
const centimeter = 1000;
const centimeterToMeterResult = centimeterToMeter(centimeter);
console.log(centimeter, 'Centimeter is equal to', centimeterToMeterResult, 'Meter'); // 1000 Centimeter is equal to 10 Meter

// 3. Write a function which calculation total pageRequirements of total number of 3 books.
// calculation - pageRequirements

// book1 has 100 pages
// book2 has 200 pages
// book3 has 300 pages

function pageRequirements (book1, book2, book3) {
    const totalPages = book1 * 100 + book2 * 200 + book3 * 300;
    return totalPages;
}
const book1 = 2, book2 = 5, book3 = 10;
const pageRequirementNumber = pageRequirements(book1, book2, book3);
console.log('Total page Requirements for Books =', pageRequirementNumber); // Total page Requirements for Books = 4200

// 4. Write a array for your friend list and print the name of your friend which name is longer than your all friend in this array. ArrayName is friends and functionName is bestFriend.
// friends - bestFriend

var friends = ['fakibazKonik', 'ShowmenPurkayesta', 'NayeemMia', 'NazmulAhmed', 'CrescentPartha', 'MehjabinRahman', 'AnanyaAhmed', 'ProvakorDas', 'B.M.RuhulAminAnik', 'CrescentDebNathPartha'];

function bestFriend (friends) {
    let longName = '';

    // Using for loop
    // for (let i=0; i<friends.length; i++){
    //     if (friends[i].length > longName.length){
    //         longName = friends[i];
    //         // console.log(longName);
    //     }
    //     // console.log(element);
    // }
    // return longName;

    // Using for of loop
    for (const element of friends){
        if (element.length > longName.length){
            longName = element;
            // console.log(longName);
        }
        // console.log(element);
    }
    return longName;
}
const longFriendName = bestFriend(friends);
console.log(longFriendName);

// 5. Will stop the loop if the array has any negative number and returns all the positive number before the negative number - onlyPositive

var numbers = [23, 53, 62, 67, 92, 34, 90, 55, 45, 15, 78, 100, -1, 56, 79, 80]

function onlyPositive (numbers) {
    let onlyPositiveNumber = [];

    // Using for loop
    for (let i=0; i<numbers.length; i++){
        // console.log(numbers[i]);
        if (numbers[i] >= 0){
            onlyPositiveNumber.push(numbers[i]);
            // console.log(numbers[i]);
        }
        else{
            // console.log(numbers[i]);
            break;
        }
    }
    return onlyPositiveNumber;

    // Using for of Loop
    // for (let element of numbers){
    //     // console.log(element);
    //     if (element >= 0){
    //         onlyPositiveNumber.push(element);
    //         // console.log(element);
    //     }
    //     else{
    //         // console.log(element);
    //         break;
    //     }
    // }
    // return onlyPositiveNumber;
}

const positiveNumberArray = onlyPositive(numbers);
console.log(positiveNumberArray);
