
// 42.3 Array methods map filter find forEach

/* Array of Object */
const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },
];

// 1. map --> return array of output
const brands = products.map(product => product.brand);
console.log(brands); // [ 'lenovo', 'iphone', 'casio', 'ribon', 'canon' ]
const prices = products.map(product => product.price);
console.log(prices); // [ 3200, 7000, 3000, 300, 9000 ]


// 2. forEach --> unreturn | console only output
products.forEach(product => console.log(product));
/* Output: 
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' }
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' }
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' }
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' }
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' } 
*/
products.forEach(product => console.log(product.color)); // silver golden yellow black gray
products.forEach(product => {

});


// 3. filter --> works according to condition | return all matches in array
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);
/* Output:
    [
        { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
        { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
        { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' }
    ] 
*/

const specificName = products.filter(p => p.name.includes('n'));
console.log(specificName);
/* Output: 
    [
        { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
        { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' }
    ] 
*/


// 4. find  --> works according to condition | return only first match
const special = products.find(p => p.name.includes('n'));
console.log(special); // { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' }



