
// Explore break and continue for selecting some products

const products = [
    {name: 'iphone 14', price: 70000},
    {name: 'samsung galaxy 14', price: 6000},
    {name: 'dell laptop', price: 50000},
    {name: 'lenovo laptop yoga', price: 55000},
    {name: 'Asus afsus laptop 14', price: 35000},
    {name: 'smart watch samsung', price: 4000},
    {name: 'apple watch', price: 9000},
    {name: 'plus one phone 4', price: 27000}
];

// for (const product of products) {
//     if(product.price < 5000){
//         break;
//     }
//     console.log(product);
// }

for (const product of products) {
    if(product.price < 10000) {
        continue;
    }
    console.log(product);
}
console.log('after the loop');


