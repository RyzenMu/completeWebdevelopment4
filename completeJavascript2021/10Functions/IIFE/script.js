'use strict';

// IIFE is predominantly used in async/await 

 (function(){
  console.log('This will never run again');
 }());

 (function(){
  console.log('This will never run again');
 })();

 // arrow function with IIFE
 (()=>console.log('This will also never run again'))();