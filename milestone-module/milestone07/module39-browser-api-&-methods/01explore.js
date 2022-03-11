
// 39.1 Module Overview, BOM Vs DOM, Browser API

/* 
    # BOM (Browser Object Model) | DOM (Documents Object Model)
    The BOM (Browser Object Model) consists of the objects navigator, history, screen, location and document which are children of window. 
    In the document node is the DOM (Document Object Model), the document object model, which represents the contents of the page. 
    You can manipulate it using javascript.

    Link: https://i.stack.imgur.com/UGXeb.jpg
    Introduction to DOM - MDN (Link: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
    Wem APIs - MDN (Link: https://developer.mozilla.org/en-US/docs/Web/API)
    DOM & BOM revisited (Link: https://fedknu.com/blog/dom-bom-revisited/)
    Window (DOM, DOM, JavaScript) (Link: https://fedknu.com/static/a6db3a9954c723f34812f8afd1eabb28/8f50f/bom.png)

    1. document is browser related.
    2. We can't get DOM in main JavaScript. DOM stay in browser.

    # Browser API Vs Web API?
    Introduction to web APIs - MDN (Link: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
    Browser and Web APIs - Medium (Link: https://medium.com/@antwan29/browser-and-web-apis-d48c3fd8739)
*/

/* 
    # API Vs Web Services
    1. All Web services are APIs but all APIs are not Web services.
    2. Web services might not perform all the operations that an API would perform.
    3. A Web service uses only three styles of use: SOAP, REST and XML-RPC for communication 
       whereas API may use any style for communication.
    4. A Web service always needs a network for its operation whereas an API doesn’t need a network for its operation.
    5. An API facilitates interfacing directly with an application whereas a Web service is a required a path.
*/

const name = 15; 
const student = {
    name: 'Jolil', 
    friend: 'Borsha', 
    job: 'Business', 
    makeMovie: function (name) {
        console.log(name);
    }
};
student.makeMovie('Din Raat');
// document.getElementById('name'); // document is browser related;
// fetch('') // fetch is browser related

