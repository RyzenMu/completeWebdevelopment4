'use strict';

let centrum = (vitamin, minerals) => {
    return `centrum has ${vitamin} vitamins and ${minerals} minerals`;
}

let centrum1 = centrum(34, 15);
let centrumPro = centrum(51, 22);

console.log(centrum1);
console.log(centrumPro);

//example2
let age = birthyear => 2024-birthyear;

console.log(age(1777));

// example3
let water = litre => litre*1.5;
let bisleri = water(2);
console.log(`The bisleri comes for ${bisleri} days`);

//example 4
let oliveOil = litre => litre*150;
let detMonte = oliveOil(.75);
console.log(`The del Monte comes for ${detMonte} days`);

