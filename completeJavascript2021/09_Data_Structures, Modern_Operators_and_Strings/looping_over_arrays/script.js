'use strict';
// for -of loop

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order : function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery : function({starterIndex = 1, mainIndex = 0, time ='20: 00', address}) {
    console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`);
  },
  orderPasta : function(ing1, ing2, ing3){
      console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`)
  },
};

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// for -of loop syntax
for (const item of menu) {
  console.log(item);
};

//for-of loop with index number.
// menu.entries() will give the array element with its index number.
// entries() will give array iterator
for (const  item of menu.entries()) console.log(item);

//array iterator
console.log([...menu.entries()]);

//presenting neatly
for (const item of menu.entries()) console.log(`${item[0] +1} --- ${item[1]}`);

//presenting neatly with destructuring
for (const item of menu.entries()) {
  const [no, name] = item;
  console.log(` item no ${no+1} is ${name}`);
};

//presenting neatly with destructuring
for (const [i, el] of menu.entries()) {
  console.log(`${i+1} : ${el}`);
};




































