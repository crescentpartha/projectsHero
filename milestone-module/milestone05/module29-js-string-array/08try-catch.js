
// 29.8 Different types of Error object and explore Try-catch

/* 
Keyword: JavaScript Errors | List of errors --> try, catch, throw, finally
    1. The try statement defines a code block to run (to try).
    2. The catch statement defines a code block to handle any error.
    3. The finally statement defines a code block to run regardless of the result.
    4. The throw statement defines a custom error.

    1.  try statement --> Let you test a block of code to error
    2.  catch statement --> Handle the error
    3.  finally statement --> Let you execute code after try & catch regardless of the result.
    4.  throw statement --> Create custom error
*/

/* 
Error types: List of errors
    1. TypeError
    2. SyntaxError
    3. ReferenceError
    4. RangeError
    5. EvalError
    6. URIError
    7. AggregateError
    8. InternalError
*/

// const name = 'ami';
// name = 'tumi'; // TypeError: Assignment to constant variable.
// console.log(name);

// for (let i=0; i<10 i++) { // SyntaxError: Unexpected identifier
//     console.log(i);
// }

// const student; // SyntaxError: Missing initializer in const declaration
// console.log(student.name);

// const student = undefined;
// console.log(student.name); // TypeError: Cannot read property 'name' of undefined

// const student = undefined;
// console.log(student()); // TypeError: student is not a function


// Explore try-catch

const myName = 'ami';
// let myName = 'ami'; // SyntaxError: Identifier 'myName' has already been declared

/* 
try {
    myName = 'tumi';
}
catch(e_ex_error) [ // SyntaxError: Unexpected token '['

] */



try {
    myName = 'tumi';

} catch(e_ex_error) {

    console.log('Getting Error: ', e_ex_error); // Getting Error:  TypeError: Assignment to constant variable.
}
console.log(myName); // tumi (let) | ami (const)



try {
    throw new Error('Whoops!')
} catch (e) {
    console.error(e.name + ': ' + e.message) // Error: Whoops!
}
console.log('\n');



try {
// { // pass time exceed error // SyntaxError: Unexpected token 'catch'
    console.log('Start of try runs');
    unicycle;
    console.log('End of try runs -- never reached');

} catch (err) {

    // console.log('Error has occured: ' + err.stack);
    console.log('Error has occured: ' + err);

} finally {
    console.log('This is always run');
}

console.log('...Then the execution continues\n');


/* 
    Output:
        Start of try runs
        Error has occured: ReferenceError: unicycle is not defined // (Name: Message)
        This is always run
        ...Then the execution continues
*/

let json = '{ "age": 30 }';

try {

    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name");
    }

    console.log( user.name );

} catch(e) {
    console.log("JSON Error: " + e.message); // JSON Error: Incomplete data: no name
    // console.log("JSON Error: " + e.name); // JSON Error: SyntaxError
    // console.log("JSON Error: " + e); // JSON Error: SyntaxError: Incomplete data: no name
}

// https://javascript.info/try-catch
