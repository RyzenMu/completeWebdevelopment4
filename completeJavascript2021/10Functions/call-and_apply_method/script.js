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
