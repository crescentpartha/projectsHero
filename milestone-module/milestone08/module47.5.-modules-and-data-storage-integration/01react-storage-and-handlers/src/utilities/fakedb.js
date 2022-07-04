// use local storage to manage cart data
const addToDb = id => {
    // Store multiple data in an Object with Local Storage
    let shoppingCart;

    /// get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        // console.log(typeof storedCart);
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }

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

export {addToDb};