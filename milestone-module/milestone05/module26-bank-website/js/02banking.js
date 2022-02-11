
// 26.6 Get User deposit and set deposit total value | handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('deposit button clicked');
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositAmount;
    console.log(depositTotal.innerText);
    
    // clear the deposit input field
    depositInput.value = '';

});

