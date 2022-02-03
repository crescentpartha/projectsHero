
// 01. Write a function that output a multiplication table of 13

function multiplicationTable (num) {
    console.log('Multiplication Table of', num);
    for (let i=1; i<=10; i++){
        console.log(num, 'X', i, '=', num*i);
    }
}
multiplicationTable(13);

// 02. Write a function that take user name as a uppercase letter and return output as a lowercase letter

function uppercaseToLowercase (first) {
    console.log(first.toLowerCase()); // sust
    const name = first.toUpperCase();
    return name;
}
const text = uppercaseToLowercase('SUST');
console.log(text); // SUST

// 03. Write a function that takes your first name and last name then returns your full name

function fullName (first, second) {
    console.log(first.toLowerCase() + ' ' + second.toLowerCase()); // crescent deb nath partha
    const name = first.toUpperCase() + ' ' + second.toUpperCase();
    return name;
}
const name = fullName('creScent deb nath', 'parTha');
console.log(name); // CRESCENT DEB NATH PARTHA

// 04. Write a function that take a number and return it's square

function square (n) {
    return n*n;
}
const n = square(5);
console.log(n); // 25

// 05. Write a object called pizza and define it's property then print pepperoni

const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
};

console.log(pizza.toppings[2]); // pepperoni

