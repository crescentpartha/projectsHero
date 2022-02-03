
// 01. Write a function that returns true or false base on LeapYear check

function isLeapYear (year) {
    if (year%4 == 0){
        if(year%100 == 0){
            if(year%400 == 0){
                return true;
            }
            else {
                return false;
            }
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }
}
const year = 2023;
const bool = isLeapYear(year);
if(bool){
    console.log(year, 'is Leap Year');
}
else{
    console.log(year, 'is not Leap Year');
}

// 02. Write a function that returns true or false according to your age even or odd

function ageEvenOdd (age) {
    if(age%2 == 0){
        return true;
    }
    else return false;
}
const age = 24;
const result = ageEvenOdd(age);
if (result){
    console.log('Your age', age, 'is Even');
}
else console.log('Your age', age, 'is Odd');

// 03. Write a function that covert hour to minute and return minute

function hourTominute (hour){
    return hour * 60;
}
const hour = 2;
const minute = hourTominute(hour);
console.log(hour, 'hour is equal to', minute, 'minute');

