
// 26.6 Get User deposit and set deposit total value | handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('deposit button clicked');

    // Get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newdepositText = depositInput.value;
    const newdepositAmount = parseFloat(newdepositText);
    // console.log(depositAmount);

    // 26.7 Update deposit and balance and handle string add

    // Update deposit total
    const depositTotal = document.getElementById('deposit-total');
    // console.log(depositTotal.innerText);
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    // console.log(previousDepositAmount, newdepositAmount);
    const newDepositTotal = previousDepositAmount + newdepositAmount;
    depositTotal.innerText = newDepositTotal;
    // console.log(depositTotal.innerText);
    // clear the deposit input field
    depositInput.value = '';

    // Update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newdepositAmount;
    balanceTotal.innerText = newBalanceTotal;

});

// 26.8 Money withdraw and reduce balance for withdraw | handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function() {
    // console.log('withdraw clicked');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount); // as a number

    // Set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // clear withdraw input
    withdrawInput.value = '';

    // Update Balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

});


