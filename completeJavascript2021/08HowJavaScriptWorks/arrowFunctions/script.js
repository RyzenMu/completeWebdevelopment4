'use strict';

var firstName = 'metilda';

const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    //solution 1
    const self = this;
    console.log(2037 - Number(this.year));
    console.log(this);
    const isMillineal = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillineal();
    // solution 2 arrow function
    // arrow function do not have its own this
    // but it borrows this keyword of its parents
    const isMillineal1 = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillineal1();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();


// Arguments Keyword
const addExpr = function(a, b) {
    console.log(arguments);
}
addExpr(4, 7);

function addDecl (a, b) {
    console.log(arguments);
}
addDecl(3, 8);

const addArrow = (a, b) => {
    console.log(arguments);
}
addArrow(9, 3);