
// (Advanced) Find the matching product by searching products

const products = [
    {name: 'iphone 14', price: 70000},
    {name: 'samsung galaxy 14', price: 60000},
    {name: 'dell laptop', price: 50000},
    {name: 'lenovo laptop yoga', price: 55000},
    {name: 'Asus afsus laptop 14', price: 35000},
    {name: 'smart watch samsung', price: 7000},
    {name: 'apple watch', price: 20000},
    {name: 'plus one phone 4', price: 27000}
];

function searchProducts(products, searchText) {

    const result = [];
    for (const product of products) {
        if (product.name.includes(searchText)) {
            result.push(product);
        }
    }
    return result;

    // for (const product of products) {
    //     // console.log(product);

    //     // console.log(product.name);

    //     // if (product.name.includes('watch')) {
    //     //     console.log(product.name);
    //     // }

    //     if (product.name.includes(searchText)) {
    //         console.log(product.name);
    //     }
    // }

}

// searchProducts(products);

// searchProducts(products, 'laptop');

const matched = searchProducts(products, 'laptop');
console.log(matched);


