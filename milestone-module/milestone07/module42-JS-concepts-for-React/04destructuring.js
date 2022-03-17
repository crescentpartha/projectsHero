
// 42.4 Array and object Destructuring, Optional Chaining

/* 1. Array Destructuring */

const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];

const [x, y] = numbers;
console.log(x, y); // 42 65

/* ----------------------------- */

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
console.log(boxify(90, 34)); // [ 90, 34 ]

const [first, second] = [90, 34];
// const [first, second] = boxify(90, 34);
console.log(first, second); // 90 34

/* ----------------------------- */

const student = {
    name: 'Amir Khan', 
    age: 32, 
    movies: ['3-Idiots', 'Dangal']
};
// console.log(student.movies); // [ '3-Idiots', 'Dangal' ]

// const [firstMovie, secondMovie] = ['3-Idiots', 'Dangal'];
const [firstMovie, secondMovie] = student.movies;
console.log(firstMovie, secondMovie); // 3-Idiots Dangal


/* 2. Object Destructuring */

const { name, age } = { name: 'Dev', age: 14 };
const { name1, age1 } = { id: 12, name: 'Dev', salary: 3400, age: 14 };

const employee = {
    ide: 'VS Code', 
    designation: 'developer', 
    machine: 'mac', 
    languages: ['html', 'css', 'js'], 
    specification: {
        height: 66, 
        weight: 67, 
        address: 'sylhet', 
        drink: 'water', 
        watch: {
            color: 'black', 
            price: 500, 
            brand: 'garmin'
        }
    }
};

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { color, brand } = employee.specification.watch;
console.log(machine, address, brand); // mac sylhet garmin

/* 3. Optional Chaining */

const { price } = employee?.specification?.watch;
console.log(price); // 500
const { style } = employee?.specification?.watch;
console.log(style); // undefined
const { drink } = employee?.specification?.watch;
console.log(style); // undefined

/* 
    Optional Chaining is used to show undefined instead of causing error message.
*/
