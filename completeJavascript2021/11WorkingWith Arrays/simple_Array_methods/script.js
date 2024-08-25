'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements, sort=false) {

  containerMovements.innerHTML ='';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movements.forEach(function(mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1}  ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov} EUR </div>
        </div>
        `;
    containerMovements.insertAdjacentHTML('afterbegin',  html);
  });
};

console.log(containerMovements.innerHTML);

// COMPUTING USERNAMES WITH MAP METHOD IN BANKIST APP.
// SIDE EFFECTS
const user = 'Steven Thomas Williams';

const createUserName = function(acc) {
  accounts.forEach(function(acc){
    acc.username = acc.owner.toLowerCase().split(' ').map(element => element[0]).join('');
  }); 
};
console.log(createUserName(user));

createUserName(accounts);
const updateUI = function(){
  const userNameArray = accounts.map(element => createUserName(element));
  console.log(userNameArray);
  
  const calcDisplayBalance = function(acc){
    acc.balance = acc.movements.reduce((acc, mov) => acc +mov, 0);  
    labelBalance.textContent = `${acc.balance} EUR`;
  };
  
  const calcDisplaySummary = function (acc){
    const incomes = acc.movements.
    filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes} EUR`;
  
    const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)} EUR`;
    
    const interest = acc.movements.filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;})
    .reduce((acc, int) => acc + int, 0);
   labelSumInterest.textContent = `${interest} EUR`; 
    };
  
};


//EVENT HANDLERS
let currentAccount;
btnLogin.addEventListener('click', function(event){
  event.preventDefault();
  // alert('LOGIN');
  // console.log('LOGIN');
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  if (currentAccount?.pin === Number(inputLoginPin.value)){ // optional chaining
    // displauy ui and message
    labelWelcome.textContent = `Welcome back , ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;

    // remove password
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
      }
    // display movements
    displayMovements(currentAccount.movements);
    // display balance
    calcDisplayBalance(currentAccount);
    // display summary
    calcDisplaySummary(currentAccount);
  }
);

// IMPLEMENTING TRANSFERS
btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
 const reciveraccount = accounts.find(acc => acc.username === inputTransferTo.value);
 inputTransferAmount.value = inputTransferTo.value = '';
 if (amount > 0 && reciveraccount && currentAccount.balance >= amount && reciveraccount?.username !== currentAccount.username) {
  currentAccount.movements.push(-amount);
  reciveraccount.movements.push(amount);
  updateUI(currentAccount);
 }

});

btnLoan.addEventListener('click', function (e){
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);
    //update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// XLOSING ACCOUNT OR FIND INDEX METHOD
btnClose.addEventListener('click', function(e){
  e.preventDefault();
  if(inputCloseUsername.value === currentAccount.username && Number(inputLoginPin.value) === currentAccount.pin){
    const index = accounts.findIndex(acc, index, arr => acc.username === currentAccount.username);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


// part 1. simple array methods.

// 1.1 slice methods.

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));

// shallow copy of slice method
let arr1 = arr.slice();
console.log(arr1);

// 1.2 splice method.
// splice method mutates the original array 

console.log(arr.splice(2)); // removes the array tarting from index 2
console.log(arr); // remaing array after splice.

arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(1, 2);
console.log(arr);

// 1.3 REVERSE
// reverse method will reverse an array
// reverse method will mutate the array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);


// 1.4 CONCATE
// will add two arrays
console.log(arr.concat(arr2));
console.log(arr2.concat(arr));
console.log([...arr, ...arr2]);

// 1.5 JOIN
const letters = arr.concat(arr2);
console.log(letters.join('-'));


// PART 2 -- FOR EACH LOOPS

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const mov of movements){
//   console.log(mov);
// };

movements.forEach(element => {
  console.log("move", element);
});

movements.forEach(function(move){
  console.log(move+10000);
});

// counter variable
movements.forEach(function(movement, index, array){ // the exact syntax is function(item, index, array)
  console.log(movement, index, array);
});

// break statements not used in forEach loops
// jump statements not used in forEach loops.


//PART3 forEach loop with Map and Sets

// forEach with a Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map){
  console.log(`${key} : ${value}`);
});

// forEach with a set.
const currenciesUnique = new Set(['usd', 'gbp', 'usd', 'eur', 'eur']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (item, index, set) {
  console.log(item , index, set);
})

