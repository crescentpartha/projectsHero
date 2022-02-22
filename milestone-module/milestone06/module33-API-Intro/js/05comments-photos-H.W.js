
// HomeWorks (fetch comments and photos)

// fetch comments - 500 comments are loaded
function loadComments () {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}
function displayComments(comments) {
    // console.log(comments);
    const commentsContainer = document.getElementById('comments');
    for (const comment of comments) {
        // console.log(comment);
        const div = document.createElement('div');
        div.classList.add('comment-div');
        commentsContainer.appendChild(div);
        const h2 = document.createElement('h2');
        h2.innerText = comment.name;
        div.appendChild(h2);
        const p = document.createElement('p');
        p.innerText = comment.body;
        div.appendChild(p);
        containerDesign(commentsContainer);
        divDesign(div);
    }
}
function containerDesign(commentsContainer) {
    commentsContainer.style.backgroundColor = 'tomato';
    commentsContainer.style.padding = '20px';
    commentsContainer.style.margin = '10px';
    commentsContainer.style.borderRadius = '15px';
}
function divDesign(div) {
    div.style.backgroundColor = '#f6583b';
    div.style.borderRadius = '15px';
    div.style.margin = '10px';
    div.style.padding = '10px';
    div.style.textAlign = 'center';
}

// fetch photo albums - 5000 photos are loaded (Load time is very slow | can crash you PC)

function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhotos(data))
}
function displayPhotos(photos) {
    // console.log(photos);
    const photoContainer = document.getElementById('photos');
    for (const photo of photos) {
        const div = divCreate('div', 'photo-div', photoContainer); // Add div as a container of all elements
        const h2 = elementCreate('h2', photo, div); // Add heading h2
        const p = elementCreate('p', photo, div); // Add Paraphaph p
        const thumbnail = document.createElement('img');
        thumbnail.src=`${photo.thumbnailUrl}`; // Add thumbnail url
        div.appendChild(thumbnail);
        thumbnail.style.display = 'block';
        thumbnail.style.margin = '5px auto';

        const img = document.createElement('img');
        img.src=`${photo.url}`; // Add img url
        div.appendChild(img);
        containerDesign(photoContainer);
        divDesign(div);

    }
}
/* photo-property:
"albumId": 1,
"id": 1,
"title": "accusamus beatae ad facilis cum similique qui sunt",
"url": "https://via.placeholder.com/600/92c952",
"thumbnailUrl": "https://via.placeholder.com/150/92c952" */

function divCreate(element, className, containerName) {
    const div = document.createElement(element);
    div.classList.add(className);
    containerName.appendChild(div);
    return div;
}
function elementCreate(element, photo, containerName) {
    const h2 = document.createElement(element);
    h2.innerText = photo.title;
    containerName.appendChild(h2);
    return h2;
}

