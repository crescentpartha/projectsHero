
// Multi stage condition and nested conditions

var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 100;
var packedWell = false;

// Multi Stage Condition

// if (danishPrice < myBudget) {
//     console.log('Danish kyeye Danish jabo');
// }
// else if (butterBreadPrice < myBudget) {
//     console.log('Butter bon diye cha khamu');
// }
// else if (toastBiscuitPrice < myBudget) {
//     console.log('Toast Biscuit diye cha khamu');
// }
// else {
//     console.log('Batasha diye cha khamu');
// }

// Nested Conditions

if (danishPrice < myBudget) {
    if (packedWell == true) {
        console.log('Danish khabo');
    }
    else {
        console.log('Danish khabo naa! Karon ami khawar age machi kheye ordek kore felche');
    }
}
