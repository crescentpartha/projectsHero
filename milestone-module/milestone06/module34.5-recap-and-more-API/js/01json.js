
// 01. Go to jsonplaceholder website and fetch data to see in console. Ex: comments API

// 02. which data of comments are you load/see in console, now you try to see in html. Set button to load data and display in website.

// 03. Set autoload in website without clicking any button And try to show atleast two property of this data.

// 04. Use arrow function and forEach loop in your code.

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
        `;
        postComments.appendChild(div);

    })
}
