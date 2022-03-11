
// 39.2 Browser alert, confirm, prompt with examples

/* alert() Vs confirm() Vs prompt()

    The alert(), confirm(), and prompt() functions are global functions. 
    So, they can be called using the window object e.g. window.alert(), window.confirm(), and window.prompt().

    alert(): 
        1. alert() function to display a message to the user that requires their attention.
        2. OK button to close the alert box.
    confirm():
        1. confirm() function displays a popup message to the user with two buttons, OK and Cancel.
        2. confirm() function returns true if a user has clicked on the OK button
        3. confirm() function returns false if a user has clicked on the Cancel button
        4. You can use the return value to process further.
    prompt():
        1. prompt() function returns a user entered value.
        2. If a user has not entered anything, then it returns null.
*/

console.log('I am here');
// alert('Maa is coming!!!');

// Alert a User
const maaComing = () => {
    alert('Mother is coming. Open the book.');
    alert(Date());
}

// Ask a Questions to User
const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('Amake fee ta bKash kore dee.');
    }
    else {
        console.log('DGM!!! Dure Gia Mor!!!');
    }
}

// Takes User Input
const askName = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name);
    }
    else {
        console.log(name); // returns null
    }
}

