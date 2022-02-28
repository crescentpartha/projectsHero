
// 35.8 (advanced) Callback function and pass different functions

/* Callback Function:
    ==> A callback function is a function passed into another function as an argument
*/

function welcomeMessage(name) {
    console.log(name); // undefined
}
const name = 'Tom Hanks';
welcomeMessage(name); // Tom Hanks
const names = ['Tom Hanks', 'Tom Brady', 'Tom Cruise'];
welcomeMessage(names); // [ 'Tom Hanks', 'Tom Brady', 'Tom Cruise' ]
const myObject = { name: 'Tom Chinku', age: 11 };
welcomeMessage(myObject); // { name: 'Tom Chinku', age: 11 }


function welcomeMessage2(name, handler) {
    handler(name);
}
function greetMorning(name) {
    console.log('Good Morning', name);
}
function greetAfternoon(name) {
    console.log('Good Afternoon', name);
}
function greetEvening(name) {
    console.log('Good Evening', name);
}
welcomeMessage2('Tom Hanks', greetMorning); // Good Morning Tom Hanks
welcomeMessage2('Tom Cruise', greetAfternoon); // Good Afternoon Tom Cruise
welcomeMessage2('Tom Brady', greetEvening); // Good Evening Tom Brady


function greeting(name) {
    console.log('Hello ' + name);
}
function processUserInput(callback) {
    let name = 'Hero';
    callback(name);
}
processUserInput(greeting); // Hello Hero


/* 
    function handleClick () {
        console.log('button is clicked');
    }
    document.getElementById('my-btn').addEventListener('click', handleClick);

    document.getElementById('btn').addEventListener('click', function(){
        console.log('button is clicked');
    })
*/
