
// 01. Change 'Top Players' & 'Top Blogs' color using DOM. Set two Id and get element by JavaScript and then change text color.

const topPlayer = document.getElementById('section-title1');
topPlayer.style.color = 'gold';
document.getElementById('section-title1').addEventListener('click', function(){
    document.getElementById('section-title1').style.color = 'blue';
});

const topBlog = document.getElementById('section-title2');
topBlog.style.color = 'tomato';
document.getElementById('section-title2').addEventListener('click', function(){
    document.getElementById('section-title2').style.color = 'blue';
});

// 02. By using Javascript, set backgrourd color of div section in player class. Don't set hex code as a background color. Set rgab color code.

// set backgrourd color for player-1
document.getElementById('player-1').addEventListener('click', function(){
    const player1 = document.getElementById('player-1');
    player1.style.backgroundColor = 'rgba(9, 0, 255, 0.1)';
    player1.style.borderRadius = '10px';
});

// set backgrourd color for player-2
document.getElementById('player-2').addEventListener('click', function(){
    const player2 = document.getElementById('player-2');
    player2.style.backgroundColor = 'rgba(9, 0, 255, 0.1)';
    player2.style.borderRadius = '10px';
});

// set backgrourd color for player-3
document.getElementById('player-3').addEventListener('click', function(){
    const player3 = document.getElementById('player-3');
    player3.style.backgroundColor = 'rgba(9, 0, 255, 0.1)';
    player3.style.borderRadius = '10px';
});

// set backgrourd color for player-4
document.getElementById('player-4').addEventListener('click', function(){
    const player4 = document.getElementById('player-4');
    player4.style.backgroundColor = 'rgba(9, 0, 255, 0.1)';
    player4.style.borderRadius = '10px';
});
// set backgrourd color for player-5
document.getElementById('player-5').addEventListener('click', function(){
    const player5 = document.getElementById('player-5');
    player5.style.backgroundColor = 'rgba(9, 0, 255, 0.1)';
    player5.style.borderRadius = '10px';
});

// set backgrourd color for player-6
document.getElementById('player-6').addEventListener('click', function(){
    const player6 = document.getElementById('player-6');
    player6.style.backgroundColor = 'rgba(9, 0, 255, 0.1)';
    player6.style.borderRadius = '10px';
});


