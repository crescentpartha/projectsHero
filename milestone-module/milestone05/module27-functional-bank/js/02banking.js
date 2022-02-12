
/* function doubleIt(num) {
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7); */

function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const AmountValue = parseFloat(inputAmountText);

    inputField.value = ''; // set entered deposit empty
    return AmountValue;
}



// 27.2 Get User deposit and set deposit total value 
document.getElementById('deposit-button').addEventListener('click', function(){
    // get entered deposit

    /* // Don't Repeat Yourself --> DRY
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    depositInput.value = ''; // set entered deposit empty */
    const depositAmount = getInputValue('deposit-input'); 
    // console.log(depositAmount);

    // get current deposit and set current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount; // update current deposit
    // console.log(depositTotalText);

    // 27.3 Update deposit and balance and handle string add

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount; // update current balance

});

// 27.4 Money withdraw and reduce balance for withdraw | handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    // get entered withdraw
    
    // console.log('withdraw clicked');
    /* // Don't Repeat Yourself --> DRY
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    withdrawInput.value = ''; // clear withdraw input field */
    const withdrawAmount = getInputValue('withdraw-input');

    // console.log(withdrawAmountText);

    // get current withdraw and set current withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

});


