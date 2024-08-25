'use strict';

const greet = function(greeting){
  return function(name){
    console.log(`${greeting} ${name}`);
  };
};

greet('hello')('muruga');

const greetHey = greet('hey ! ')
greetHey('jonas');
greetHey('steven');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('get')('jon');