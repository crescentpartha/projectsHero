
/* 
    Cookies Vs localStorage Vs sessionStorage:

    Cookies = Store Information in browser | Send to the server
    localStorage = Store Information in browser | Modify | Add | can't send to the server | send to the server as a api value using JS
    sessionStorage = Store Information in browser | Modify | Add | can't send to the server | send to the server as a api value using JS

    localStorage = sessionStorage (work similerly)

    -------------------------------------------------------------------------------------------------------------------------------------
   
    Cookies Vs localStorage Vs sessionStorage:

    sessionStorage: 
        1. stores data only for a session (in browser)
        2. data is never transferred to the server
        3. can only be read on client-side
        4. storage limit is about 5-10MB
        5. opening multiple tabs/windows with the same URL creates sessionStorage for each tab/window

    localStorage: 
        1. stores data with no expiration date (in browser)
        2. data is never transferred to the server
        3. can only be read on client-side
        4. storage limit is about 5MB

    Cookie: 
        1. Stores data Its expiration varies based on the type 
           and the expiration duration can be set from either server-side or client-side . (In browser & server)
        2. Stores data that has to be sent back to the server 
        3. Cookies are primarily for server-side reading (can also be read on client-side)
        4. Size must be less than 4KB.
        5. Cookies can be made secure by setting the httpOnly flag as true for that cookie. 
           This prevents client-side access to that cookie.

    Article: https://krishankantsinghal.medium.com/local-storage-vs-session-storage-vs-cookie-22655ff75a8
             #:~:text=Cookies%20are%20primarily%20for%20server,as%20true%20for%20that%20cookie.
    Image: https://miro.medium.com/max/700/1*dMoXCZgsdlQoSITo5BdXoA.png
    
*/

// 39.8 (advanced) retrieve local storage value and display them

const displayLocalStorageCart = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProduct(name);
    }
}


// 39.7 Dynamically set and read from local & session storage

const addItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    // return if name is empty
    if (!name) {
        return;
    }
    // display in the UI
    displayProduct(name);
    // add to the local storage
    addProductToCart(name);
    // clear
    nameField.value = '';
}
const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}
// to check cart have or not.
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}
const addProductToCart = name => {
    const cart = getCart();
    // cart[name] = 1;
    if(cart[name]){
        cart[name] = cart[name] + 1; 
    }
    else {
        cart[name] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

displayLocalStorageCart();
