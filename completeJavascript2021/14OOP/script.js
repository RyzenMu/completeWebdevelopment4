'use strict';

//programming paradidm means how we organise our code

// 3 methods for creating a class
//1. constructor function
// 2. es6 method
//3. Object.create()

// Method 1 -using constructor function
const Person = function(firstName, birthYear){
    // instance properties
this.firstName = firstName;
this.birthYear = birthYear;
// instance methods
// never do this
// this.calcAge = function(){
// console.log(2037-this.birthYear);
// };
};


const jonas = new Person('jonas', 1991);
//1. New {} is created
//2. function is called, this ={}
//3. {} linked to prototype
//4. function automatically return {}

console.log(jonas);

const matilda = new Person('matilda', 2017);
const jack = new Person('jack', 1974);
console.log(matilda, jack);

// insatanceOf
console.log(matilda instanceof Person);

console.log(Person.prototype);

//prototypes
Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}

jonas.calcAge();
console.log(jonas.__proto__ === Person.prototype); // true

//isPrototypeOf
console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// prototypes has properties too
Person.prototype.species = 'Homo Sapiens';
console.log(jonas);

// hasOwnProperty
console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false

// prototypal inheritance on built-in objects
console.dir(Person.prototype.constructor);

const arr = [4, 4, 5];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

