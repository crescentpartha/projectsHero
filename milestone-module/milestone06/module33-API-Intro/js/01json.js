
// 33.1 Module introduction and what is an API
/* 
    API is the acronym for Application Programming Interface, 
    which is a software intermediary that allows two applications to talk to each other.
*/


// 33.2 Introduction to JSON, JSON Structure, parse, stringify
/* 
    1. We send data to server after converting as a string type by JSON.stringify()
    2. We get data from server as a string (stringify). Then need to covert as a object by JSON.parse() 
*/

// JavaScript Object Notation
// JSON
const user =  { id: 23, name: 'Boro Chale', profession: 'Actor' };
const stringified = JSON.stringify(user);
console.log(stringified); // {"id":23,"name":"Boro Chale","profession":"Actor"}
console.log(user); // { id: 23, name: 'Boro Chale', profession: 'Actor' }

const shop = {
    name: 'Alia Store', 
    address: 'Ranbir road', 
    profit: 15000, 
    products: ['laptop', 'mobile', 'pepsi'], 
    owner: {
        name: 'Alia Bhatt', 
        profession: 'actor'
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);
/* {"name":"Alia Store","address":"Ranbir road","profit":15000,"products":["laptop","mobile","pepsi"],
"owner":{"name":"Alia Bhatt","profession":"actor"},"isExpensive":false}  */
console.log(shopStringified.owner); // undefined // Can't access property after converting stringify.

console.log(shop);
/* Output:
{
  name: 'Alia Store',
  address: 'Ranbir road',
  profit: 15000,
  products: [ 'laptop', 'mobile', 'pepsi' ],
  owner: { name: 'Alia Bhatt', profession: 'actor' },
  isExpensive: false
}
*/

const converted = JSON.parse(shopStringified);
console.log(converted);
/* Output:
{
  name: 'Alia Store',
  address: 'Ranbir road',
  profit: 15000,
  products: [ 'laptop', 'mobile', 'pepsi' ],
  owner: { name: 'Alia Bhatt', profession: 'actor' },
  isExpensive: false
}
*/
console.log(converted.owner); // { name: 'Alia Bhatt', profession: 'actor' }
