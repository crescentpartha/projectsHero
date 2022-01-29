
// Module summary and JS recap

var skyColor = 'white';

var phones = ['iphone', 'shaomi', 'samsung', 'lg', 'htc'];
console.log(phones); // [ 'iphone', 'shaomi', 'samsung', 'lg', 'htc' ]
phones[3] = 'walton';
console.log(phones); // [ 'iphone', 'shaomi', 'samsung', 'walton', 'htc' ]

// check oppo not exists in an array
if (phones.indexOf('oppo') == -1) {
    console.log('opps! amir khan oppo is missing');
}

// if lg is available
if (phones.indexOf('lg') != -1) {
    console.log('Lg is available now');
}
else {
    console.log('Lg is not available now');
}

// loop
var num = 0, count = 0, cnt = 0;
while(num <= 10){
    num++;
    count += num;
}
console.log(count); // 66


for (var i=0; i<phones.length; i++){
    cnt++;
}
console.log(cnt); // 5
console.log(phones.length); // 5

// function 
function addThreeNumbers(n1, n2, n3){
    var total = n1 + n2 + n3;
    return total;
}

console.log(addThreeNumbers(87, 41, 45)); // 173

// object
var microphone = {
    brand: 'blue yeti',
    price: 120,
    color: 'black'
};
console.log(microphone.color); // black
console.log(microphone); // { brand: 'blue yeti', price: 120, color: 'black' }

// switch
var roll = 25;
switch(roll){
    case 20:
        console.log('Roll no is ', roll);
        break;
    
    case 21:
        console.log('Roll no is ', roll);
        break;
    
    case 22:
        console.log('Roll no is ', roll);
        break;
    
    case 23:
        console.log('Roll no is ', roll);
        break;
    default:
        console.log('Roll no is not found');
}

