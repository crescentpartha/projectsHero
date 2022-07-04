// use local storage to manage cart data
const addToDb = id => {
    // Store multiple data in an Object with Local Storage
    let shoppingCart = {};
    // let shoppingCart;

    /// get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        // console.log(typeof storedCart);
        shoppingCart = JSON.parse(storedCart);
    }
    // else {
    //     shoppingCart = {};
    // }

    /// Add quantity
    // const quantity = localStorage.getItem(id);
    const quantity = shoppingCart[id];
    if (quantity) {
        // console.log('already exists');
        // const newQuantity = parseInt(quantity) + 1; 
        // localStorage.setItem(id, newQuantity);
        const newQuantity = quantity + 1; 
        shoppingCart[id] = newQuantity;
    }
    else {
        // console.log('new item');
        // localStorage.setItem(id, 1);
        shoppingCart[id] = 1; 
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

// Remove data to the local storage
const removeFromDb = id => {
    // console.log('inside fake db', id);
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            // console.log('exists in the cart');
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}  

// delete shopping cart
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb, 
    removeFromDb, 
    deleteShoppingCart
};