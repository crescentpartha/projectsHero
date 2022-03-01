
// 36.7 (advanced) Difference between bind, call and apply

/* Why we use bind, call and apply?
    ==> To borrow method from another object
    ==> To use method of one Object for another Object
*/

/* Difference among call(), apply() and bind()
    1. call()
        Execution: At the time of binding.
        Parameter: Any number of arguments one by one.
    2. apply()
        Execution: At the time of binding.
        Parameter: Array[]
    3. bind()
        Execution: At the time when we execute the return function
        Parameter: Array and any number of arguments
*/

const kibria = {
    id: 101,
    name: 'RJ Kibria',
    money: 5000,
    treatDey: function (expense, tips, tax) {
        this.money = this.money - expense - tips - tax;
        console.log(this);
        return this.money;
    }
};

const heroBalam = {
    id: 102, 
    money: 6000, 
    name: 'Hero Balam'
};

const normalGolam = {
    id: 103, 
    money: 8000, 
    name: 'Normal Golam'
};

// call
kibria.treatDey.call(heroBalam, 500, 100, 10); // { id: 102, money: 5390, name: 'Hero Balam' }
kibria.treatDey.call(heroBalam, 300, 50, 5); // { id: 102, money: 5035, name: 'Hero Balam' }

// apply
kibria.treatDey.apply(heroBalam, [500, 100, 10]); // { id: 102, money: 4425, name: 'Hero Balam' }
kibria.treatDey.apply(heroBalam, [1000, 200, 20]); // { id: 102, money: 3205, name: 'Hero Balam' }

kibria.treatDey.apply(normalGolam, [300, 50, 5]); // { id: 103, money: 7645, name: 'Normal Golam' }
