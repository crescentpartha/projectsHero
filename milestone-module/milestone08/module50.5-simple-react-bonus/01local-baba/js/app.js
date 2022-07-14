
// 50.5.1 When to use Array and when to use Object

// console.log('Hello');

let db = {};

const addToDb = item => {
    // To add an item to Object: (3 ways)
        // db.alom = 1; // system-01
        // db['alom'] = 1; // system-02
        // db[item] = 1; // system-03

    // check data exist in the localStorage
    const storedTracker = localStorage.getItem('checka-tracker');
    if (storedTracker) {
        // console.log(typeof storedTracker);
        db = JSON.parse(storedTracker);
    }

    // to check any property is exist or not in the Object
    if (item in db) {
        db[item] = db[item] + 1; 
    }
    else {
        db[item] = 1;
    }

    // set to localStorage
    localStorage.setItem('checka-tracker', JSON.stringify(db));
}

// to remove item
const removeItem = item => {
    const storedTracker = localStorage.getItem('checka-tracker');
    if (storedTracker) {
        const storedObject = JSON.parse(storedTracker);
        delete storedObject[item];
        localStorage.setItem('checka-tracker', JSON.stringify(storedObject));
    }
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


// 50.5.2 Read, Write data stored in local storage

/* 
    There are 2 ways to check any property is exist or not in the Object:
        - property is exist or not

    In Console Panel:
        1. db // {}
        2. addToDb('bappa') // {bappa: 1}
        3. addToDb('bappa') // {bappa: 2}
        4. addToDb('bappa') // {bappa: 3}
        5. addToDb('jashim') // {bappa: 3, jashim: 1}
*/

/* 
    Many ways to put data in the browser: 
        1. Local Storage
        2. Session Storage
        3. IndexedDB
        4. Web SQL
        5. Cookies

    There are some given function to put, retrieve, update, delete data from local storage.
        - Save data to localStorage
            - localStorage.setItem('key', JSON.stringify('value'));

        - Get saved data from localStorage
            - localStorage.getItem('key')
            - JSON.parse(localStorage.getItem('key'));

        - Remove saved data from localStorage
            - localStorage.removeItem('key');

        - Remove all saved data from localStorage
            - localStorage.clear();
*/

/*  
    Local Storage Conditions:
        1. any primitive data, we can put directly in the browser. 
        2. But any non-primitive data like (array, object), we can't put directly in the browser. 
            - We need to convert as a string to put data (JSON.stringify(db)). 
            - We also need to convert as a JSON to get data (JSON.parse(localStorage.getItem('checka-tracker')))

    In Console Panel: (primitive data)
        1. localStorage.setItem('fruit', 'mango')
        2. localStorage.setItem('age', '13')
    
    In Console Panel: (non-primitive data)
        1. db // {}
        2. addToDb('bappa') // {bappa: 1}
        3. addToDb('bappa') // {bappa: 2}
        4. addToDb('bappa') // {bappa: 3}
        5. addToDb('jashim') // {bappa: 3, jashim: 1}

        1. localStorage.setItem('checka-tracker', db) // [object Object]
        2. localStorage.setItem('checka-tracker', JSON.stringify(db)) // {"bappa": 3, "jashim": 1}
        
        1. localStorage.getItem('age') // '13'
        2. localStorage.getItem('fruit') // 'mango'
        3. localStorage.getItem('checka-tracker') // '{"bappa":3,"jashim":1}'
        4. typeof localStorage.getItem('checka-tracker') // 'string'
        5. localStorage.getItem('checka-tracker')['jashim'] // undefined

        1. localStorage.getItem('checka-tracker') // '{"bappa": 3, "jashim": 1}'
        2. JSON.parse(localStorage.getItem('checka-tracker')) // ▸ {"bappa": 3, "jashim": 1}
*/

// 50.5.3 A very simple way to add or remove key to an object

/* 
    In Console Panel:
        1. addToDb('bappa')
        2. addToDb('bappa')
        3. addToDb('mahi')
            Application: checka-tracker: {"bappa":2,"mahi":1}

    ------------------------------------------------------------

        After Reloading: Because we set, const db = {}; | We didn't read actually.
        4. addToDb('manna')
            Application: checka-tracker: {"manna":1}

    ------------------------------------------------------------

        1. addToDb('bappa')
        2. addToDb('suchorita')
        3. addToDb('mahi')        
            Application: checka-tracker: {"bappa":1,"suchorita":1,"mahi":1}
        4. removeItem('bappa')
            Application: checka-tracker: {"suchorita":1,"mahi":1}
*/

