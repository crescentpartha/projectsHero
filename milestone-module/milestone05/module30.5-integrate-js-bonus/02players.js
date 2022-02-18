
function setPlayerStyle(player) {
    player.style.border = '1px solid red';
    player.style.borderRadius = '10px';
    player.style.margin = '10px';
    player.style.padding = '10px';
    player.style.textAlign = 'justify';
}

const players = document.getElementsByClassName('player');
for (const player of players) {
    // console.log(player);
    setPlayerStyle(player);
    // player.addEventListener('click', function (){
    //     player.style.backgroundColor = 'yellow';
    // });
}

// console.log(document.querySelector('#players .player:first-child'));
// console.log(document.querySelectorAll('#players .player'));

/* 
We can add player in two ways:
    1. create and append
    2. use innerHTML
    " ` is called Carat or Tik "
*/
function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nihil nesciunt nam. Facere, amet. Quod hic nihil iure recusandae quidem, sed aperiam, accusantium nemo dicta libero cum reiciendis. Impedit, obcaecati?</p>
    `;
    setPlayerStyle(player);
    playersContainer.appendChild(player);
    // player.addEventListener('click', function (){
    //     player.style.backgroundColor = 'yellow';
    // });
}

document.getElementById('players').addEventListener('click', function (event) {
    // console.log(event); // PointerEvent {.....}
    // console.log(event.target); // Show elements or tag with details
    // console.log(event.target.tagName.toLowerCase()); // Only show the tagName

    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'yellow';
    }
    else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
});

/* 

Bubbling and Capturing: https://javascript.info/bubbling-and-capturing

The standard DOM Events describes 3 phases of event propagation:
    1. Capturing phase – the event goes down to the element.
    2. Target phase – the event reached the target element.
    3. Bubbling phase – the event bubbles up from the element.

*/
