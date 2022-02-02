
// Find the cheapest phone from an array of phone objects

// Array of Object
const phones = [
    {name: 'samsung s5', price: 45000, camera: 10, storage: 32},
    {name: 'walton m32', price: 15000, camera: 8, storage: 8},
    {name: 'shaomi m3', price: 12000, camera: 9, storage: 16},
    {name: 'oppo a2', price: 17000, camera: 15, storage: 64},
    {name: 'nokia n95', price: 8000, camera: 12, storage: 4},
    {name: 'htc h81', price: 25000, camera: 18, storage: 16}
];


function findCheapestPhone (phone) {
    let cheapest = phones[0];
    for(const phone of phones){
        // console.log(phones);
        console.log(phone);

        // we can't compare object with another object
        // if (phone < cheapest) {
        //     cheapest = phone;
        // }

        // compare price only
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    console.log('\n');
    return cheapest;
}

const cheapestPhone = findCheapestPhone(phones);
console.log(cheapestPhone);

