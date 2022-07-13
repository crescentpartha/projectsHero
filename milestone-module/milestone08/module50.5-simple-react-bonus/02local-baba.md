# Module 50.5 - Simple React Bonus

## 50.5.1 `When to use Array` and `when to use Object`

⫸ __How to put data__, it depends on __2 things__:
1. What data we put
2. How to use data

``` JavaScript
// console.log('Hello');

const fruits = [{name: 'pineapple'}, {name: 'mango'}, {name: 'papaya'}];
```

⫸ `If I want to know:` How many times a particular person stood for election?

``` JavaScript
// This time as a data structure Object is more useful rather than array.
const election = ['razzak', 'alomgir', 'jayed', 'jayed', 'jayed', 'nepun', 'jayed'];

const election2 = {
    razzak: 1, 
    alomgir: 1, 
    jashim: 1, 
    jayed: 4
}
```

⫸ __Implementation:__ `Data Store in Local Storage`

``` JavaScript
const db = {};

const addToDb = item => {
    // To add an item to Object: (3 ways)

    // db.alom = 1; // system-01
    // db['alom'] = 1; // system-02
    db[item] = 1; // system-03

    console.log(db);
}

/* 
    In Console Panel:
        1. db // {}
        2. addToDb('manna') // {manna: 1}
        3. addToDb('sani') // {manna: 1, sani: 1}
        4. addToDb('mahi') // {manna: 1, sani: 1, mahi:1}
        // If we add any item more than one times, it shows only once. Because we set "db[item] = 1;", we didn't set any condition.
        5. addToDb('manna') // {manna: 1, sani: 1, mahi:1}
*/
```
