
// 01. Go to jsonplaceholder website and fetch data to see in console. Ex: comments API

// 02. which data of comments are you see in console, now you try to see in html. Set button to load data and display in website.

function loadComments (){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}

function displayComments(comments){
    console.log(comments);
    const postComments = document.getElementById('display-comments');
    for (const comment of comments) {
        // console.log(comment);
        const div = document.createElement('div');
        div.classList.add('comments-all');
        div.innerHTML = `
        <h2>${comment.name}</h2>
        <p>${comment.email}</p>
        <p>${comment.body}</p>
        `;
        postComments.appendChild(div);
    }
}
