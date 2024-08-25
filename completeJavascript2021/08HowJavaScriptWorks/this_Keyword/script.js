'use strict';

console.log(this); //window

const calcAge = function (birthYear) {
  console.log(this); //undefined
};

calcAge();

const calcAgeArrow = (birthYear) => console.log(this);   
calcAgeArrow();

const jonas = {
    year : 1991,
    calcAge : function () {
        console.log(2037-Number(this.year));
        console.log(this);
    }
};
jonas.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge; // method borrowing
matilda.calcAge();

const f = jonas.calcAge;
f(187);