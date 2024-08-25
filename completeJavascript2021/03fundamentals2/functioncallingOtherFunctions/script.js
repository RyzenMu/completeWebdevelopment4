'use strict';

function circleArea(radius) {
    return 3.14*radius**2;
}

function diameter(radius) {
    return 2 * radius;
}

function printCircle(radi) {
    let area = circleArea(radi);
    let dia = diameter(radi);
    console.log(`The diameter of circle is ${dia}`);
    return `The area of circle is ${area}`;
}

let c1 = printCircle(10);
console.log(c1);


// exampl2

function cutFruitPieces(fruit) {
    return fruit*4;
}

function fruitProcessor(apple, orange) {
    const applePieces = cutFruitPieces(apple);
    const orangePieces = cutFruitPieces(orange);
    const juice = `the juice is made using ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));

//cloures

function outerFunction(){
    let outerVariable = "This is outer variable";
    function innerFunction(){
        return outerVariable + " plus inner function ";
    }
    return innerFunction();
}

console.log(outerFunction());