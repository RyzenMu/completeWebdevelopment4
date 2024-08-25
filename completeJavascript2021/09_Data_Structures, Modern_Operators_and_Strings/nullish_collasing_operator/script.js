


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

 //nullish - coalesing operator
restaurant.numGuests = 0;
let guests = restaurant.numGuests || 10;
console.log(guests); // 10, here it does not consider 0 as a number

// in order to avoid the above case, we use nullish - coalesing operator ??

guests = restaurant.numGuests ?? 10;
console.log(guests);

// in nullish operator 0 and '' are true.



  

