
// 29.4 Check an Array using isArray, indexOf, includes, concat

// isArray() method returns true if an object is an array, otherwise false.
function megaFriends(friends) {
    // check array is valid or not
    // if (Array.isArray(friends)){
    if (Array.isArray(friends) == true){
        mega = friends[0];
        for (const friend of friends) {
            if (friend.length > mega.length){
                mega = friend;
            }
        }
        return mega;
    }
    else {
        console.log('Please, provide an array');
    }
}
const friends = ['kutub', 'Lion', 'Shamol', 'Sabbir', 'Lion'];
const myBigBuddy = megaFriends(friends);
console.log(myBigBuddy); // Shamol



// 02. indexOf() | Syntax: array.indexOf(item, start) | returns -1 if the value is not found.
// if (friends.indexOf('Fox')) {
if (friends.indexOf('Fox') != -1) {
    console.log('Fox exists');
}
else {
    console.log("Fox doesn't exists");
}
console.log(friends.indexOf('Lion')); // 1
console.log(friends.indexOf('Giraffe')); // -1
console.log(friends.indexOf('Lion', 2)); // 4 | start from index 2



// 03. includes() method returns true if a string contains a specified string. Otherwise it returns false.
// The includes() method is case sensitive.
// Syntax: string.includes(searchvalue, start)

// if (friends.includes('Lion')){
if (friends.includes('Lion') == true){
    console.log('Lion exits using includes');
}
console.log(friends.includes('Lion')); // true
console.log(friends.includes('Tigar')); // false
console.log(friends.includes('Shamol', 2)); // true
console.log(friends.includes('Lion', -1)); // true

console.log([1, 2, NaN].includes(NaN)); // true
console.log(["1", "2", "3"].includes(3)); // false



// 04. concat() method concatenates (joins) two or more arrays 
// Syntax: array1.concat(array2, array3, ..., arrayX)
const first = [1, 3, 5];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
console.log(combined); // [ 1, 3, 5, 4, 6, 8, 9 ]

