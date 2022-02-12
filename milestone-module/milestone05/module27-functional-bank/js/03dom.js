

// 01. get element by id from DOM
// 02. add click handler in element
// 03. console log any element value/innerText
// 04. update previous element value
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositeAmount = parseFloat(depositInput.value);

    const balance = document.getElementById('balance-total');
    const balanceAmount = parseFloat(balance.innerText);

    console.log(depositeAmount, balanceAmount+depositeAmount);

    const deposit = document.getElementById('deposit-button');
    deposit.style.backgroundColor = 'lightcoral';
});

        
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = parseFloat(withdrawInput.value);

    const balance = document.getElementById('balance-total');
    const balanceAmount = parseFloat(balance.innerText);

    console.log(withdrawAmount, balanceAmount-withdrawAmount);

    const withdraw = document.getElementById('withdraw-button');
    withdraw.style.backgroundColor = 'lightcoral';
});


