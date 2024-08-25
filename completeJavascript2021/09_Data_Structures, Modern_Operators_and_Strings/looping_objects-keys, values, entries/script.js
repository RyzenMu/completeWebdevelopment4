

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

  // looping through objects

for (const day of Object.keys(restaurant.openingHours)) console.log(day);
for (const day of Object.values (restaurant.openingHours)) console.log(day);


// looping through objects using entries
for (const item of Object.entries(restaurant.openingHours)) {
  console.log(item);
};

// another example
const entries = Object.entries(restaurant.openingHours)
for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
};




























  

