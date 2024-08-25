'use strict';

let myAge = calcAge('1966'); // hoisting

//function declaration
function calcAge(yourDOB){
    const yourDOBN = Number(yourDOB)
    const currentYear = 2024;
    let yourAge = currentYear - yourDOBN;
    return yourAge;
}

console.log(myAge);

//function expressions
//function expression is a function without a name

let age1 = function (dob) 
{
    return 2024 - dob;
}
console.log(age1(1991));


//unanymous function
let bulb = function(watts) {
    return watts * 1.2;
}
console.log(`the [price is ${bulb(100)}]`)

//example 3
let add = function (q, b) {
    return q + b;
}

let add1 = add(43,5);
console.log(add1);

// example 4
let power = function (base , no) {
    return base**no;
}
let power1 = power(34, 5);
let power2 = power(23, 57);
console.log(power1, power2);
