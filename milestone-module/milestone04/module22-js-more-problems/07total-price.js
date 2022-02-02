
// Calculate the total cost of the products in a shopping cart

const products = [
    { name: 'laptop', price: 43000 },
    { name: 'shirt', price: 500 },
    { name: 'watch', price: 3600 },
    { name: 'phone', price: 55000 }
];

let totalPrice = 0;

for (const product of products) {
    // totalPrice = totalPrice + product; 
    totalPrice = totalPrice + product.price;
}
// console.log(totalPrice); // 0[object Object][object Object][object Object][object Object]
console.log(totalPrice); // 102100
console.log('\n');



const cart = [
    { name: 'laptop', price: 43000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 8 },
    { name: 'watch', price: 3600, quantity: 3 },
    { name: 'phone', price: 55000, quantity: 1 }
];

let cartTotal = 0;
for (const product of cart) {
    console.log(product);
    console.log('Per', product.name ,'price =', product.price);
    console.log('Total', product.quantity, product.name, 'Prices =', product.price * product.quantity);

    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}

console.log('Cart Total =', cartTotal); 

/* Output:
    { name: 'laptop', price: 43000, quantity: 1 }
    Per laptop price = 43000
    Total 1 laptop Prices = 43000
    { name: 'shirt', price: 500, quantity: 8 }
    Per shirt price = 500
    Total 8 shirt Prices = 4000
    { name: 'watch', price: 3600, quantity: 3 }
    Per watch price = 3600
    Total 3 watch Prices = 10800
    { name: 'phone', price: 55000, quantity: 1 }
    Per phone price = 55000
    Total 1 phone Prices = 55000
    Cart Total = 112800
*/

