
// 31.2 Recap of DOM Manipulation and event handler

// Add border
document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '2px solid yellow';
});

// Add background color
function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
}

// Add friend
document.getElementById('add-friend').addEventListener('click', function (){
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
        <h3 class="friend-name">New Friend</h3>
        <p>Lorem ipsum dolor sit amet.</p>
    `;
    container.appendChild(friendDiv);
});

// Color friend name
document.getElementById('color-Friend-name').addEventListener('click', function (){
    const colorFriendName = document.getElementsByClassName('friend-name');
    // colorFriendName.style.color = 'goldenrod'; // Can't set color in multiple Class without using loop
    for (const friend of colorFriendName){
        friend.style.color = 'goldenrod';
    }
})
