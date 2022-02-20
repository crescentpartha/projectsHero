
// 32.8 (advanced) inheritance, extends class, super, class method

/* 
    1. inheritance
    2. extends class
    3. super constructor
    4. class method
    Visit: Classes --> MDN Web Docs
*/

class TeamMember{
    name; 
    designation = 'Student Care Web Dev';
    address = 'BD';
    // super constructor
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}

// create class
class Support extends TeamMember{
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
        designation: 'Student Care Web Dev',
        address: 'BD',
        groupSupportTime: 11
    }
*/

class StudentCare extends TeamMember{
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
        designation: 'Student Care Web Dev',
        address: 'Mumbai',
        id: 23
    }
*/


class NeptuneDev extends TeamMember{
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
        designation: 'Student Care Web Dev',
        address: 'Bangladesh', 
        codeEditor: 'VSCode'
    }
*/

