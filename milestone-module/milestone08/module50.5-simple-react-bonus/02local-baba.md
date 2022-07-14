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

## 50.5.2 Read, Write data stored in local storage

⫸ There are __2 ways__ to check any property is exist or not in the Object:
- property is __exist__ or __not__

``` JavaScript
const db = {};

const addToDb = item => {
    // Three ways to add a property to the Object:
        // db.alom = 1; // system-01
        // db['alom'] = 1; // system-02
        // db[item] = 1; // system-03

    // to check any property is exist or not in the Object
    if (item in db) {
        db[item] = db[item] + 1; 
    }
    else {
        db[item] = 1;
    }

    console.log(db);
}
```

``` JavaScript
In Console Panel:
    1. db // {}
    2. addToDb('bappa') // {bappa: 1}
    3. addToDb('bappa') // {bappa: 2}
    4. addToDb('bappa') // {bappa: 3}
    5. addToDb('jashim') // {bappa: 3, jashim: 1}
```

⫸ __Many ways to put data__ in the browser: 
- __Local Storage__
- __Session Storage__
- __IndexedDB__
- __Web SQL__
- __Cookies__

⫸ There are some given function to __put__, __retrieve__, __update__, __delete__ data from __local storage__.
- __Save data__ to localStorage
  - `localStorage.setItem('key', JSON.stringify('value'));`
- __Get saved data__ from localStorage
  - `localStorage.getItem('key');`
  - `JSON.parse(localStorage.getItem('key'));`
- __Remove saved data__ from localStorage
  - `localStorage.removeItem('key');`
- __Remove all saved data__ from localStorage
  - `localStorage.clear();`

⫸ `Local Storage Conditions:`
1. For any __primitive data__, we can put directly in the browser. 
2. But any __non-primitive data__ like (__array__, __object__), we can't put directly in the browser. 
   - We need to convert as a string to put data by `JSON.stringify(db)`. 
   - We also need to convert as a JSON(JavaScript Object Notation) to get data by `JSON.parse(localStorage.getItem('checka-tracker'))`

``` JavaScript
In Console Panel: (primitive data)
    1. localStorage.setItem('fruit', 'mango')
    2. localStorage.setItem('age', '13')

In Console Panel: (non-primitive data)
    1. db // {}
    2. addToDb('bappa') // {bappa: 1}
    3. addToDb('bappa') // {bappa: 2}
    4. addToDb('bappa') // {bappa: 3}
    5. addToDb('jashim') // {bappa: 3, jashim: 1}

    ----------------------------------------------------------------

    1. localStorage.setItem('checka-tracker', db) // [object Object]
    2. localStorage.setItem('checka-tracker', JSON.stringify(db)) // {"bappa": 3, "jashim": 1}

    ----------------------------------------------------------------
    
    1. localStorage.getItem('age') // '13'
    2. localStorage.getItem('fruit') // 'mango'
    3. localStorage.getItem('checka-tracker') // '{"bappa":3,"jashim":1}'
    4. typeof localStorage.getItem('checka-tracker') // 'string'
    5. localStorage.getItem('checka-tracker')['jashim'] // undefined

    ----------------------------------------------------------------

    1. localStorage.getItem('checka-tracker') // '{"bappa": 3, "jashim": 1}'
    2. JSON.parse(localStorage.getItem('checka-tracker')) // ▸ {"bappa": 3, "jashim": 1}
```



