
// Problem-01: Write a function called anaToVori and take a parameter called ana then convert it to vori and return vori as a number.

function anaToVori (ana) {
    if (ana >= 0) {
        const vori = ana/16;
        return vori;
    }
    else {
        console.log('Enter a positive number as a input');
        return false;
    }
    
}
let ana = 32;
const voriResult = anaToVori(ana);
console.log(ana, 'Ana =', voriResult, 'Vori'); // 32 Ana = 2 Vori


// Problem-02: Write a function called pandaCost and takes three parameters like singara, somosa, gilapi and calculate the cost of order then return cost as a number.
// Ratios (1 singara = 7 || 1 somosa = 10 || 1 gilapi = 15 taka)

function pandaCost (singara, somosa, gilapi) {
    if (singara >= 0 && somosa >= 0 && gilapi >= 0){
        const totalCost = singara*7 + somosa*10 + gilapi*15;
        return totalCost;
    }
    else {
        console.log('Enter three positive number as a input');
        return false;
    }
}
const orderCost = pandaCost(1,5,2);
console.log('Total Cost =', orderCost, 'taka'); // Total Cost = 87 taka


// Problem-03: Write a function called picnicBudget and take only one parameter which is the total number of people want to go picnic. Then calculate the total cost and return it as a number only. 
// Ratios (1-100 = 5000 || 101-200 = 4000 || 201 - infinity = 3000 taka)

function picnicBudget (people) {
    let cost = 0;
    if (people >= 0) {
        if (people >= 0 && people <=100){
            cost = people * 5000;
        }
        else if (people >= 101 && people <=200) {
            cost = people * 4000;
        }
        else {
            cost = people * 3000;
        }
        return cost;
    }
    else {
        console.log('Enter a positive number as a input');
        return false;
    }
}
const picnicCost = picnicBudget(5);
console.log('Picnic Budget =', picnicCost, 'taka'); // Picnic Budget = 25000 taka


// Problem-04: Write a function called oddFriend and return your first friend whos name length is odd in array.

var friends = ['Zakir Hossain', 'Biplob Roy', 'Mehjabin Rahman', 'Showmen Purkayastha', 'Ananya Ahmed', 'Rupali Kar', 'Masukul Alam', 'Crescent Deb Nath Partha'];

var numbers = [1, 23, 52, 24, 61, 73];

var names = [];

function oddFriend (friends) {
    if (typeof friends[0] === 'string' && friends.length != 0){
        // console.log(typeof friends[0]); // string
        for (const element of friends) {
            // console.log(element, '=', element.length);
            if (element.length%2 != 0){
                return element;
            }
        }
        console.log('There are no Friends whos name length is odd');
        return false;
    }
    else {
        // console.log(friends.length); // 6 | 0
        console.log('Enter valid input of friendList array');
        return false;
    }
    
}

let oddLength = oddFriend(friends);
console.log(oddLength); // Zakir Hossain
// oddLength = oddFriend(numbers);
// console.log(oddLength); // Enter valid input of friendList array && false
// oddLength = oddFriend(names);
// console.log(oddLength);  // Enter valid input of friendList array && false



