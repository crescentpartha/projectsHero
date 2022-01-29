
// Declare multiple objects with multiple properties

// Property --> key:value (key:value pair in object called property)

// We can write object using one line or multiple line.
var student1 = {id: 23, name:'Crescent Partha', marks: 90, phone: 237392938 };
// Or 
var student2 = {
    id: 23, 
    name:'Crescent Partha', 
    marks: 90, 
    phone: 237392938 
};

var mobile = {
    color: 'black',
    price: 16000,
    screenSize: 5.5,
    storage: '16gb'
};

var book = {
    title: 'Start With Why',
    author: 'Simon Sinek', 
    price: 200, 
    pages: 246, 
    publisher: 'penguin'
};
console.log(book);
// Output:
//     {
//         title: 'Start With Why',
//         author: 'Simon Sinek',
//         price: 200,
//         pages: 246,
//         publisher: 'penguin'
//     }

console.log(book.title); // Start With Why
