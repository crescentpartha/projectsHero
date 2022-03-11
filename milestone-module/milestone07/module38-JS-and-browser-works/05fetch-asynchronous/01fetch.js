
// 38.5 Recognize fetch as an Asynchronous activity

/* 
    setTimeout & fetch work in asynchronous way
*/

console.log(111111);
console.log(222222);
// setTimeout(() => console.log('aaaaaa'));
// setTimeout(() => console.log('aaaaaa'), 5000);

// fetch works asynchronously | fetch --> asynchronous call
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log(333333);
console.log(444444);
for (let i = 0; i < 100; i++) {
    console.log(i);
}


