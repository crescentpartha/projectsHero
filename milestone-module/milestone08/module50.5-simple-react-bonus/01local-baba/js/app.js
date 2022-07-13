
// 50.5.1 When to use Array and when to use Object

// console.log('Hello');

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
        // If we add any item more times, it shows only once. Because we set "db[item] = 1;", we didn't set any condition.
        5. addToDb('manna') // {manna: 1, sani: 1, mahi:1}
*/

 