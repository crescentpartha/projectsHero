
// 31.5 Templete string, multiple line string, dynamic string

const priya = 'Asif Akbar';
const meye = "Meye tumi ki dukkho chino";
const kobita = `Kobita tumi sopno charini`; // backtick sign

const multiLine = 'This is my first line.\n' + 'this is my second line \n' +
'third line test here\n' +
'fourth line text here\n';
console.log(multiLine); 
/* Output:
    This is my first line.
    this is my second line
    third line test here
    fourth line text here
*/

// Template Literals Or Template String --> We can write multiline

const multiLineNew = `This is multi line
this is second line
this is third line
fourth line
`;
console.log(multiLineNew);

/* Output:
    This is multi line
    this is second line
    this is third line
    fourth line
*/

// String Interpolation --> Syntax: ${...}
// We can use valid JavaScript in ${...}

const friends = ['abul', 'tabul', 'babul', 'kabul', 'sabul'];
const count = 5; 
const old = '<h3 class="friend-name">Friend-5</h3>';
const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>';
const new1 = `<h3 class="friend-name">Friend-${count}</h3>`; // Use Template string and String Interpolation
const new2 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;

console.log(new1); // <h3 class="friend-name">Friend-5</h3>
console.log(new2); // <h3 class="friend-name">Friend-5</h3>

const first = 'Mamun';
const last = 'Chowdhury';
const fullOld = 'This person name is ' + first + ' ' + last;
const fullNew = `This person name is: ${first} ${last}. Has money ${(friends.length+10) * 500}`;

console.log(fullNew); // This person name is: Mamun Chowdhury. Has money 7500

