
// 44.5 Routing, Route parameter, Routing in React

/* 
    Location API: https://developer.mozilla.org/en-US/docs/Web/API/Location
    History API: https://developer.mozilla.org/en-US/docs/Web/API/History

    In Single Page Application: 
        - Page is one, Routes are different (Because, people want to see different things)
        - Show different things in one page to user, depends on different Route.

    There are two types of ways for Routing:
        1. Change the URL parts in SPA by using Location API (Ex: location.hash)
        2. history API

    URL Parts: 
        1. https://media.geeksforgeeks.org/wp-content/uploads/20210625160610/urldiag.PNG
        2. https://www.geeksforgeeks.org/components-of-a-url/
        3. URL: scheme - subdomain - domain - top level domain - port number - path - query string separator - query string / parameter - fragment

        1. https://javascript.info/article/url/url-object.svg
        2. https://javascript.info/url
        3. Location Anatomy: https://developer.mozilla.org/en-US/docs/Web/API/Location
        3. URL: protocol - host (hostname - port) - pathname - search - hash

    # In SPA, Route changes by #hash part. (Ex: Gmail | Reactjs.org)

    In Console Panel:
        - location
        - location.hash // '#settings/labels'
        - location.hash = '#settings/inbox' // '#settings/inbox'
        - location.hash = '#settings/offline' // '#settings/offline'
        - location.hash = '#settings/general' // '#settings/general'
        - location.pathname

    Routing done by two ways: 
        1. change the location.hash data (location API)
        2. history API
*/


