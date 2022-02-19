
// 32.5 Map string array, array of objects map, foreach

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const fLengths = friends.map(friend => friend.length);
console.log(fLengths); // [ 9, 10, 9, 12 ]


const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 50, color: 'white' }
];
const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);

console.log(productNames); 
/* 
    Output:
    [
        'water bottle',
        'mobile phone',
        'smart watch',
        'sticky note',
        'water glass'
    ]
*/


/* 
    map() Vs forEach()
    ....................
    map(): call function for each element and returns all function in a new array
    forEach(): call function for each element of an array But It returns nothing.

    Note: Use map() if you want to use/reuse new array
*/

// products.map(product => console.log(product));
products.forEach(product => console.log(product));
/* Output: 
{ name: 'water bottle', price: 50, color: 'yellow' }
{ name: 'mobile phone', price: 15000, color: 'black' }
{ name: 'smart watch', price: 3000, color: 'black' }
{ name: 'sticky note', price: 30, color: 'pink' }
{ name: 'water glass', price: 50, color: 'white' } */


