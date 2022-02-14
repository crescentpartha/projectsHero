
// 29.7 Unlimited parameters to a funciton using arguments

function sumOfNumbers (n1, n2) {
    console.log(arguments); // [Arguments] { '0': 23, '1': 13, '2': 50, '3': 100 } | arguments is an array like Objects
    console.log(arguments[3]); // undefined undefined 100
    // arguments.push(45); // TypeError: arguments.push is not a function

    for (const num of arguments) {
        console.log(num); // 23 13 50 100 
    }
    const result = n1 + n2;
    return result;
}
console.log(sumOfNumbers(23, 13)); // 36
console.log(sumOfNumbers(23, 13, 50)); // 36
console.log(sumOfNumbers(23, 13, 50, 100)); // 36

// We can solve it by passing array | using arguments

function addNumbers(num1, num2) {
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;
}
console.log(addNumbers(23, 13, 50, 100, 45, 76, 198, 901)); // 1406

// .....................................................................................................

function getFullName(firstName, lastName){
    const fullName = firstName + ' ' + lastName;
    return fullName;
}
console.log(getFullName('Hanif', 'Songket')); // Hanif Songket
console.log(getFullName('Crescent', 'Partha', 'Hanif', 'Songket')); // Crescent Partha

// We can solve it by passing array | using arguments

function getFullName2(firstName, lastName){
    let fullName = '';
    for (const part of arguments) {
        // for big string this system is not apropreate of better performance because string is immutable
        // fullName = fullName + ' ' + part;
        fullName = fullName + part + ' ';
    }
    return fullName;
}
console.log(getFullName2('Hanif', 'Songket')); // Hanif Songket
console.log(getFullName2('Crescent', 'Partha', 'Hanif', 'Songket')); // Crescent Partha Hanif Songket


/* 
arguments:
    1. We can use for loop
    2. We can access element index wise
    3. We can't use push function
    4. If we need all parameter of function by any special/exceptional reason, then we can get all parameter by using arguments.
    5. There have something called arguments in function.
 

    4. function er bitore jodi tumar sob parameter gule kunu exceptional karone ba kunu special karone lage, tahole arguments dia nite parbo.
    5. arguments name funciton er bitore ekta jinis ache, chaile index wise access korte parbo, for loop chalaite parbo, kintu push korte parbo naa. 
*/

