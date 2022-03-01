
// 36.8 (super advanced) Understand this keyword in JavaScript

// Need to watch again
// Use console panel

/* 
    1. This is a execution context.
    2. If Regular method, then what have in right side is context.
    3. If Arrow function, then catch context according to upper level
    4. If click any element of dom, then that event will be this
    5. If event is event handler of dom's element (that will execute later), then this will depend on calling in function. 
*/
/* 
    1. This হচ্ছে execution context.
    2. Regular method হলে বাম পাশে যে আছে সেটাকে context হবে।
    3. Arrow function হলে উপরের level অনুসারে context ধরবে।
    4. কোনো dom এর element এ click করলে, সেই event টাই This বুঝাবে।
    5. Dom এর element এর event টা কোনো event handler হলে (যেটা পরে execute হবে), 
       তাহলে function টা calling এর উপর This নির্ভর করবে।
*/

// console.log(this);
const kibria = {
    id: 101,
    name: 'RJ Kibria',
    money: 5000,
    treatDeyArrow: () => {
        console.log(this);
    },
    treatDeyInside: function(){
        const myArrow = () => console.log(this);
        myArrow();
    },
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log('hero555', this);
        return this.money;
    }
};

const heroBalam = {
    id: 102, 
    money: 6000, 
    name: 'Hero Balam'
};

kibria.treatDey(500);
/* 
hero555 {
  id: 101,
  name: 'RJ Kibria',
  money: 4500,
  treatDey: [Function: treatDey]
}
*/

function add() {
    console.log(this);
}

kibria.treatDey();
kibria.treatDeyArrow();
kibria.treatDeyInside();
