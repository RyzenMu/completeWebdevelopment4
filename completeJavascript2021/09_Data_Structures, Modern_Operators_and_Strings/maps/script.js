// Maps
// map is an another data structure
// map is more useful then a set.

// map is similar to objects, like having key and value pairs.
// map will have keys of any data type.
// objets will have key of string data type.

// the best way to create a map is to have a consrtuctor
const resturant = new Map();
resturant.set('name', 'Classico Italiano'); // set method in map is similar to add methods in set
resturant.set(1, 'Firenze, Italy');
resturant.set(2, 'Lisbon, Portual');
console.log(resturant.set(3, 'London, Britain'));

// set method can be chained
resturant.set('categories', ['italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'we are open')
.set(false, 'we are closed');

// to retrive data from map use get method
console.log(resturant.get('name'));
console.log(resturant.get(true));
console.log(resturant.get(1));

// fun activity
const time = 21;
console.log(resturant.get(time < resturant.get('close') && time > resturant.get('open')));

// to find map has certian key , we use "has"
console.log(resturant.has(true));

//to delete a property we use delete method
console.log(resturant);
resturant.delete(2);
console.log(resturant);

// size property 
console.log(resturant.size);

// array can be a key
const arr = [4, 5]
resturant.set(arr, 'Test');
console.log(resturant)
console.log(resturant.get(arr));

// DOM as a key
resturant.set(document.querySelector('h1'), 'Headingssss');
console.log(resturant);

// to delete all the properties use clear
resturant.clear();
console.log(resturant);

//Another way to create a map for big data is
// having 2-dimensional arrays.
const question = new Map([
    ['question', 'what is the best programming language in the world'],
    [1, 'c'],
    [2, 'Java'],
    [3, 'Java Script'],
    ['correct', 3],
    [true, 'Correct Answer'],
    [false, 'Try Again'],
]);

console.log(question);

// convering object to map
const openingHours = {
    mon : { open : 10, close : 22},
    tue : { open : 11, close : 21},
    fri : { open : 10, close : 23},
    sat : { open : 10, close : 24},
};

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// iterating maps
// question app
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
};
const answer = Number(prompt("Enter your answer"));
console.log(question.get(question.get('correct') === answer));

// converting Map to an Array
const conArr = [...question];
console.log(conArr);
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);


























