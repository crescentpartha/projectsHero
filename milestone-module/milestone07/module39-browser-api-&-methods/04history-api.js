
// 39.4 History API to navigate back, forward, go, history length

/* Example of History API:
    Example-1: When we open any website without sign in and after sign in browser take me previous page.
*/

/* Some Command in console panel:
    
    01. history
    02. window.history
    03. window.history === history // true

Moving forward and backward:

    04. history.back() // To move back one page
    05. history.forward() // To move forward one page
    05. history.go(-1) // To move back one page
        history.go(-4) // To move forward four page
        history.go(4) // To move forward four page
        hisotry.go(0) // refreshing the page
        hisotry.go() // refreshing the page
    06. history.length // Show the number of pages in the history stack

*/

