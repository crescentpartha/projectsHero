
// 27.2 Get User deposit and set deposit total value 
document.getElementById('deposit-button').addEventListener('click', function(){
    // get entered deposit
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    console.log(depositAmount);
    // get current deposit and set current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    depositTotal.innerText = depositAmount; // update current deposit
    console.log(depositTotalText);
    depositInput.value = ''; // set entered deposit empty

});


