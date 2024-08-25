'use script';

//ES 5
// const bookings = [];
// const createBooking = function(flightNum, numPassengers, price) {
//   numPassengers = numPassengers || 1;
//   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

//ES 6
const bookings = [];
const createBooking = function(flightNum, numPassengers=1, price=199*numPassengers) {
  const booking = {
    flightNum,
    numPassengers,
    price
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);


// skipping a parameter
// use undefined to skip a value
createBooking('LH123',undefined , 1000);