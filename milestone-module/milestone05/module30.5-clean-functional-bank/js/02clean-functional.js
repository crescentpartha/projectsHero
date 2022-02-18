

// get input value from input field
function getInputValue(fieldId) {
    // console.log(fieldId);
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}
// update value in deposit total
function updateTotal(fieldId, amount) {
    // console.log(fieldId, amount);
    const totalTag = document.getElementById(fieldId);
    const previousTotalInText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInText);
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;
}
// update balance
function updateBalance(amount, isAdding) {
    const balanceTag = document.getElementById('balance-total');
    const balanceInText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceInText);
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance - amount;
    }
    
    balanceTag.innerText = newBalance;
}
// add event handler in deposit button | handle deposit
document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = getInputValue('deposit-input');
    updateTotal('deposit-total', amount);
    updateBalance(amount, true);
});

// add event handler in withdraw button | handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input');
    updateTotal('withdraw-total', amount);
    updateBalance(amount, false);
});
