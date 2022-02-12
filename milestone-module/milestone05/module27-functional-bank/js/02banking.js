
/* function doubleIt(num) {
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7); */

// 27.6 (advanced) Share one function between two input field
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const AmountValue = parseFloat(inputAmountText);

    inputField.value = ''; // set entered deposit/withdraw empty
    return AmountValue;
}

// 27.7 (advanced) Deposit and withdraw update with one function
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount; // update current deposit/withdraw
}

// 27.8 (advanced) Shared Balance update function
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount; // update current balance
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount; // update current balance
    }
}

// 27.2 Get User deposit and set deposit total value 
document.getElementById('deposit-button').addEventListener('click', function () {
    /// get entered deposit

    /* // Don't Repeat Yourself --> DRY
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    depositInput.value = ''; // set entered deposit empty */
    // const depositAmount = getInputValue('deposit-input');
    // console.log(depositAmount);

    /// get current deposit and update current deposit

    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount; // update current deposit */
    // updateTotalField('deposit-total', depositAmount);
    // console.log(depositTotalText);

    //// 27.3 Update deposit and balance and handle string add

    /// update balance

    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount; // update current balance */
    // updateBalance(depositAmount, true);

    const depositAmount = getInputValue('deposit-input');
    updateTotalField('deposit-total', depositAmount);
    updateBalance(depositAmount, true);

});

// 27.4 Money withdraw and reduce balance for withdraw | handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    /// get entered withdraw

    // console.log('withdraw clicked');
    /* // Don't Repeat Yourself --> DRY
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    withdrawInput.value = ''; // clear withdraw input field */
    // const withdrawAmount = getInputValue('withdraw-input');
    // console.log(withdrawAmountText);

    /// get current withdraw and update current withdraw

    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */
    // updateTotalField('withdraw-total', withdrawAmount);

    /// update balance after withdraw

    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */
    // updateBalance(withdrawAmount, false);


    const withdrawAmount = getInputValue('withdraw-input');
    updateTotalField('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false);

});

