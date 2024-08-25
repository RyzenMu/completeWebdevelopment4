'use script';

// example of higher - order function and call back functions
const greet = console.log('jonas');
const btnClose = document.querySelector('button');
btnClose.addEventListener('click', greet);

// in the above example addEventListener is higher-order function and greet is an call back function.
 