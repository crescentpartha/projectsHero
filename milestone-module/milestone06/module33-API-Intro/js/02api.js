
// 33.3 JSON placeholder, GET data, display data on UI

// JSON placeholder

// fetch('https://jsonplaceholder.typicode.com/todos/1') // GET data
// .then(response => response.json()) // convert to json()
// .then(json => console.log(json)) // display data on UI

/* display data:
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    }
Or
    {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
*/

/* // 3rd line replaced by 
.then(json => console.log(json.userId))
.then(json => console.log(json.title))
.then(json => console.log(json.id))
.then(json => console.log("Hello World!")) */

// function loadData() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
// }

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data.title))
}


// 33.4 Load more data, more APIs, send data to function 
// Load more data from users and posts

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(reponse => reponse.json())
    .then(data => displayUsers(data));
}
function displayUsers(data) {
    console.log(data);
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}
// loadPosts();


