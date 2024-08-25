'use script';

const flight = 'LH234';
const jonas = {
  name : 'Jonas Schmedtmann',
  passport : 24154767454,
};

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 24154767454) {
    alert('Checked In');
  } else {
    alert('wrong passport');
  }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

//a pimitive data type will not change i.e it make another copy
// a reference data type like object will change i.e it makes copy of its address.

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person){
  person.passport = Math.trunc(Math.random()*1000000000);
};

newPassport(jonas);

checkIn(flight, jonas);

// java script does not have passing by reference.




















