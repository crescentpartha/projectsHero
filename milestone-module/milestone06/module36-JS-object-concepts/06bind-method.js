
// 36.6 (advanced) Use bind to borrow method from another object

/* We can use method of one Object for another Object | If any method is same to multiful object
    1. create common/parent class, then extend/inherit properties and include method in parent class.
    2. create Prototypical Inheritance - is a feature in javascript used to add methods and properties in objects.
    3. *take a method from one class, then call it to apply for another class | 
        (Use bind to borrow method from another object)
*/

const kibria = {
    id: 101,
    name: 'RJ Kibria',
    money: 5000,
    treatDey: function (expense) {
        this.money = this.money - expense;
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

kibria.treatDey(100);
/* Output:
{
  id: 101,
  name: 'RJ Kibria',
  money: 4900,
  treatDey: [Function: treatDey]
}
*/

const heroTreatDey = kibria.treatDey.bind(heroBalam);
heroTreatDey(500); // { id: 102, money: 5500, name: 'Hero Balam' }
heroTreatDey(300); // { id: 102, money: 5200, name: 'Hero Balam' }
heroTreatDey(500); // { id: 102, money: 4700, name: 'Hero Balam' }
kibria.treatDey(400);
/* Output:
{
  id: 101,
  name: 'RJ Kibria',
  money: 4500,
  treatDey: [Function: treatDey]
}
*/

const normalGolamTreatDey = kibria.treatDey.bind(normalGolam);
normalGolamTreatDey(500); // { id: 103, money: 7500, name: 'Normal Golam' }

