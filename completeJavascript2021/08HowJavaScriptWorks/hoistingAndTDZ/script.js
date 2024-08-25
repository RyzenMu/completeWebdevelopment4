'use strict';

console.log(me);

var me = 'jonas';
let job = 'teacher';
const year = 1991;

console.log(addDecl(3, 5));
// console.log(addExpr(2, 4));
// console.log(addArrow(1, 5));

//functions
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};
console.log(numproducts);
if (!numproducts) deleteShoppingCart();

var numproducts = 10;
const addArrow = (a, b) => a + b;

function deleteShoppingCart() {
  console.log('All Products deleted');
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