// PART CODING CHALLENGE -1
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs =function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0,1);
  dogsJuliaCorrected.splice(-2);
  // console.log(dogsJuliaCorrected);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  dogs.forEach(function(dog, i){
    const check = dog < 4 ? 'puppy' : 'adult';
    console.log(`Dog number ${i+1} is an ${check} and is ${dog} years old.`);
  });
};

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

checkDogs(dogsJulia, dogsKate);

//ARRAY METHODS MAP , FILTER, REDUCE
// map is similar to foreach but gives a new array.


// MAP METHOD.
const normalArr = [1, 2, 3, 4];
const normalArrMap = normalArr.map(function(item){
  return item*2;
});
console.log(normalArrMap);

// converting movement from euro to us dollars.
let movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsMapped = movements.map(function(element){
  return Math.trunc(element * eurToUsd);
});
console.log(movementsMapped);

// map with arraow function
// using call back functions always is called functional programming.
const moveMapArrow = movements.map((element) => element*eurToUsd+2);
console.log(moveMapArrow);

// like foreach method map method also has three parameters (element, index, array).

 const movementsDescriptions = movements.map((mov, i, arr)=>{
  if (mov >0){
    return `movement ${i+1} : You Deposited ${mov}`;
  } else {
    return `movement ${i+1} : You Withdrawn ${mov}`;
  }
 });

 console.log(movementsDescriptions);


 // FILTER METHOD
 const deposits = movements.filter((element, i, arr) => element >0);
 const deposits1 = movements.filter(function(element, i, arr){
 return  element >0;
 });

 console.log(deposits);
 console.log(deposits1);

 const withdrew = movements.filter((element, i, arr) => element < 0);
 console.log(withdrew);

 //REDUCE METHOD
 const balance = movements.reduce(function(accmulator, element, index, array){
  console.log(accmulator);
  return accmulator + element;
 }, 2000); // here 2000 is the initial value
 console.log(balance);

 const balance1 = movements.reduce(function(accmulator, cuurent, index, array){
  console.log(accmulator);
  return accmulator + cuurent;
 }, 2000); // here 2000 is the initial value
 console.log(balance);

 // maximum number using reduce
 const maximum = movements.reduce(function(accumulator, current){
  return accumulator > current ? accumulator : current; 
 }, 0);
 console.log("maximum", maximum);

 const max = movements.reduce((acc, mov)=>{
  if(acc > mov){
    return acc;
  } else {
    return mov;
  }
 }, movements[0]);
 console.log(max);


 // CODING CHALLENGE - 2
const calcAverageHumanAge = function(ages){
  const humanAge = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  const adult = humanAge.filter(age => age >= 18);
  const average = adult.reduce((acc, age)=>acc + age, 0)/adult.length;
  return average;
};

 const avg1 = calcAverageHumanAge([5,2,4,1,15,8,3]);
 console.log(avg1);

// CHAINING METHODS
const totalDepositsUSD = movements
.filter(mov => mov > 0)
.map(mov => mov * eurToUsd)
.reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);


// CODING CHALLENGE -3
const calcAverageHumanAge2 = ages => 
  ages.map(age => (age <= 2 ? 2 * age : 16 + age *4))
.filter(age => age >= 18)
.reduce((acc, age, i, arr) => acc + age/arr.length, 0);

// FIND METHOD

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// SOME METHOD.
// includes method checks for wquality while some method checks for any condition.
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

//EVERY CONDITION
console.log(movements.every(mov => mov >0));
console.log(account4.movements.every(mov => mov >0));

//SEPARATE CALLBACK FUNCTION
const deposit = mov => mov > 0;
console.log(account4.movements.every(deposit));
console.log(account4.movements.some(deposit));
console.log(account4.movements.filter(deposit));


// FLAT AND FLAT-MAP METHOD
// flat method just makes 2-d array into 1-d array
// flat method flatens an array.
const arr_flat = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr_flat.flat()); // [1, 2, 3, 4, 5, 6, 7, 8].
// flat method has the paramter depth, so it will convert any depth into a 1-d simple array.
const deep_arr = [[1, 2, 3,[4, 5]], [6, 7], 8];
console.log(deep_arr.flat()); // [1, 2, 3, [4, 5], 6, 7, 8];
console.log(deep_arr.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8];

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const totMovements = allMovements.reduce(function (acc, current, index, array)  {
  return acc + current;
}, 0);
console.log(totMovements);

const overallbalance = accounts
.map(acc => acc.movements)
.flat()
.reduce((acc, mov) => acc + mov, 0);

