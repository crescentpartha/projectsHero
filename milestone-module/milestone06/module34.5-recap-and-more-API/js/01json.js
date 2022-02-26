
// 01. Go to jsonplaceholder website and fetch data to see in console. Ex: comments API

// 02. which data of comments are you load/see in console, now you try to see in html. Set button to load data and display in website.

// 03. Set autoload in website without clicking any button And try to show atleast two property of this data.

// 04. Use arrow function and forEach loop in your code.

// 05. Dynamic data load | If you click any comment (comment div Or button) then take/get comment id and Set in the url in api (using Template String) then load data.

const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}

// loadComments();

const displayComments = comments => {
    console.log(comments);
    const postComments = document.getElementById('display-comments');
    // for (const comment of comments) {
    comments.forEach(comment => {
        // console.log(comment);
        const div = document.createElement('div');
        div.classList.add('comments-all');
        div.innerHTML = `
        <h2>Name: ${comment.name}</h2>
        <p>Email: ${comment.email}</p>
        <p>Information: ${comment.body}</p>
        <button onclick="loadDataById('${comment.id}')">Details</button>
        `;
        postComments.appendChild(div);

    })
}
const loadDataById = id => {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayIdDetails(data))
    // console.log(id);
}
const displayIdDetails = id => {
    const displayDetails = document.getElementById('display-details');
    displayDetails.classList.add('displayDetailsById');
    displayDetails.innerHTML = `
        <h2>Id: ${id.id}</h4>
        <p>Name: ${id.name}</p>
        <p>Email: ${id.email}</p>
        <p>Informations: ${id.body}</p>
    `;
    // console.log(id);
}


