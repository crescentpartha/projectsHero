
// 42.5.1 Debug and devtool practice and checklist

/* 
    01. Find the documentation of console tab utilities API. and then read it. Spend 30-45minutes.

    02. Easiest way to find out the event listener attached to a DOM element.

    03. How can you break the first line of a function without actually adding a breakpoint. Rather you will use a console api utilities.

    04. Go to the source tab and add a conditional breakpoint.

    --------------------------------

    05. What is accessibility?
    06. What is a call stack?
    07. What is the purpose of regular expression?
    08. What is the purpose of the lighthouse tab of chrome devtool.

    --------------------------------
    Task-1: 

    09. Create a simple website. You will have a input and a button. Input field will take an email. 
        Use regular expression to validate that user is inserting an email. (Find the regEx by searching online)

    10. If email is valid, display some green color text. if not an email, show some error in red color text.
    
    --------------------------------
    Task-2:
    
    11. Clone a repository called "issue-tracker" where after adding a issue, it doesn't close. Furthermore, It cann't be deleted. So, fix the bug of this site.

    --------------------------------
    Extra HomeWork:

    12. Clone a repository called "ranga-store". 
    13. Find out how many bugs are there. Try to fix minimum three (3) bugs after finding those bugs.

*/

// --------------------------------------------------------------------------------------------------------

/* Some DevTools Keyboard Shortcuts:

    Ctrl + Shift + J --> Open the Console panel
    Ctrl + ] --> Focus the next panel
    Ctrl + [ --> Focus the previous panel
    Ctrl + G --> Go to line
    Ctrl + F --> Search for text within the current panel
    Ctrl + Shift + F --> Search for text within the current folder
    Escape --> Toggle the Drawer (Console panel in the bottom)

    F10 OR Control + (') --> Step over next function call
    F11 OR Control + (;) --> Step into next function call
    Shift + F11 OR Control + Shift + (;) --> Step out of current function
    
    Ctrl + R OR F5 --> Normal reload
    Ctrl + Shift + (+) --> Zoom in
    Ctrl + (-) --> Zoom out
    Ctrl + Z --> Undo change (Elements panel)
    Ctrl + Y --> Redo change (Elements panel)
*/

/* 
    01. Find the documentation of console tab utilities API. and then read it. Spend 30-45minutes.

    Chrome Devtools: Console Utilities API Reference
    Link: https://developer.chrome.com/docs/devtools/console/utilities/
    Documentation for Web developers
    Link: https://developer.mozilla.org/en-US/docs/Web
    MDN web docs - Window
    Link: https://developer.mozilla.org/en-US/docs/Web/API/Window
    Keyboard shortcuts
    Link: https://developer.chrome.com/docs/devtools/shortcuts/

    -------------------------------------------------------------------------------------------------------------

    // Everything need to write in the console panel

    # console.log("partha");
    # console.info("Show general info message");
    # console.error('Show an error message');
    # console.warn('Show an warn message');
    # console.clear(); // Ctrl + L (shortcut)
    # console.count(); // default: 3
    # console.count('partha'); // partha: 4

    -------------------------------------------------------------------------------------------------------------

    # $_ --> returns the value of the most recently evaluated expression.
        2 + 2 // 4
        $_ // 4
    # $_.length // to find the length of the array.

    -------------------------------------------------------------------------------------------------------------

    # $(selector) --> returns the reference to the first DOM element with the specified CSS selector.
        $('img')
    # $$(selector) --> returns an array of elements that match the given CSS selector. 
        let images = $$('img'); 
    # document.querySelectorAll()

    -------------------------------------------------------------------------------------------------------------

    # clear(); 
    # copy('partha'); | copy(2345); // then Ctrl + V
    
    -------------------------------------------------------------------------------------------------------------

    # debug(function) // debug(displayData);
    # undebug(function) // undebug(displayData);

    # monitor(function)
    # unmonitor(function)

    # monitorEvents(object, [, events]) // monitorEvents(window, ["resize", "scroll"])
    # unmonitorEvents(object, [, events]) // unmonitorEvents(window, ["resize", "scroll"])

                    **Event type & Corresponding mapped events**
                    
        1. mounse -->      "mousedown", "mouseup", "click", "dblclick", "mousemove", "mouseover", "mouseout", "mousewheel"
        2. key -->    "keydown", "keyup", "keypress", "textInput"
        3. touch --> 	"touchstart", "touchmove", "touchend", "touchcancel"
        4. control -->   "resize", "scroll", "zoom", "focus", "blur", "select", "change", "submit", "reset"

    # getEventListeners(object)

    # keys(object)
    # values(object)

    # profile([name]) // profile("My profile")
    # profileEnd([name]) // profileEnd("My profile")

    -------------------------------------------------------------------------------------------------------------

    # queryObjects(Constructor)
        --> queryObject(Promise) // returns all instances of Promise.
        --> queryObject(HTMLElement) // returns all HTML elements
        --> queryObject(foo) // foo is a class name

    # table(data [, columns])
        --> table(names);
        --> table(names, ['firstName']);

*/


/* 
    02. Easiest way to find out the event listener attached to a DOM element.
        # getEventListeners(object)
        # Elements --> Event Listeners (--> click / keydown / mousedown)

    03. How can you break the first line of a function without actually adding a breakpoint. Rather you will use a console api utilities.
        # debug(function)
        # Elements --> DOM Breakpoint

    04. Go to the source tab and add a conditional breakpoint.
        # Source tab --> add breakpoint --> Right click --> Edit breakpoint --> Conditional breakpoint.
    
*/

/* 
    05. What is accessibility?
        # Accessibility: https://developer.chrome.com/docs/devtools/accessibility/reference/

        # Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them. 
          More specifically, people can: perceive, understand, navigate, and interact with the Web. contribute to the Web.

    06. What is a call stack?
        # Call Stack: https://developer.mozilla.org/en-US/docs/Glossary/Call_stack
        # Call Stack: https://www.javascripttutorial.net/javascript-call-stack/

        # A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script 
        that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.

        # The call stack is used by JavaScript to keep track of multiple function calls.
        # Call Stack which is a mechanism to keep track of the function calls. 
        # JavaScript engine uses a call stack to manage execution contexts: the Global Execution Context and Function Execution Contexts.

    07. What is the purpose of regular expressions?
        # Regular Expressions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
        # Regex to validate password strength: https://stackoverflow.com/questions/5142103/regex-to-validate-password-strength

        # Regular expressions are patterns used to match character combinations in strings.
        # A regular expression is a sequence of characters that forms a search pattern.
        # A regular expression is a string that describes a pattern e.g., email addresses and phone numbers.

        # ^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$
        Explanation:
                    ^                         Start anchor
                    (?=.*[A-Z].*[A-Z])        Ensure string has two uppercase letters.
                    (?=.*[!@#$&*])            Ensure string has one special case letter.
                    (?=.*[0-9].*[0-9])        Ensure string has two digits.
                    (?=.*[a-z].*[a-z].*[a-z]) Ensure string has three lowercase letters.
                    .{8}                      Ensure string is of length 8.
                    $                         End anchor.

    08. What is the purpose of the lighthouse tab of chrome devtool.
        # Lighthouse: https://developer.chrome.com/docs/devtools/speed/get-started/#goal_of_tutorial

        # Lighthouse: Optimize website speed
        # Lighthouse is an open-source, automated auditing tool for improving the quality of web pages. It provides a well-lit path for improving 
          the quality of sites by allowing developers to run audits for performance, accessibility, progressive web apps compatibility and more.

*/




