
// Multiple ways to get and set object property

// How to access a property in object;
// objectName.propertyName = computer.processor

var computer = {
    price: 29000, 
    storage: '156gb',
    color: 'silver',
    processor: 'intel i5'
}
console.log(computer); // { price: 29000, storage: '156gb', color: 'silver', processor: 'intel i5' }
console.log(computer.processor); // intel i5

var computerPrice = computer.price;
console.log(computerPrice); // 29000

// Set a object property value
computer.price = 30000;
console.log(computer.price); // 30000

// Different ways to set a value of an object property
// way-01
computer.price = 35000;
console.log(computer.price); // 35000

// way-02
// objectName["propertyName"];
computer["price"] = 40000;
console.log(computer.price); // 40000

// way-03
var priceProperty = "price";
computer[priceProperty] = 45000;
console.log(computer.price); // 45000

var storageProperty = 'storage';
computer[storageProperty] = '512gb';
console.log(computer.storageProperty); // undefined
computer['storage'] = '1tb';
console.log(computer.storage); // 1tb
computer.storage = '5tb';
console.log(computer.storage); // 5tb

