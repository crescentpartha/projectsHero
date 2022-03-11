
// 38.9 Module Summary and HTTP Layers

/* 
    01. HTTP (Link: https://developer.mozilla.org/en-US/docs/Web/HTTP)
        Overview of HTTP (link: https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
            3-Tier Architecture = (Client - Server - Database)
            (link: https://www.ibm.com/cloud/learn/three-tier-architecture#:~:text=Three%2Dtier%20architecture%20is%20a,
            associated%20with%20the%20application%20is)
        HTTP Cache
        HTTP Cookies

    02. 7 Layers of the OSI Model
        (Link1: https://www.geeksforgeeks.org/layers-of-osi-model/)
        (Link2: https://www.freecodecamp.org/news/an-introduction-to-http-understanding-the-open-systems-interconnection-model-9dd06233d30e/)
        (Link3: https://www.imperva.com/learn/application-security/osi-model/)
        (Link4: https://infosys.beckhoff.com/content/1033/tf6310_tc3_tcpip/Images/png/84433547__en-US__Web.png)
        (Link5: https://www.imperva.com/learn/wp-content/uploads/sites/13/2020/02/OSI-7-layers.jpg)
        (Link6: https://cdn.tutsplus.com/cdn-cgi/image/width=680/net/uploads/2013/07/img004.png)
        (Link7: https://www.imperva.com/learn/wp-content/uploads/sites/13/2020/02/OSI-vs.-TCPIP-models.jpg.webp)
        (Link8: https://thumbs.dreamstime.com/z/network-models-28866004.jpg)

    03. What is a CDN? | How do CDNs work?
        ==> A content delivery network (CDN) refers to a geographically distributed group of servers 
            which work together to provide fast delivery of Internet content.
        ==> A CDN allows for the quick transfer of assets needed for loading Internet content 
            including HTML pages, javascript files, stylesheets, images, and videos.
        (Link: https://www.cloudflare.com/en-gb/learning/cdn/what-is-a-cdn/)

    04. V8 Engine
    05. Browser Render Tree
    06. JavaScript is a single-threaded, non-blocking, asynchronous, concurrent programming language with lots of flexibility.
    07. Event Loop

    ------------------------------------------------------------------------------------------------------------------------------------------

    # JavaScript execute V8 engine --> Interpret + Just in time Compilation (JIT Compiler)
    # JavaScript work sequentially and use Event Loop to handle which is Non-Blocking and Asynchronous
    # Event Loop contain Stack, Queue, Heap and CallBack
    # Understanding JavaScript — Heap, Stack, Event-loops and Callback Queue
      (Link: https://javascript.plainenglish.io/understanding-javascript-heap-stack-event-loops-and-callback-queue-6fdec3cfe32e)
    # Handling I/O is typically performed via events and callbacks
    # Call Stack - A call stack is a mechanism for an interpreter to keep track of its place in a script. 
      (Link: https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)
    # Heap - Objects are allocated in a heap which is just a name to denote a large (mostly unstructured) region of memory.

    ------------------------------------------------------------------------------------------------------------------------------------------

    01. How Does Internet Works? Link: (https://www.youtube.com/watch?v=x3c1ih2NJEg)
    02. Render Tree = DOM Tree + CSSOM Tree 
        (Render --> To show or display)
        DOM Tree + Style Structures --> Render Tree --> Paint
    03. V8 Engine ==> Interpret + JIT Comiler + TurboFan (Optimization) + Garbage Collection
    04. Synchronouns Vs Asynchronouns
    05. setTimeout, setInterval, clearInterval, fetch, async await
        Synchronous:
            console.log, normal function
        Asynchronous: 
            setTimeout, SetInterval, fetch, async await
            # async await --> looks Synchronous but works Asynchronously
    06. JavaScript Event Loop and Concurrency
*/

