
// 33.6 Load posts and display on the website with CSS

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts) {
    // console.log(posts);
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3> ${post.title} </h3>
        <p> ${post.body} </p>
        `;
        postContainer.appendChild(div);
        // console.log(post);
    }
}

loadPosts();

// 33.7 GET, POST, PATCH, DELETE, CRUD, GET Vs POST 

function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', 
        body: JSON.stringigy({
            title: 'My new post', 
            body: 'This is my posts', 
            userId: 1
        }), 
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => console.log(data))
}

// http get Vs post
// CRUD Vs Rest API

