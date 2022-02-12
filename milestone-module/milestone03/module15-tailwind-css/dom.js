
// 01. select an element then console log to show value/innerText

const penguin = document.getElementById('penguin');
console.log(penguin.innerText);

// 02. add click handler in 'buy now' button. If I click button then 'BE THE PENGUIN' is alter by 'I AM PENGUIN'

document.getElementById('button-head').addEventListener('click', function(){
    const penguin = document.getElementById('penguin');
    penguin.innerText = 'I AM PENGUIN';
    console.log(penguin.innerText);
});

