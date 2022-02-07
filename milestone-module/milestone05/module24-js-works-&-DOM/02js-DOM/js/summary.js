
console.log('I am from summary js file');

const blogs = document.getElementsByTagName('p');
console.log(blogs);
for (const blog of blogs) {
    console.log(blog);
    blog.style.backgroundColor = 'steelblue';
    blog.style.color = 'white';
    blog.style.margin = '5px';
    blog.style.padding = '10px';
}

const accus = document.getElementById('special-blog');
// accus.innerText = 'New Harun';
accus.innerHTML = `
    <h4>Special inner html</h4>
    <div>
        <ul>
            <li>Ami pari</li>
            <li>LOL inside li</li>
        </ul>
    </div>
`

console.log(document.getElementsByTagName('p')); // HTMLCollection
console.log(document.querySelectorAll('p')); // NodeList
// NodeList --> text, comment takte pare
// HTMLCollection --> html tag er collection


const friends = document.getElementById('friends');
console.log(friends);
console.log(friends.childNodes);
console.log(friends.children);

const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth);

// Create element
const friend = document.createElement('li');
friend.innerText = 'Friend-11';
friends.appendChild(friend);

