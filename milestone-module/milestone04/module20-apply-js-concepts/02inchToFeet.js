
// Unit Convert inch to feet, miles to kilometer

// Inch to Feet
function inchToFeet(inches) {
    var feet = inches/12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('myInches in feet', feet); // myInches in feet 11

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('dadiInches in feet', feet); // dadiInches in feet 12

var naniInches = 156;
var feet = inchToFeet(naniInches);
console.log('naniInches in feet', feet); // naniInches in feet 13  

// Miles to Kilometer
function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}
var marathon = mileToKilometer(26.2);
console.log('Marathon in km: ', marathon); // Marathon in km:  42.164708

