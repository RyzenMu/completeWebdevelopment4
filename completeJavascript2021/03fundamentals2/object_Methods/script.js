'use strict';

const jonas = {
    firstName : 'Jonas',
    lastName : 'Schemedict',
    birthYear : 1991,
    job : 'teacher',
    friends :['michael','Peter', 'steven' ],
    hasDriversLicence : true,
    calcAge : function() {
        return 2037-this.birthYear;
    },
    calcAge1 : function(birthYear) {
        return 2037-birthYear;
    },
    printObj : function(){
        console.log(this);
    },
    printJob : function(){
        console.log(jonas.job); // here jonas == this
    },
    calceAge3 : function(){
        this.age = 2037-this.birthYear;
    },
    age1 : (2037-1991),
    getSummary : function(){
        return `the name of the tutor is ${this.firstName} ${this.lastName}, his age is ${this.age1} his occupation is ${this.job} he has ${this.friends.length} friends  his closest is ${this.friends[1]}, ${this.hasDriversLicence? 'having driving license' : 'false'}`;
    }
};

console.log(jonas.calcAge());
console.log(jonas['calcAge1'](1992));
jonas.printObj();
jonas.printJob();
jonas.calceAge3()
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log("The age is " + jonas.age1);
console.log(jonas.getSummary());


