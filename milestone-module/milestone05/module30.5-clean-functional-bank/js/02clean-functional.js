

// get input value from input field
function getInputValue(fieldId) {
    // console.log(fieldId);
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}
// get inner text value
function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}
// update value in deposit total
function updateTotal(fieldId, amount) {
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
}
// update balance
function updateBalance(amount, isAdding) {
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance - amount;
    }
    document.getElementById('balance-total').innerText = newBalance;
}
// add event handler in deposit button | handle deposit
document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }

});

// add event handler in withdraw button | handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
});


/* 
JavaScript Scope:
Scope determines the accessibility (visibility) of variables.
JavaScript has 3 types of scope:
    Block scope
    Function scope
    Global scope
*/
