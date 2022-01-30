
// Javascript concepts and apply revision with four challenges

// 01. Celcius to Fahrenheit convertion

function celciusToFahrenheit (celsius) {
    var fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}
var celsius = 39;
var fahrenheitResult = celciusToFahrenheit(celsius);
console.log(fahrenheitResult); // 102.2

// 02. Fahrenheit to Celcius convertion

function fahrenheitToCelcius (fahrenheit) {
    var celsius = (fahrenheit - 32) * (5/9);
    return celsius;
}
var fahrenheit = 102.2;
var celsiusResult = fahrenheitToCelcius(fahrenheit);
console.log(celsiusResult); // 39

// 03. Grade Calculation

function gradeCalculation (grade) {
    if (grade >= 80 && grade <=100){
        var letter = 'A+';
        return letter;
    }
    else if (grade >= 70 && grade <=79){
        return 'A';
    }
    
    else if (grade >= 60 && grade <=69){
        return 'A-';
    }
    else if (grade >= 50 && grade <=59){
        return 'B';
    }
    else if (grade >= 40 && grade <=49){
        return 'C';
    }
    else if (grade >= 33 && grade <=39){
        return 'D';
    }
    else if (grade >= 0 && grade <=32){
        return 'F';
    }
    else{
        return 'Invalid';
    }
}
var grade = 95;
var letterMark = gradeCalculation(grade);
console.log(letterMark); // A+

// Simple Interest Calculation 

// Simple Interest = Principal x Interest Rate x Time Period = 500000 x 0.09 x 5

function simpleInterestCalculation (principal, interestRate, timePeriod) {
    let interest = principal * interestRate * timePeriod;
    return interest;
}
let principal = 500000;
const interestRate = 0.09, timePeriod = 5;
var simpleInterest = simpleInterestCalculation(principal, interestRate, timePeriod);
console.log(simpleInterest); // 225000

