
// 36.3 Keys, values, entries, delete, seal, freeze

/* 
    Object.keys = getting all properties names
    Object.values = getting all property values
    Object.entries = getting all pairs
    delete objName.property = delete any pair
    Object.seal = (can't) Deletion Insertion | (can) Modification
    Object.freeze = (can't) Deletion Insertion Modification
*/

// key:value = color: 'yellow'
const bottle = { 
    color: 'yellow', 
    hold: 'water', 
    price: 50, 
    isCleaned: true 
};

// 01. getting all properties names | Object.keys(objectName)
const keys = Object.keys(bottle);
console.log(keys); // [ 'color', 'hold', 'price', 'isCleaned' ]

// 02. getting all property values | Object.values(objectName)
const values = Object.values(bottle);
console.log(values); // [ 'yellow', 'water', 50, true ]

// 03. getting all pairs
const pairs = Object.entries(bottle);
console.log(pairs); 
/* Output: Two dimensional array
[
    [ 'color', 'yellow' ],
    [ 'hold', 'water' ],
    [ 'price', 50 ],
    [ 'isCleaned', true ]
] 
*/

// 04. If we seal any object, then we can't delete any property from this object but change any property value.
/* Object.seal():
    1. can't Deletion of existing property
    2. can't Insertion of new Property
    3. Modification of new property
*/
Object.seal(bottle);

// 05. If we freeze any object, then 
/* Object.freeze():
    1. can't Deletion of existing property
    2. can't Insertion of new Property
    3. can't Modification of new property
*/
// Object.freeze(bottle);

// 06. delete any property:value pair | delete objName.property;
delete bottle.isCleaned;
// console.log(bottle); // { color: 'yellow', hold: 'water', price: 50 }
console.log(bottle); // { color: 'yellow', hold: 'water', price: 50, isCleaned: true }

bottle.price = 100; // modify existing property
bottle.height = 16; // can't insert new property
console.log(bottle); // { color: 'yellow', hold: 'water', price: 100, isCleaned: true }


