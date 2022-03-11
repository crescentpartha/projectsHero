
// 39.6 local storage, session storage, storage info in browser storage

/* 
    Local Storage = data stay parmanently
    Session Storage = data stay temporarily

    window.localStorage - stores data with no expiration date
    window.sessionStorage - stores data for one session

    window.sessionStorage - MDN web docs (Link: https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
    window.localStorage - MDN web docs (Link: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

    ---------------------------------------------------------------------------------------------------------------------
    Difference between LocalStorage and SessionStorage?

    SessionStorage:

    // Save data to sessionStorage
    sessionStorage.setItem('key', 'value');

    // Get saved data from sessionStorage
    let data = sessionStorage.getItem('key');

    // Remove saved data from sessionStorage
    sessionStorage.removeItem('key');

    // Remove all saved data from sessionStorage
    sessionStorage.clear();

    ----------------------------------------------------------------
    Local Storage:

    localStorage.setItem('myCat', 'Tom');
    const cat = localStorage.getItem('myCat');
    localStorage.removeItem('myCat');
    localStorage.clear(); 

    ---------------------------------------------------------------------------------------------------------------------

    Some Commands in console panel:
    01. sessionStorage | window.sessionStorage
    02. localStorage | window.localStorage
    03. window.localStorage === localStorage
    04. window.sessionStorage === sessionStorage
    ----------------------------------------------
    05. window.localStorage.setItem('def', 777);
    06. window.localStorage.getItemm('def');
    07. const nextIdJSON = localStorage.getItem('udm-16477-300x250');
    08. nextIdJSON
    09. const nextId = JSON.parse(nextIdJSON)
    10. nextId
    11. nextId.expiration
    12. nextId.creation
    13. nextId.user = 'PHero'
    14. nextId
    15. nextId.assign = 'web course'
    16. const nextIdStringified = JSON.stringify(nextId)
    17. nextIdStringified
    18. localStorage.setItem('udm-16477-300x250', nextIdStringified)

    JSON.stringify = To set an Object as a key_value
    JSON.parse = To read an Object

*/

