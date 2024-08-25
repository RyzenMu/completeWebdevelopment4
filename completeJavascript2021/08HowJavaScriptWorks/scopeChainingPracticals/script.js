'use strict';

function calcAge(birthYear) {
    const age = 2037-birthYear;
    const out = "outer"
    function printAge(age) {
        console.log(age);
        const out = 'inner';
    }
    if (birthYear>=1981 && birthYear<=1996) {
        console.log('YOU ARE A MILLINEAL');
    } else {
        console.log('You are so sweet');
    }
    printAge(age);
    console.log(out);
    return age;
}

const firstName = "Jonas";
calcAge(1991);

