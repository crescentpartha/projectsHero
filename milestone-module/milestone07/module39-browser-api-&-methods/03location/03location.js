
// 39.3 Location, URL parts, query string, href, hash, assign, reload

/* 
    What is query string in JS?
    ==> A query string is part of the full query, or URL, which allows us to send information using parameters as key-value pairs.
    Location - MDN Web docs (Link: https://developer.mozilla.org/en-US/docs/Web/API/Location)
    
    URL Parts --> href, origin, protocol, host, hostname, port, pathname, search, hash 
    Image1: https://id.javascript.info/article/url/url-object.svg
    Image2: https://cascadingmedia.com/assets/images/insites/2015/02/url-anatomy/url-anatomy-55598c24.png
    Image3: https://media.geeksforgeeks.org/wp-content/uploads/20210625160610/urldiag.PNG
*/

/* Some Commands in console panel:
    
Common:
    01. location
    02. window.location
    03. location === window.location // true

Properties:
    04. location.href
        location.href = 'https://web.programming-hero.com/';
    05. location.hash
        location.hash = '#render';
    06. location.host
    07. location.hostname
    08. location.origin
    09. location.pathname
    10. location.port
    11. location.protocol
    12. location.search // '?v=OWDo1Qr9gnk'
        location.search // '?v=OWDo1Qr9gnk&t=500s'
        &t=500s --> video start from 500 second.
    
Methods: 
    13. location.reload() 
    14. location.assign('https://web.programming-hero.com/');
    15. location.replace()
    16. location.toString()

*/

const refreshPage = () => {
    // window.location.reload();
    location.reload();
}
const visitPH = () => {
    // window.location.assign('https://web.programming-hero.com/');
    location.assign('https://web.programming-hero.com/');
}

const details = () => {
    console.log('Hash = ', location.hash);
    location.hash = '#render';
    console.log('Host = ', location.host);
    console.log('Hostname = ', location.hostname);
    console.log('href = ', location.href);
    console.log('Origin = ', location.origin);
    console.log('Pathname = ', location.pathname);
    console.log('Port = ', location.port);
    console.log('Protocol = ', location.protocol);
    alert(`
        Hash = ${location.hash}
        Host = ${location.host}
        Hostname = ${location.hostname}
        href = ${location.href}
        Origin = ${location.origin}
        Pathname = ${location.pathname}
        Port = ${location.port}
        Protocol = ${location.protocol}
    `);
}
/* Output:
    hash: ""
    host: "127.0.0.1:5500"
    hostname: "127.0.0.1"
    href: "http://127.0.0.1:5500/milestone-module/milestone07/module39-browser-api-&-methods/03location/03location.html"
    origin: "http://127.0.0.1:5500"
    pathname: "/milestone-module/milestone07/module39-browser-api-&-methods/03location/03location.html"
    port: "5500"
    protocol: "http:"
*/
