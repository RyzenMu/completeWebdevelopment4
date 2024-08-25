'use strict';

const airline = 'Tap Air Portugal';

//1. length
console.log(airline.length);

//2. indexof
console.log(airline.indexOf('r'));
console.log(airline.indexOf('Port'))

//3. lastindexof
console.log(airline.lastIndexOf('r'))

//4. slice
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
// strings cannot be mutated, they are primitive.

//5. example.
//extracting first word
console.log(airline.slice(0, airline.indexOf(' ')));
// extracting the last word
console.log(airline.slice(airline.lastIndexOf(' ')+1));

//6. another example
const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('you got middle seat');
  }else console.log('You got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3F');

//7.changing case
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//8.Fix capitalization
const passenger = 'joNaS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1,);
console.log(passengerCorrect);

//9. Another real life example : checiking email
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
// method chaining
console.log(loginEmail.toLowerCase().trim());

//10. replacing part of string
const priceGB = '288,97E';
const priceUS = priceGB.replace(',', '.').replace('E', 'U');
console.log(priceUS);

//11. replaceAll -- REGULAR EXPRESSION of string
const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace(/door/g, 'gate'));

//12. includes -- boolean
const plane = 'A320neo';
console.log(plane.includes('A320'));

//13. starts with && ends With
console.log(plane.startsWith('A3'));
console.log(plane.endsWith('neo'));

//14. sample exercice
const checkBaggage = function(items) {
  const baggage = items.toLowerCase(); 
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome abroad');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and a gun for protection');

//15. split
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));
const [firstName, secondName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName);
console.log(secondName);

//16. join
const arr1 = ['Mr.', firstName, secondName.toUpperCase()]
const arr2 = arr1.join(' ');
console.log(arr2);

//17. Capitalize
const Capitalizename = function(name){
  const names = name.split(' ');
  const namesUpper =[];
  for (const n of names){
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

Capitalizename('jessica ann smith davis');
Capitalizename('jonas schedtmann');

//18. padding a string
const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(30, "+")); 
console.log('jonas'.padStart(25, '+').padEnd(30, "+")); 

console.log(message.padEnd(25, '+')); 
console.log('jonas'.padEnd(25, '+')); 

//19. converting credit card number to a string
const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(4534664637836456));
console.log(maskCreditCard(646375896796663));

//20. repeat
const message2 = 'Bad Weather... All Departures Delayed...';
console.log(message2.repeat(5));

//21. Another example
const planesInLine = function(n) {
  console.log(`there are ${n} planes in line ${'(**)'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);


















































































