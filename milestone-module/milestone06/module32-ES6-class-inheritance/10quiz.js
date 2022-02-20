
// Quiz:

function min(nums) { return Math.min(nums) }
console.log(min( [1,3,2 ])); // Nan

const cube=x=> x*x*x; 
console.log(cube(2)); // 8

const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b); // 3

const {x, y, z} = {x: 1, y1: 2, z: 3};
console.log(y); // undefined

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2); // if(n%2) = 1, 0, 1, 0, 1
console.log(output); // [ 1, 3, 5 ]

const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
console.log(friends.find(friend => friend.length == 5)); // Misha

const product = {
    name: 'Laptop', 
    model:'Yoga 3', 
    price:49000, 
    dusk: '512SSD'
}
const {price} = product;
console.log(price); // 49000

// How would you add the name variable in the template string below? 
const name = 'Adam Sandler';
const greeting = `Hello ${name}, welcome to the club`;
console.log(greeting); // Hello Adam Sandler, welcome to the club

const person = [ 
    {singer:'Atif aslam', address:'23 something street'}
]
console.log(person[0].address); // 23 something street
console.log(person[0].address[0]); // 2

const player = { 
    name: { 
        firstName: "Mashrafe", 
        lastName: "Murtaza" 
    }, 
    age: 38
};
console.log(player.firstName); // undefined

const players = [
    { name: { firstName: "Shakib", lastName: "Hasan" }, age: 34 },
    { name: { firstName: "Tamim", lastName: "Iqbal" }, age: 32 },
    { name: { firstName: "Mahmudullah", lastName: "Riyad" }, age: 36 },
    { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38 },
];
const firstName = players.map((player) => player.name.firstName);
console.log(firstName); // [ 'Shakib', 'Tamim', 'Mahmudullah', 'Mashrafe' ]

