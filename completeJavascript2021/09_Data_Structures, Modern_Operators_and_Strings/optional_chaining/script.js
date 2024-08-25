

// addind array from objects
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

 // optional chaining is used in objects and arrays.

//  console.log(restaurant.openingHours.mon) // undefined
//  console.log(restaurant.openingHours.mon.open) // error

 // optional chaining is when a property does not exist it will imediately return undefined.

// without optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours.mon?.open); // optional chaining uses ?

// multiple optional chaining
console.log(restaurant?.openingHours?.mon?.open); // optional chaining uses ?


// real life application
const days = ['mon', 'tue', 'wed', 'thr', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//optional chaining with methods
console.log(restaurant.order?.(0, 1) ?? 'method does not exists');
console.log(restaurant.orderrisotto?.(0, 1) ?? 'method does not exists');


// optional chaining works on arrays too.
// optional chaining check whether an array is empty or not.
console.log(restaurant?.mainMenu ?? " aray does not exists");
console.log(restaurant?.mainMenux ?? " aray does not exists");

// another example
const users = [{name:'jonas', email:'hello@jonas.io'}];
console.log(users[0]?.name ?? 'user array empty');
console.log(users[2]?.name ?? 'user array empty');









 
 