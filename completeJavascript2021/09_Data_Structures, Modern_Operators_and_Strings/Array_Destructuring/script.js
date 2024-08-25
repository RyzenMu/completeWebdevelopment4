'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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
};


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a);
console.log(b);
console.log(c);

// assigning variables for arrays
const [x, y, z] = arr; // unpacking arrays
console.log(x, y, z);

//destructuring arrays
let [first, second] = restaurant.categories;
console.log(first, second);
const [, , third] = restaurant.categories;
console.log(third);

// switching variables without temp variable
[first, second] = [second, first];
console.log(first, second);
const [starterMe, mainMe] = restaurant.order(2, 2);
console.log(starterMe, mainMe);

// nested array
const nestedArr = [1, 2, 3, [4, 5, 6], 7, 8];

const [,,,na] = nestedArr;
console.log(na);

const [i, j, k, [l,m, n], o, p ] = nestedArr;
console.log(i, j, k, l, m, n, o, p);

// default values in destructuring arrays
const [a1, b1, c1] = [7, 5];
console.log(a1, b1, c1);
const [a2=1, b2=1, c2=1] = [7, 5];
console.log(a2, b2, c2);