console.log(overallbalance);

// FLAT MAP
// flat map is nothing but combining map method with flat methos.
// flatMap method should have a callback function which is same as map method.
// flatmap goes only one level deep.

const overallbalanceFlatMap = accounts.flatMap(acc => acc.movements)
.reduce((acc, mov) => acc + mov, 0);

// SORTING ARRAYS
// js has built-in sort method.
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // this mutates the original array.
// sort method converts everything to strings and sort it.

console.log(movements.sort());

// return < 0, a, b
// return > 0, b, a

// sorting numbers ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b> a) return -1
});
console.log(movements); 

// sorting numbers descending
movements.sort((a, b) => {
  if (a < b) return 1;
  if (b < a) return -1
});
console.log(movements); 

// sorting numbers ascending
movements.sort((a, b) => a-b);
console.log(movements);

// sorting numbers descending
movements.sort((a, b) => b-a);
console.log(movements);

//PROGRAMATICALLY CREATE AND FILL ARRAYS
const x = new Array(4); // creates 4 empty elements
console.log(x); 

// FILL METHOD
console.log(x.fill(6)); // fills the empty array.

// fill method with begin parameter
const y = new Array(6);
console.log(y.fill(3, 2, 4)); // fills number 3 stating from index 2 and ends on 4

// fill will mutate original array
const z = [1, 2, 3, 4, 5, 6, 7];
console.log(z.fill(33, 3, 5));

// Array.from()
const a = Array.from({length:7}, ()=> 1);
console.log(a);
const b = Array.from({length:7}, (curr, i) => i+3);
console.log(b);

const c = Array.from({length:7}, (_, i) => i+3); // _ unused parameter2
console.log(c);

// querySelectorAll is not a real array.
// querySelectorAll is a node list.

const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
console.log(movementsUI);

// add event listerner method other than button
labelBalance.addEventListener('click', function(){const movementsUI = Array.from(document.querySelectorAll('.movements__value'))});

console.log(movementsUI.map(el => el.textContent.replace('EUR', '')));

// mapping callback call be the 2nd parameter in the from method

labelBalance.addEventListener('click', function(){
  const movementsUi5 = Array.from(
    document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('EUR', ''))
  )
});

const movementsUi2 = [...document.querySelectorAll('.movements__value')];


//ARRAY EXERCISES

//1. total deposits
const bankDepositsSum = accounts.flatMap(acc => acc.movements)
.filter(mov => mov > 0)
.reduce((accumulator, current, index, array) => accumulator + current);
console.log(bankDepositsSum);

//2. edposits greater than 1000
const deposits1000above = accounts.flatMap(acc => acc.movements)
.filter(acc => acc > 1000).length;
console.log(deposits1000above);

// counting using reduce method.
const numDeposits1000 = accounts
.flatMap(acc => acc.movements)
.reduce((count, curr) => (curr > 1000 ? count +1 : count), 0);
console.log(numDeposits1000);

//3  creATE AN OBJECT INSTEAD OF NUMBER / STRING
const { deposits2, withdrawals} = accounts
.flatMap(acc => acc.movements).reduce((sums, cur) => {
  // cur > 0 ? sums.deposits2 += cur : sums.withdrawals += cur; 
  sums[cur > 0 ? 'deposits2' : 'withdrawals'] += cur;
  return sums;
}, {deposits2:0, withdrawals:0});

console.log(deposits2, withdrawals);

//4. TITLE CASE
// this is a nice title => This Is a Nice Title
const convertTitle = function(title) {
  const capitalize = str => str[0].toUpperCase + str.slice(1);
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];  
  const titleCase = title.toLowerCase().split(' ').map(word => exceptions.includes(word) ? word : capitalize(word))
  .join(' ');
  return capitalize(titleCase);
};
console.log(convertTitle('this is a nice title'));

// CODING CHALLENGE -4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

//1.
dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));
console.log(dogs);

//2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log((dogSarah));
console.log(`Sarah's dog is eating ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`);

//3.
const ownersEatTooMuch = dogs.filter(dog => dog. curFood > dog.recFood)
.map(dog => dog.owners)
.flat();

//4. 
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);

//5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6. ok amount of food
const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood *1.1;
console.log(dogs.some(checkEatingOkay));

//7. 
console.log(dogs.filter(checkEatingOkay));

//8. 
const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsCopy);











































 1




























































































