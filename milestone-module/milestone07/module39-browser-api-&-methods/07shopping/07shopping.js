
// 39.7 Dynamically set and read from local & session storage

const addItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    // display in the UI
    displayProduct(name);
    // add to the local storage
    addProductToCart(name);
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
    cart[name] = 1;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}


