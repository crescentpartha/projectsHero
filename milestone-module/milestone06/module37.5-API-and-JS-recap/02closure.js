
// 37.5.3 Understanding closure and return multiples from function 

/* Closure: 
    If I call/return one function inside of another function then internal function can access/modify outer function properties 
    but from outside(outer_function) we can't access/modify because it creates closure(closed environment). 
*/

/* What is a Closure in JS
    ==> A closure gives you access to an outer function's scope from an inner function
    ==> A closure is a function having access to the parent scope, even after the parent function has closed.
    ==> If I return one function to another function and If it access outter function's variable, 
        then it create closure / encapsulation / private reference / private variable.
        It takes the reference of outter variables that we can't access from outside. 
        But If we call it then it increase by taking reference.
*/

/* 
const bank = owner => {
    balance = 0; 
    return amount => {
        balance += amount;
        return balance;
    }
}

const IFICBank = bank('Mofiz');
console.log(IFICBank(100)); // 100
console.log(IFICBank(500)); // 600
console.log(IFICBank(300)); // 900
console.log(IFICBank.balance); // undefined
console.log(IFICBank(200)); // 1100

*/

const bank = owner => {
    balance = 0;
    return {
        deposit: amount => {
            balance += amount;
            return balance;
        },
        withdraw: amount => {
            balance -= amount;
            return balance;
        }
    }
}

const IFICBank = bank('Mofiz');
console.log(IFICBank.deposit(500)); // 500
console.log(IFICBank.deposit(300)); // 800
console.log(IFICBank.deposit(100)); // 900
console.log(IFICBank.balance); // undefined
console.log(IFICBank.deposit(200)); // 1100
console.log(IFICBank.withdraw(200)); // 900
console.log(IFICBank.withdraw(100)); // 800


