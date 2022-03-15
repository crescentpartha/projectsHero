
// 40.5.1 Practice Browser API with checklist and a must work

// 1. console.log in setTimeout and Show the output after 3.5 seconds later.

setTimeout( () => {
        console.log('Start your job preparation');
}, 1000);
function completeToDoList() {
        console.log('Make your CV');
}
console.log('Exploring Browser API and JS Debug');
setTimeout(completeToDoList, 3500);
setTimeout(function(){
        console.log('Make your portfolio website');
}, 2500);

// 2. take a number using prompt, add 200. then alert the result.

const userInput = () => {
        const number = prompt('What is your favourite number?');
        let num = parseInt(number);
        console.log(num);
        if (num) {
                num = num + 200;
                alert(`Your Favourite number is ${num}`);
        }
        else {
                alert('Enter valid a number');
        }
}

// 3. do you want to see the href (using confirm). if ok then console.log href (in alert)

const seeHREF = () => {
        const response = confirm('Do you want to see the href of this website?');
        if (response) {
                alert(`href = ${location.href}`);
        }
        else {
                alert('See you not for mind');
        }
}

// 4. purpose of cookies. 5-7 lines in english

/* 
    # Cookies are text files with small pieces of data — like a username and password — 
      that are used to identify your computer as you use a computer network.
    # HTTP cookies are used to identify specific users and improve your web browsing experience.
    # HTTP cookies, or internet cookies, are built specifically for Internet web browsers to track, personalize, 
      and save information about each user’s session.
    # Cookies are created to identify you when you visit a new website.
    # Browser cookies are identified and read by “name-value” pairs.

    # Cookies are small pieces of information websites store on your computer. Cookies only contain bits of text, not anything else. 
      The text can be a user ID, session ID, or any other text.
    # If you clear your cookies, you’ll be logged out of all websites and websites won’t remember any settings you’ve changed on them.
    # Your web browser stores and manages cookies. 

    Good Uses for Cookies:
        1. Cookies store your login state. Websites use cookies to remember and identify you.
        2. Cookies store preferences on websites.
        3. Cookies allow websites to provide personalized content.
    Bad Uses for Cookies:
        1. Advertising and tracking networks use tracking cookies to track you across the web.
        2. Tracking networks can also use selling aggregated browsing data to others.
    cookie are intended to be used:
        1. Session management
        2. Personalization / Authentication
        3. Tracking
    
    Articles: 
        1. https://www.kaspersky.com/resource-center/definitions/cookies
        2. https://www.howtogeek.com/119458/htg-explains-whats-a-browser-cookie/
        3. https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
        
*/

// 5. 3 differences between local storage and session storage.

/* 
        Cookies vs Local Storage vs Session Storage

        Cookies:
                1. Has different expiration dates (both the server or client can set up expiration date)
                2. The Client can't access the Cookies if the HttpOnly flag is true
                3. Has SSL Support
                4. Data are transferred on each HTTP request
                5. 4kb limit
        
        Local Storage:
                1. Has no expiration date
                2. Client only
                3. Has no SSL support
                4. Data are not transferred on each HTTP request
                5. 5 mb limit (check with the browser)
        
        Session Storage:
                1. Data is gone when you close the browser tab
                2. Client only
                3. Has no SSL support
                4. Data are not transferred on each HTTP request
                5. 5-10 mb limit (check with the browser)

        Link: https://dev.to/iggredible/cookies-vs-local-storage-vs-session-storage-3gp3
*/


// ------------------------
//         HOMEWORK
// ------------------------

// 6. how javaScript run? 5-7 lines in english

/* Some Useful Links:

        # JS Source Code - Chrome V8 Engine - Parsing - Abstract Syntax Tree (AST) - Byte Code (By Ignition) 
          - Machine Code (By Turbofan) - Code runs on the CPU
        1. https://media.geeksforgeeks.org/wp-content/uploads/20211002235143/workinggfg.png
        2. https://static.tildacdn.com/tild3533-6537-4639-b961-393433393837/1_GuWInZljjvtDpdeT6O.png

        # JavaScript Runtime (Memory Heap & Call Stack) - Web APIs (AJAX & DOM & Timeout) - Callback Queue - Event Loop
        3. https://miro.medium.com/max/1024/1*4lHHyfEhVB0LnQ3HlhSs8g.png
        4. https://user-images.githubusercontent.com/5827617/81519830-70bf4600-937d-11ea-9645-394a48642663.png

        How JavaScript works: https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf
*/



/* 

7. list of things that are asynchronous in JS/browser
8. What is event loop in JS and how does it work?

------------------------
        OPTIONAL
------------------------

9. simple website with two input fields and a button. product name (1st input field), product price (2nd input field) 
    by clicking on the button product will be added to the local storage. You should be able to add multiple.
10. Display products on the websites. If they exists on the local storage. Display from there.

------------------------
        MUST
------------------------

11. stack overflow, create an account. spend 30 minute.

*/

