


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
    orderPizza : function(mainIncredient, ...otherIngredient) { // function having atleast one parameter
      console.log(mainIncredient);
      console.log(otherIngredient);
    }
  };

  // rest operator is opposite of spread operator
  // spead operator for arrays will give individual elements of an array (unpack array)
  // rest operator condenses single element into an array (pack array)

   // spread because on right side of =
   const arr = [1, 3, ...[5, 7, 9]];

   // rest operator // because on the left side of =
   const [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7];
   console.log(a);
   console.log(b);
   console.log(c);

   // example , to leave a second element just leave empty space with comma
   // the rest element must be the last element
   // there can be only one rest operator
   const [pi, , ris, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
   console.log(pi);
   console.log(ris);

// operating with objects
const {thu, fri, ...weekend} = restaurant.openingHours;
console.log(thu);
console.log(fri);
console.log(weekend);

// ... rest operator to have mutiple parametrs in an function

const add = function(...para) { // rest parameters
  let sum = 0;
  for (let i =0; i<para.length; i++){
    sum += para[i];
  }
  return sum;
}
console.log(add(3, 5));
console.log(add(3, 5, 7, 9, 11, 13, 15));

// in case passing an array as an argument
const x = [23, 5, 7, 29];
const result = add(...x);
console.log(result);

// some edge cases1
restaurant.orderPizza('mushrooms', 'oion', 'olives', 'spinach');


