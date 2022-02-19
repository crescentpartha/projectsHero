
// 32.7 (advanced) Class, Constructor, Method, create Object from class

/* 
    Class is used for creating same types of Object

    1. Class name start with uppercase 
    2. Can't write function keyword inside the Class
    3. Use direct function --> startSession(){...}
    4. Every Element end with Semi-colon; (Element --> property = value;)
*/

// create class
class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    // create constructor
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    // create method
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

// create object
const amir = new Support();

amir.startSession(); // undefined start a support session
console.log(amir); // Support { name: undefined, designation: 'Support Web Dev', address: undefined }

const salman = new Support('salman', 'Bangladesh');
salman.startSession(); // salman start a support session
console.log(salman); // Support { name: 'salman', designation: 'Support Web Dev', address: 'Bangladesh' }

console.log(amir, salman);
/* 
    Output:
    Support {
    name: undefined,
    designation: 'Support Web Dev',
    address: undefined
    } Support {
    name: 'salman',
    designation: 'Support Web Dev',
    address: 'Bangladesh'
    } 
*/

