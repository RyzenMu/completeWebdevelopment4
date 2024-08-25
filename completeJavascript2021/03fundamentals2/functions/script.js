'use strict';

function logger(){
    console.log('My name is jonas');
}

logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

let orangeJuice = fruitProcessor(5, 10);
console.log(orangeJuice);
let appleJuice = fruitProcessor(10, 5);
console.log(appleJuice);