
// 28.5 Pin matcher overview, Generate pin and display it
function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

// 28.6 Use event bubble to create calculator and clear
document.getElementById('key-pad').addEventListener('click', function(event){
    // console.log(event.target.innerText); // Show button Text
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        // console.log(number); // Show not a number
        if (number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

// 28.7 Verify match and use function to reduce duplicate
function varifyPin(){
    // console.log("going to varify");
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumber){
        console.log('matched, YAY');
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        console.log('opps');
        failError.style.display = 'block';
        successMessage.style.display = 'none';
    }
}
