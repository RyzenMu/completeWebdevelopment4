'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher-order functions
const transformer = function(str, fn){
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`)
  console.log(fn.name); // function has a name property1   
};
transformer("java script is the best language", upperFirstWord);
transformer("java script is the best language", oneWord);

const high5 = function(){
  console.log('(**)');
}
document.body.addEventListener('click', high5);
['jonas', 'martha', 'adam'].forEach(high5);// hi5 is the callback function