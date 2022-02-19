
// 32.3 (advanced) Array Destructuring, nested object Optional chaining

// declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
console.log(x, b); // 2 68
console.log('myObject.p =', myObject.p); // myObject.p = undefined
// console.log('myObject.p.q =', myObject.p.q); // TypeError: Cannot read property 'q' of undefined

/* 
    Optional chaining (?.)
       The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects 
       without having to check that each reference in the chain is valid.

    Two Solutions:
       1. try-catch
       2. (Optional Chaining (?.)) - option in chain --> ? before . 
       note: ? works if any value is undefined.
*/
console.log('myObject.p.q =', myObject?.p?.q); // myObject.p.q = undefined


// Destructuring Array 
const [p, q] = [45, 27, 91, 86];
console.log(p, q); // 45 27

const [best, faltu] = ['Momotaj', 'Poroshi'];
console.log(best, faltu); // Momotaj Poroshi


// Destructuring Object
const { sky, color, money } = { sky: 'blue', soil: 'mati', color: 'red', money: 500 };
console.log(sky, color, money); // blue red 500


// Optional Chaining
const company = {
    name: 'GP', 
    ceo: { 
        id: 01, 
        name: 'Azmol', 
        food: 'fuchka' 
    }, 
    web: { 
        work: 'website-development', 
        employee: 22, 
        framework: 'react', 
        tech: {
            first: 'html', 
            second: 'css', 
            third: 'js'
        }
    }
};
console.log(company.web.tech.third); // js
console.log(company.web.tech.fourth); // undefined
// console.log(company.web.tech.fourth.name); // TypeError: Cannot read property 'name' of undefined
// console.log(company.backend.tech.third); // TypeError: Cannot read property 'tech' of undefined
console.log(company?.backend?.tech.third); // undefined


