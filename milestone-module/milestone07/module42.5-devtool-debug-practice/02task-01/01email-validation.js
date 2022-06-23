
const successMessage = document.getElementById('notify-success');
const failError = document.getElementById('notify-fail');
const enterMessage = document.getElementById('enter-message');

// If task description button clicked
const taskDescription = () => {
    successMessage.style.display = 'none';
    failError.style.display = 'none';
    enterMessage.style.display = 'none';

    alert(`01. Create a simple website. You will have a input and a button. Input field will take an email. Use regular expression to validate that user is inserting an email. (Find the regEx by searching online)

02. If email is valid, display some green color text. if not an email, show some error in red color text.`);
}


// If check Validation button clicked
const checkValidation = () => {
    // get value from the input field
    const emailText = document.getElementById('email');
    const emailAddress = emailText.value;
    
    if (emailAddress) {
        // email validation regex in JS
        const emailValid = validateEmail(emailAddress);

        // display validation message
        displayMessage(emailValid);
    } 
    else {
        enterMessage.style.display = 'block';
        successMessage.style.display = 'none';
        failError.style.display = 'none';
    } 
    
    // clear input field
    emailText.value = "";

}

// email validation regex in JS
function validateEmail (emailAdress){
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
        return true; 
    } else {
        return false; 
    }
}

// display validation message
function displayMessage(emailValid) {
    if (emailValid) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
        enterMessage.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';
        failError.style.display = 'block';
        enterMessage.style.display = 'none';
    }
}