// creating static method in constructor function
Person.hey = function(){
    console.log('Hey There ..ooo...');
    console.log(this);
};
Person.hey();
// creating unique values from array
Array.prototype.unique = function(){
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

// CODING CHALLENGE 1

const Car = function (make, speed){
    this.make = make;
    this.speed = speed;
};
Car.prototype.acceletate = function(){
    this.speed += 10;
    console.log(" the speed is " , this.speed);
};
Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(" the speed is", this.speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.acceletate();
car1.acceletate();
car1.acceletate();
car1.acceletate();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car2.acceletate();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
car2.brake();
car2.brake();

//  creating method 2. ES6 CLASSES method

// class expression
const Personcl1 = class {

};

//class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    // prototypal inheritance
    calcAge(){
        console.log(2037 - this.birthYear);
    }

    greet(){
        console.log(`Hey ${this.fullName}`);
    }

    get age(){
        return 2037 - this.birthYear;
    }

    set fullName(name){
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`);
    }

    get fullName(){
        return this._fullName;
    }

    //static method
    static hey(){
        console.log('Hey There ... tttt');
        console.log(this);
    }
}

const jessica = new PersonCl('jessica davis', 1996);
console.log(jessica);
console.log(jessica.__proto__);
jessica.greet();
console.log(jessica.age);
jessica.fullName = 'jonas schemedict';

PersonCl.hey();

//1. classes are not hoisted
//2. classes are first-class citizens
//3. classes are executed in strict mode.

const walter = new PersonCl('walter', 1965)

// SETTERS AND GETTERS

const account = {
    owner : 'Jonas',
    movements : [200, 530, 120, 300],
    get latest(){
        return this.movements.slice(-1).pop();
    },
    set latest (mov){
        this.movements.push(mov);
    },
};
account.latest = 500;
console.log(account.latest);

// setters are used for validation


// Static Methods
 const staticMeth = Array.from(document.querySelectorAll('h1'));
 console.log(staticMeth);

 // Array.from is a static method.

 // Number Array is dynamic
//  console.log([1, 2, 3].from()); // error


// Method 3. Object.create()
const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },
    init(name, birthYear){
        this.name = name;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
steven.name = "Steven";
steven.birthYear = 2002;
console.log(steven);
steven.calcAge();
console.log(steven.__proto__);

// proper object.create()
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

// CODING CHALLENGE -2

const Car2 = class {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    
    acceletate(){
        return this.speed + 10;
    }

    brake(){
        this.speed - 10;
        return this;
    }

    set speedUS(sp){
        return sp * 1.6;
    }
    get speedUS(){
        return this.speed/1.6;
    }
}

const c1  = new Car2('Ford', 120);
console.log(c1.acceletate());
c1.speedUS = 120;
console.log(c1.speedUS);

// INHERITANCE
const person2 = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

person2.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
};

const student = function(firstName, birthYear, course){
    person2.call(this, firstName, birthYear);
    this.course = course;
};

student.prototype = Object.create(person2.prototype);

student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const mike = new student('Mike', 2020, 'Computer Science');
console.log(mike);

mike.introduce();
mike.calcAge(); // 

console.log(mike.__proto__);

// fixing person2's properties to student
student.prototype.constructor = student;

//CODING -CHALLENGE -3 
const EV = function (make, speed, charge){
    Car.call(this, make, speed);
    this.charge = charge;
};


// linking prototype properties to EV
EV.prototype = Object.create(Car.prototype);


//adding new prototype 
EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
};

EV.prototype.acceletate = function(){
    this.speed += 20;
    this.charge--;
}

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
console.log(tesla);
tesla.acceletate();
console.log(tesla);

// inheritance in ES6 classes
class Student extends PersonCl{
    constructor(fullName, birthYear, course){
        //Always needs to happen first
        super(fullName, birthYear);
        this.course = course;
    }

    introduce(){
        console.log(`My name is ${this.fullName} and i study ${this.course}`); 
    }

    calcAge() {
        console.log(`i am ${2037 - this.birthYear} years old`);
    }
}

const martha1 = new Student('martha jones', 2012, 'Computer Science');
console.log(martha1);

martha1.introduce();
martha1.calcAge();

// DIFFERENCE BETWEEN INHERITANCE AND OBJECT.CREATE()
const PersonProto2 = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },
    init(name, birthYear){
        this.name = name;
        this.birthYear = birthYear;
    },
};

const steven2 = Object.create(PersonProto2);

// creaing a proto between object and class
const StudentProto = Object.create(PersonProto2);

// creating init() method on StudentProto
StudentProto.init = function(firstName, birthYear, course){
    PersonProto2.init.call(this, firstName, birthYear);
    this.course = course;
};
StudentProto.introduce = function(){
    console.log(`My name is ${this.name} and i study ${this.course}`); 
}

const jay = Object.create(StudentProto);
jay.init('jay', 2010, 'Industrial');
jay.introduce();
jay.calcAge();

// Another classes

//public fields
// private fields
// public methods
// private methods
class Account {
    //public fields (instances)
    locale = navigator.language;
    // private fields
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // protected property
        // this._movements = [];
        // this.locale = navigator.language;
        console.log(`thanks for opening an account`);
    }
    // Public interface
    // public methods
    getMovements() {
        return this.#movements;
    }
    deposits(val){
        this.#movements.push(val);
        return this;
    }
    withdrawal(val){
        this.deposits(-val);
        return this;
    }
   
    requestLoan(val){
        if(this._approveLoan(val)){
            this.deposits(val);
            console.log('Loan Approved');
            return this;
        }
    }
    // there is no private methods available in js
    _approveLoan(val) {
        return true;
    }

    static helper(){
        console.log('Helper');
    }
}

const acct1 = new Account('Jonas', 'EUR', 1111);
console.log(acct1);

// these technique is old fashioned
// acct1.movements.push(250);
// acct1.movements.push(350);
// acct1.movements.push(450);

acct1.deposits(450);
acct1.withdrawal(200);
acct1.requestLoan(1000);
console.log(acct1);

console.log(acct1.getMovements());
// console.log(acct1.#movements);

// console.log(acct1.helper());
(Account.helper());

// Chaining Metods
acct1.deposits(300).deposits(500).withdrawal(350).requestLoan(1000).withdrawal(500);

console.log(acct1.getMovements());

// classes summary
console.log(acct1.locale);

// CODING CHALLENGE -4
class EVCl extends Car2 {
    //private method
    #charge;
    constructor(make, speed, charge){
        super(make, speed);
        this.#charge = charge;
    }
    chargeBattery(chargeTo){
        this.#charge = chargeTo;
        return this;
    }
    accelerate(){
        this.speed += 20;
        this.charge--;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}`);
        return this
    }
}

const rivian = new EVCl('Rivian', 120, 23);

rivian
.accelerate()
.accelerate()
.accelerate()
.brake()
.chargeBattery();

console.log(rivian.speedUS);






































