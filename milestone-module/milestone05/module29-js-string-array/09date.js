
// 29.9 A simple introduction to Date object in JavaScript

const myFavDate = new Date('1971-12-16');
console.log(myFavDate); // 1971-12-16T00:00:00.000Z

// What is UTC Time? (UTC = Coordinated Universal Time) | Central Time

const anotherDate = new Date(1971, 12, 16, 11, 50, 40, 80); // (Year, Month, Date, Hour, Minute, Second, m-second)
console.log(anotherDate); // 1972-01-16T05:50:40.080Z

if (myFavDate < anotherDate) {
    console.log('favorite is earlier'); // favorite is earlier
}

if (myFavDate.getTime() < anotherDate.getTime()) {
    console.log('favorite is earlier'); // favorite is earlier
}

console.log(new Date()); // 2022-02-14T15:23:13.262Z

const d1 = new Date();
const d2 = new Date(d1);
console.log(d1, d2); // 2022-02-14T15:24:19.550Z 2022-02-14T15:24:19.550Z

// The ==, !=, ===, and !== operators require to use date.getTime()
console.log(d1 == d2); // false (wrong!)
console.log(d1 === d2); // false (wrong!)
console.log(d1 != d2); // true  (wrong!)
console.log(d1 !== d2); // true  (wrong!)
console.log(d1.getTime() == d2.getTime()); // true  (correct!) | 

/* In Console
    new Date('1971-12-16');
    Thu Dec 16 1971 06:00:00 GMT+0600 (Bangladesh Standard Time)

    https://momentjs.com/ --> Formate Dates | Relative Time | Calendar Time | Multiple Locale Support

*/
