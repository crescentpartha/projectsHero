
// Check whether a year is a Leap Year or not

function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = 2087;
const isMyYearLeapYear = isLeapYear(myYear);
console.log( myYear, 'Is my year leap year', isMyYearLeapYear); // 2087 Is my year leap year false

const yourYear = 2100;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log(yourYear, 'Is your year leap year', isYourYearLeapYear); // 2100 Is your year leap year true
// But 2100 year is not a leap year. Modify your code;


// LeapYear check function 
function isLeap(year) {
    if(year % 4 == 0) {
        if (year % 100 == 0) {
            if(year % 400 == 0) {
                return ("Leap year.");
            }
            else {
                return ("Not leap year.");
            }
        } 
        else {
            return ('Leap year');
        }  
    }
    else {
        return ('Not leap year.');
    }
}

const year = 2100;
var leapYear = isLeap(year);
console.log(year, 'year is', leapYear); // 2100 year is Not leap year.

// Getting User Input 
// var name = window.prompt("What is your Name?");
// document.write("Hey " + name + ", How are you today."); // ReferenceError: window is not defined
