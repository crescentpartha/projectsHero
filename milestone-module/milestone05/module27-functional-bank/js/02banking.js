
// 27.2 Get User deposit and set deposit total value 
document.getElementById('deposit-button').addEventListener('click', function(){
    // get entered deposit
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);

    // get current deposit and set current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount; // update current deposit
    // console.log(depositTotalText);
    depositInput.value = ''; // set entered deposit empty

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
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // console.log(withdrawAmountText);

    // get current withdraw and set current withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    withdrawInput.value = ''; // clear withdraw input field

    // update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

});


