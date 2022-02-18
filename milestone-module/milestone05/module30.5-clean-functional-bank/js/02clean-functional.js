

// get input value from input field
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}
// update value in deposit amount
function updateTotal(fieldId, amount) {
    const totalTag = document.getElementById(fieldId);
    const previousTotalInText = totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInText);
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;
}
// add event handler in deposit button
document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = getInputValue('deposit-input');
    updateTotal('deposit-total', amount);
});

