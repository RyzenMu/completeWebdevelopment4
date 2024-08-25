// spread operator

const arr = [7, 8, 9];
const badArr = [...arr, 10, 11];
console.log(badArr);
console.log(...badArr);

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

  //objects
  // objects
const newresturant = {foundedIn : 1998, 
    ...restaurant,
    founder1: "Guiseppe"};
console.log(newresturant);

//copying objects
const restaurantCopy = {...restaurant};
restaurantCopy.name = "Ristornate Roma";
console.log(restaurant.name);
console.log(restaurantCopy.name);

  const newMenu = [...restaurant.mainMenu, 'Gnocci'];
  console.log(newMenu);

  // copy array
  const mainMenuCopy = [...restaurant.mainMenu] // this is a shallow copy.

  // join 2 arrays or more
  const joinArr = [...restaurant.starterMenu, ...restaurant.mainMenu];
  console.log(joinArr);

  // iterables are arrays, maps, strings , sets and not objects

  // iterating striongs
  const str = 'jonas';
  const letters = [...str, ' ', 't'];
  console.log(letters);

const ingredients = [prompt("let's make pasta! Ingredients 1?"),
prompt("let's make pasta! Ingredients 2?"), prompt("let's make pasta! Ingredients 3?")];

console.log(ingredients);
restaurant.orderPasta(...ingredients);

