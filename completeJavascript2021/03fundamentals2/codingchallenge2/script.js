'use strict';

// reduce operator
const array1 = [400, 500, 525, 200];
let tot1 =array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(tot1);

const array2 = [125, 45, 50, 30];
let tot2 = array2.reduce((accumulator, currentValue) => accumulator+currentValue, 0);
console.log(tot2);

// map operator
const bill = [100, 200, 300, 400];
let tip = bill.map((i) => i<201 ? i*0.2 : i*0.1);
console.log(tip);