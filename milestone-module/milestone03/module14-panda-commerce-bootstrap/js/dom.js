
// 01. connect dom.js file with index.html file 

// 02. change the font color of h1 tag which class name is lightblue and set font color is lightblue
const lightBlue = document.getElementsByClassName('lightblue');
for (const blue of lightBlue) {
    blue.style.color = 'lightblue';
}

// 03. this website have a section with backpack id, we need to set tomato color as a background
const backPack = document.getElementById('backpack');
backPack.style.backgroundColor = 'tomato';

// 04. set border-radius: 30px; for all card classes
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}

// 05. Write a function which console.log anything and set as a click handler in any button
function handleBuyNow() {
    console.log('handleBuyNow function called and Buy Now button clicked');
}

// 06. Set an event handler in all of the "Buy Now" button sothat if any button clicked then this button will be removed from the website.
const buttons = document.getElementsByClassName('btn');
for (const button of buttons) {
    button.addEventListener('click', function(event) {
        event.target.parentNode.removeChild(event.target);
    });
}

// 07. Set submit button disable but if anyone type email in input field then submit button will be active otherwise It won't active.
document.getElementById('mail').addEventListener('keyup', function (event) {
    const deleteBtn = document.getElementById('delete-confirm');
    if (event.target.value == 'email' || event.target.value == 'Email') {
        deleteBtn.removeAttribute('disabled');

        // Clear Input field
        const inputValue = document.getElementById('mail');
        document.getElementById('delete-confirm').addEventListener('click', function(event){
            inputValue.value = '';
        });
    }
    else {
        deleteBtn.setAttribute('disabled', true);
    }
});

// 08. (optional) take a challenge when you mouseenter in an image then this image is changed

document.getElementById('image-card').addEventListener('mouseenter', function(event){
    const images = document.getElementById('image-card');
    console.log('showed');
    document.getElementById('image-card').src = './images/shoes/shoe-2.png';
});
document.getElementById('image-card').addEventListener('mouseout', function(event){
    const images = document.getElementById('image-card');
    console.log('showed');
    document.getElementById('image-card').src = './images/shoes/shoe-1.png';
});

// 09. (optional) where have "LET's STAY IN TOUCH" if you double clicked any empty space then background color will be changed
document.getElementById('subscribe').addEventListener('dblclick', function (event) {
    const box = document.getElementById('subscribe');
    box.style.backgroundColor = 'darkorange';
});


