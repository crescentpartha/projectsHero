
// 38.6 setInterval and clearInterval with x++ and ++x 

/* 
    # setInterval works like infinity loop | We need to stop setInterval
    # setInterval return something
    # we use return value to clearInterval
    # to stop setInteral, we use clearInterval

    # JavaScript is Synchronous/Asynchronous | Blocking/Non-Blocking?
    --> JavaScript is a single-threaded, non-blocking, asynchronous, concurrent programming language with lots of flexibility.
    Synchronous:
        console.log, normal function
    Asynchronous: 
        setTimeout, SetInterval, fetch, async await
        # async await --> looks Synchronous but works Asynchronously
*/

console.log('first');

// setInterval(() => {
//     console.log('tik tik tik tik'); // Ctrl + C --> Stop
// }, 1000);

let seconds = 0; 
const timeId = setInterval(() => {
    // seconds++; 
    console.log(++seconds);
    if (seconds > 15) {
        clearInterval(timeId);
    }
}, 1000);

console.log('second');

