'use strict';
let age = 30;
let oldAge = age;
age = 31;
console.log(oldAge, age);

const me = {
    name : 'Jonas',
    age : 35,
};

const friend = me;

friend.age = 36;

console.log('friend :', friend);
console.log('me : ', me);

// part 2
// primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = 'Davis';
console.log(oldLastName, lastName);

// reference types
const jessica = {
    firstName : "Jessica",
    lastName : "Williams",
    age : 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'davis';
console.log(jessica);
console.log(marriedJessica);

//copying reference types
const jessica2 = {
    firstName : "Jessica",
    lastName : "Williams",
    age : 27,
    family : ['Alice', 'Bob'],
};

const marriedJessica2 = Object.assign({}, jessica2);
marriedJessica2.lastName = "Davis";
console.log(jessica2, marriedJessica2);

// another level 
marriedJessica2.family.push('Mary');
marriedJessica2.family.push("John");



















