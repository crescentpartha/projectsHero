
// 38.4 setTimeout simple Asynchronous JS using

/* 
    # If I call a function/anything using setTimeout, it will be Asynchronous and We can set delay time as a mili-second.
    # 1000 milisecond = 1 second
    # Normal JS Code is Synchronous
*/

// Synchronous
function doSomething() {
    console.log('I am coding JavaScript');
}
console.log('First: Ami sober age');
console.log('Second: I am the second person');

/* Asynchronouns */

// doSomething();
// setTimeout(doSomething); // execute in the last
setTimeout(doSomething, 3000); // execute in the last
setTimeout(function(){
    console.log('I am using VS Code');
}, 5000);
setTimeout( () => {
    console.log('Exploring MDN Articles');
}, 4000);

// Synchronous
console.log('Third: Ami 3 number baccha');
console.log('Fourth: Ami ek hali purno korsi');

