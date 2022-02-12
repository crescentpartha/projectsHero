
// 26.3 Add event listener navigate to another page

document.getElementById('login-submit').addEventListener('click', function(){
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    // check email and password
    if(userEmail == 'functionalbank@gmail.com' && userPassword == 'secret') {
        window.location.href = '02banking.html';
    }
});

// 26.4 Deposit, withdraw, balance area using grid layout
// window.location.href
// window.location.href = '01index.html'
// window.location.href = '02banking.html'
// document.getElementById('deposit-input');
// document.getElementById('deposit-button');
// document.getElementById('withdraw-input');
// document.getElementById('withdraw-button');




