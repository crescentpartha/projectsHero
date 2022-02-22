
// 33.9 Module Summary and two homeworks

// fetch albums by jsonPlaceholder
function loadAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(data => displayAlbums(data))
}
// display albums
function displayAlbums(albums) {
    console.log(albums);
    const albumsContainer = document.getElementById('albums');
    for (const album of albums) {
        const p = document.createElement('p');
        setStyle(p);
        p.style.textAlign = 'center';
        p.innerText = album.title;
        albumsContainer.appendChild(p);
    }
}
// set style in paragraph
function setStyle(p){
    p.style.backgroundColor = 'yellow';
    p.style.display = 'block-inline';
    p.style.padding = '10px';
    p.style.margin = '2px 50px';
    p.style.borderRadius = '10px';
}

