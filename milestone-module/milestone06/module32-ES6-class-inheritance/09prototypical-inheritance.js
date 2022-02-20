
// 32.9 (advanced) Prototypical inheritance and module summary

/* 
    1. inheritance
    2. extends class
    3. super constructor
    4. class method
    5. prototypical inheritance

    Visit: Classes --> MDN Web Docs
    keyboard Shortcut: Select ClassName then press F12 to go this class
*/

class TeamMember{
    name; 
    address = 'BD';
    // super constructor
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}

// create class
class Support extends TeamMember{
    designation = 'Support Web Dev';
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time; 
        // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    }
    // create method
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

const amir = new Support('Amir Khan', 'BD', 11);
const salman = new Support('Solaiman Khan', 'Dubai', 4);
const sharuk = new Support('SRK Khan', 'India', 5);
const akshay = new Support('Akshay Kumar', 'Dubai', 10);

console.log(amir);
/* Output:
    Support {
        name: 'Amir Khan',
        address: 'BD',
        designation: 'Support Web Dev',
        groupSupportTime: 11
    }
*/

class StudentCare extends TeamMember{
    designation = 'Care Web Dev';
    id = 23;
    buildARoutine(student){
        console.log(this.name, 'Build a routine for', student);
    }
}

const alia = new StudentCare('Alia Bhatt', 'Mumbai');
alia.buildARoutine('alia');
console.log(alia);

/* Output:
    Alia Bhatt Build a routine for alia
    StudentCare {
        name: 'Alia Bhatt',
        address: 'Mumbai',
        designation: 'Care Web Dev',
        id: 23
    }
*/


class NeptuneDev extends TeamMember{
    designation = 'Neptune Web Dev';
    codeEditor;
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version){
        console.log(this.name, 'release app version', version);
    }
}

const newton = new NeptuneDev('Newton', 'Bangladesh', 'VSCode');
newton.releaseApp('2.3.001');
console.log(newton);

/* Output:
    Newton release app version 2.3.001
    NeptuneDev {
        name: 'Newton',
        address: 'Bangladesh', 
        designation: 'Neptune Web Dev',
        codeEditor: 'VSCode'
    }
*/

// Prototypical inheritance
const ash = new NeptuneDev('Ash', 'Mumbai', 'Android Studio');
ash.releaseApp('1.4.5'); //Ash release app version 1.4.5
console.log(ash.name); // Ash

// Paste Code + Use console panel in inspect 

// Inheritance and the prototype chain
/* 
    1. Each object has a private property which holds a link to another object called its prototype.
    2. In JavaScript, property shared from one object to another object by chain, it's called prototype chain.
    3. null has no prototype
*/
console.log(ash.__proto__); // TeamMember {}
console.log(ash.__proto__.__proto__); // {}
console.log(ash.__proto__.__proto__.__proto__); // [Object: null prototype] {}
console.log(ash.__proto__.__proto__.__proto__.__proto__); // null

console.log(ash.hasOwnProperty); // [Function: hasOwnProperty]
console.log(ash.hasOwnProperty('designation')); // true
console.log(ash.hasOwnProperty('hasOwnProperty')); // false


