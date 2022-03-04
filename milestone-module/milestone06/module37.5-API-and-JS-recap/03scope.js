
// 37.5.4 (advanced) Hoisting, block scope, scope chain

/* 
    # Execution context?
    ==> The environment that helps the code get executed is called the Execution Context. 
        It is the code that's currently running, and everything surrounding that helps to run it.

        # How JavaScript execution context works?
        ==> During the execution phase, the JavaScript engine executes the code line by line, assigns the values to variables, 
            and executes the function calls. For each function call, the JavaScript engine creates a new function execution context.

        # Global Execution Context Vs Function Execution Context?
        Global Execution Context: 
            1. It creates a global scope.
            2. It creates an object known as 'this'.
            3. It set up memory space for the functions and variables that are globally defined.
            4. The GEC, while setting any function declaration in the memory, 
               assigns a default value as 'undefined' to the variable declaration.
        Function Execution Context:
            1. It creates an argument object.
            2. It points to the Window object by default.
            3. It set up memory space for functions and variables that are defined within the function only.
            4. The FEC, while setting any function declaration in the memory, 
               assigns a default value as 'undefined' to the variable declaration. With this, it creates its own Execution Stack also.
    
    # Hoisting?
    ==> Hoisting is JavaScript's default behavior of moving declarations to the top.
    
    const & let = create block scope
    var = can't create block scope | will be hoist & ignore block
*/

const baperTaka = 10000;
function PatriChai(age, earning) {
    console.log(trueAge);
    var decision = canMarry(15000);
    console.log(decision);
    console.log(age);
    console.log(earning);
    var trueAge = age + 7; // Hoisting 
    // const trueAge = age + 7; // can't Hoisting 
    // var canMarray = function (expense) {
    function canMarry(expense) {
        const remaining = baperTaka + earning - expense;
        console.log(showing);
        if (remaining > 1000) {
            // const showing = 500; // const can't hoisting
            var showing = 500; // can hoisting
            // console.log(showing);
            return true;
        }
        else return false;
    }
}

PatriChai(21, 50000); 

