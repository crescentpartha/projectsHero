
// Remove Duplicate items from an array

const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

function removeDuplicate (names) {
    const unique = [];
    // for (let i=0; i<names.length; i++){
    //     const element = names[i];
    //     // console.log(element);
    // }
    // console.log('\n');
    for (const element of names) {
        console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames); // [ 'abul',  'babul', 'cabul', 'dabul', 'ebul',  'fabul', 'gabul', 'habul' ]
console.log(names); // [ 'abul',  'babul', 'cabul', 'dabul', 'ebul',  'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul',  'habul', 'dabul' ]


console.log('\n');
const numbers = [23, 34, 53, 57, 95, 89, 23, 32, 45, 53, 89, 57, 32];

function removeDuplicateNumbers (numbers) {
    const empty = [];
    for (const element of numbers) {
        console.log(element);
        if (empty.indexOf(element) == -1){
            empty.push(element);
        }
    }
    return empty;
}

const uniqueNumbers = removeDuplicateNumbers(numbers);
console.log(uniqueNumbers); // [ 23, 34, 53, 57, 95, 89, 32, 45 ]
console.log(numbers); // [ 23, 34, 53, 57, 95, 89, 23, 32, 45, 53, 89, 57, 32 ]

