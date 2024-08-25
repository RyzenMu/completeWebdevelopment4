


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

  // non-boolean logical operators 'or' operator

  console.log(3 || 'jonas');
  console.log('jonas' || 3);
  console.log(0 || 3); //falsey value rejected answer : 3
  console.log(undefined || 3); //3
  console.log(undefined || null); //null
  console.log(null || 3); //3
  console.log(" " || 'jonas'); //without empty space - empty space1
  console.log("" || 'jonas'); //without empty space - jonas

  // logical operators can use any data type , return any data type, short-circuting.
  console.log(undefined || 0 || '' || 'Hello' || 23 || null); // hello

  //example use case without short-circuting
  const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
  console.log(guests1);

  //example use case with xhort-circuting
  const guest2 = restaurant.numGuests || 10; 
  console.log(guest2);

  // short-circuting and operator
  // and operator returns falsey value even without checking the second value.
  // if a truthy value is given it will return second value.
  console.log(3 && 'jonas'); // jonas
  console.log('jonas' && 3); // 3

  const guest3 = restaurant.numGuests = 0;
  console.log(guest3 && 10); //0
  console.log(guest3 || 10); //10
  console.log('Hello' && 23 && null && 'jonas'); // null
  
  // falsey left value
  // truthy right value

  // another example
  if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
  }
  // using short-circuting
  restaurant.orderPizza && restaurant.orderPizza('mishrooms', 'spinach');



  

