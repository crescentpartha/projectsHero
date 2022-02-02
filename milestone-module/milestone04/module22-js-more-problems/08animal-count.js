
// Traveling in a Jungle and counting wild animals

function animalCount(miles) {
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityrestMiles = 100;

    if (miles <= 10) {
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if (miles <= 20) {
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondDenseAnimals = restMiles * animalDensitySecond10Miles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals;
    }
    else {
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const secondDenseAnimals = 10 * animalDensitySecond10Miles;
        const restMiles = miles - 20;
        const restDenseAnimals = restMiles * animalDensityrestMiles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals + restDenseAnimals;
        return totalAnimals;
    }
}

const animals = animalCount(25);
console.log(animals); // 1100

console.log(animalCount(10)); // 100
console.log(animalCount(11)); // 150
console.log(animalCount(20)); // 600
console.log(animalCount(21)); // 700


// How to remove a property from a JavaScript Object

var person = {"first_name": "Billy","last_name": "Johnson"};
console.log(person); // { first_name: 'Billy', last_name: 'Johnson' }
delete person.last_name; //delete last_name property
console.log(person); // { first_name: 'Billy' }
