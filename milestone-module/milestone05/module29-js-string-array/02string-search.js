
// 29.2 Apply Search includes, indexOf, startswith, endswith

const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight Phone',
    'Dell yellow laptop with black camera',
    '1X59 Lenovo commercial yoga laptop',
    'LG supernova laptop',
    'HTC low price Phone',
    'Dell purple color phone with Laptop'
];

// We can find the position or index by using indexOf() function;
// indexOf --> (0-n) & -1
// Mango --> n = index 2 | p = index -1

const searching1 = 'laptop';
const searching2 = 'dell';

const output1 = [];
const output2 = [];
const output3 = [];
const output4 = [];

// Using indexOf
for (const product of products) {
    // if (product.indexOf(searching) != -1) {
    if (product.toLowerCase().indexOf(searching1.toLowerCase()) != -1) {
        output1.push(product);
    }
}
console.log(output1);

// Using includes
for (const product of products) {
    // if(product.includes(searching)) {
    if (product.toLowerCase().includes(searching1.toLowerCase())) {
        output2.push(product);
    }
}
console.log(output2);

// Using startsWith
for (const product of products) {
    if (product.toLowerCase().startsWith(searching2.toLowerCase())){
        output3.push(product);
    }
}
console.log(output3);

// Using endsWith
for (const product of products) {
    if (product.toLowerCase().endsWith(searching1.toLowerCase())) {
        output4.push(product);
    }
}
console.log(output4);

