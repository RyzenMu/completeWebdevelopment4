const lusthansa = {
  airline: 'lusthansa',
  iataCode : 'LH',
  bookings: [],
  book(flightName, name){
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightName}`) ;
    this.bookings.push({flight :this.iataCode, flightName, name});
  },
};

lusthansa.book(239, 'Jonas Schedtmann');
lusthansa.book(635, 'John Smith');
console.log(lusthansa.bookings);

const euroWings = {
  airline:'Eurowings',
  iataCode:'EW',
  bookings: [],
};

const book = lusthansa.book;

//does not work
// book(23, 'Sarah Williams');

// call method will take a object as first argument and remaing parameters of the separate function.
book.call(euroWings, 23, 'sarah williams');
console.log(euroWings);

book.call(lusthansa, 239, 'Mary Cooper');
console.log(lusthansa);


const swiss ={airline: 'swiss air lines', iataCode:'LX', bookings:[]};
book.call(swiss, 177, 'John Smith');
console.log(swiss);


// apply method is similar to call method
// the only difference is it takes a array of arguments instead of normal arguments.
const passengerData =[737, 'Mary Cooper'];
book.apply(swiss, passengerData);
console.log(swiss);

// modern java script does not use apply method
book.call(swiss, ...passengerData);

// unlike call function the bind method will not called immediately
// bind methos not called immediately
// call method called immediately 
// bind method aleways create a new function.
const bookEW = book.bind(euroWings);
const bookLH = book.bind(lusthansa);
const bookSW = book.bind(swiss);
bookEW(44, 'Muruganantham');
bookLH(44, 'Muruganantham');
bookSW(44, 'Muruganantham');
console.log(euroWings);

// we can also set some funcvtion parameers.
const bookEW23 = book.bind(euroWings, 23); //some functions in which some parameters are predefined is called partial functions
bookEW23('Muruganantham');
bookEW23('Muruganantham');
bookEW23('Muruganantham');
bookEW23('Muruganantham');
console.log(euroWings);

// another use case of bind method is objects with event listeners

// with event listerners
lusthansa.planes = 300;
lusthansa.buyPlane = function(){
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// wrong procedure
// document.querySelector('.buy').addEventListener('click', lusthansa.buyPlane);

//when eventlistener calls the functions the this key word belongs to html elemt.
// when eventlister calls a function the this keyword will not belong to the parent object.
document.querySelector('.buy').addEventListener('click', lusthansa.buyPlane.bind(lusthansa));

//partial application of bind method.
const addTax = (rate, value) => value + value*rate;

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(1000));


// grid function is function returning anothher function

const addtaxrate = function (rate){
  return function(value ){
    return value + value*rate;
  };
};

const addVAT2 = addtaxrate(0.23);
console.log(addVAT2(10000));
console.log(addVAT2(20000));
console.log(addVAT2(30000));


