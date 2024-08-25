'use strict';

const secureBooking = function () {
  let passengerCount = 0;

  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
booker();
booker();
booker();
booker();

// another example

let f;

const g = function(){
  const a = 10;
  f= function(){
    console.log(a*2);
  };
};

const h = function(){
  const b = 777;
  f = function(){
    console.log(b*2);
  };
};
g();
f();
f();
h();
f();

// example 2
const boardPassengers = function(n, wait) {
  const perGroup = n / 3;
  setTimeout(function(){
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 2000);
  console.log(`will start baording in ${wait} seconds`);
};

boardPassengers(3000, 2);



 