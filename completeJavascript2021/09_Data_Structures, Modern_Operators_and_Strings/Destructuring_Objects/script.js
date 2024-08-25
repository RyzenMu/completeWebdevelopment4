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
  orderDelivery : function({starterIndex = 1, mainIndex = 0, time ='20: 00', address}) {
    console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`);
  },
};

// to destructure objects use curly braces
// to destructure objects we  have to use exact property names 

const {name, categories, order} = restaurant;
console.log(name);
console.log(categories);
console.log(restaurant.order(1,1));
// destructuring objects is very useful in accessing api data
// like weather data, movie data


// assigning variables other than property name in destructuring objects.
const {
  name : newVar1,
  categories :newVar2,
  order : newVar3, 
} = restaurant;

console.log(newVar1);
console.log(newVar2);
console.log(newVar3);
// these assigning other variable names to objects is very useful in working with 3rd party data.

// default values in destructuring objects
const {
  starterMenu : starter =[],
  batsman =[],
} = restaurant;

console.log(starter, batsman);

// mutating objects without temp variable [first, second] = [second, first]
// mutating variables
let a = 111;
let b = 999;
const obj = {a:23, b:7, c:14};

({a, b} = obj);
console.log(a, b);

// nested objects
const {fri:{open : o, close : c} }= restaurant.openingHours;
console.log(o, c);

// using functions as parameters.
restaurant.orderDelivery({
  time : '22:30',
  address : 'Via del Sole, 21',
  mainIndex : 2,
  starterIndex : 2,
});

restaurant.orderDelivery({
  address : 'Via del sole, 22',
  starterIndex : 1,
})
