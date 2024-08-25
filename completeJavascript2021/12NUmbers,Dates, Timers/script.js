'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions
const formatMovementDate = function(date, locale) {
    const calcDaysPassed = (date1, date2) => Math.round(Math.abs((date2 - date1)/(1000*60*60*241)));
    const daysPassed =calcDaysPassed (new Date(), date);
    if(daysPassed === 0) return 'today';
    if(daysPassed === 1) return 'yesterday';
    if(daysPassed <= 7) return `${daysPassed} days ago`;

    // date = new Date(acc.movementsDates[i]);
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth()+1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // const hours = date.getHours();
    // const minutes = date.getMinutes();
    // return `${day}/${month}/${year}, ${hours}:${minutes}`;
    return new Intl.DateTimeFormat(locale).format(date);
}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates);
    const displayDate = formatMovementDate(date, acc.locale);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  }); 
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

//experimenting with internationization time api
const options = {
  hour : 'numeric',
  minute : 'numeric',
  day : 'numeric',
  month : 'long', //2-digit
  year : 'numeric',
  weekday : 'long',
};

const locale = navigator.language;
console.log(locale); //en-In
labelDate.textContent = new Intl.DateTimeFormat('en-IN', options).format(now); // mm/dd/yy --> dd/mm/yy

const now2 = new Date();
const day = `${now2.getDate()}`.padStart(2, 0);
const month = `${now2.getMonth()+1}`.padStart(2, 0);
const year = now2.getFullYear();
const hours = now2.getHours();
const minutes = now2.getMinutes();
labelDate.textContent = `${day}/${month}/${year}, ${hours}:${minutes}`;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // create current date and time 
    const now2 = new Date();
    const day = `${now2.getDate()}`.padStart(2, 0);
    const month = `${now2.getMonth()+1}`.padStart(2, 0);
    const year = now2.getFullYear();
    const hours = now2.getHours();
    const minutes = now2.getMinutes();
    labelDate.textContent = `${day}/${month}/${year}, ${hours}:${minutes}`;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    //Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//CONVERTING NUMBERS
// all numbers in js are floating point numbers

console.log(23 === 23.0); // true
console.log(0.1+0.2);// 0.3000004

console.log(0.1 + 0.2 === 0.3); // false
console.log(Number('23'));
console.log(+'23'); // + sign makes type coersion

//PARSING is converting string to number
// for parsing string should start with a number
console.log(Number.parseInt('20px', 10)); // 20 // here 10 is the number system
console.log(Number.parseInt('e23', 10)); //NaN

//parse float
console.log(Number.parseInt('    2.5rem', 10)); // 2
console.log(Number.parseFloat('2.5rem   ', 10)); // 2.5

//namespace
console.log(parseFloat('2.5rem   ', 10)); // 2.5 // parseFloat is a global object but this is encouraged

//isNaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN('20X')); // false
console.log(Number.isNaN( 23 / 0 )); // false

//isFinite
console.log(Number.isFinite( 23 / 0 )); // false
console.log(Number.isFinite(23)); // true
console.log(Number.isFinite('23')); // false

// isInteger
console.log(Number.isInteger(34)); // true


// MATH AND ROUNDING NUMBERS
//1.sqrt
console.log(Math.sqrt(25)); //5
console.log(25 ** (1/2)); //5
console.log(25 ** (1/3)); //5

//2.max
console.log(Math.max(5, 18, 3, 7, 23)); //23
console.log(Math.max(5, 18, 3, 7, '23'));//23
console.log(Math.max(5, 18, 3, 7, '23px'));//Nan

//3.Constants -Pi
console.log(Math.PI);//3.14
console.log(Math.PI*Number.parseFloat('10px') ** 2);//3.14

//4.Random
console.log(Math.random()); //0.3567
const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;

//5.Rounding Integers
console.log(Math.round(23.4)); // 23
console.log(Math.round(23.8)); // 24

//ceil
console.log(Math.ceil(23.8)); // 24
console.log(Math.ceil(23.1)); // 24

// floor
console.log(Math.floor(23.9)); // 23
console.log(Math.floor(23.1)); // 23

// floor and trunk are same for positive numbers
console.log(Math.floor(-23.1)); // 24
console.log(Math.trunc(-23.1)); // 23

//decimals
console.log((2.7).toFixed(0)); //3
console.log((2.7).toFixed(1)); //2.7
console.log((2.7).toFixed(2)); //2.70

// REMINDER OPERATOR
// even

console.log(6 % 2 === 0);
const isEven = n => n % 2 === 0;
console.log(isEven(23));

labelBalance.addEventListener('click', function() {
  [...document.querySelectorAll('.movements__row')].forEach(function(row, i){
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
} );

//BIGINT
console.log(2**53-1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(385865784659834658936598346589356865);
console.log(385865784659834658936598346589356865n);
console.log(BigInt(385865784659834658936598346589356865)); // bigInt constructor is used with small numbers.
console.log(1000n + 1000n);
// console.log(1000n * 23); // cannot mix bigInt with other types.
console.log(1000n * BigInt(23));

// exceptions in bigInt
// logical exception
console.log(20n > 10); // true ..logical exception
console.log(20n === 20); // false 
console.log(20n == 20); // true
// string exception
console.log(3456645646746451353453535353 + ' is really big');


// DATES AND TIME // INTERNATIONAL TIMES
// 4 ways to initiLIZE dates
//1. constructor : new Date();
const now = new Date();
console.log(now); // current date and time

//2. by parsing a string
console.log(new Date(' 09 may 2024'));
console.log(new Date('09/05/2021'));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5)); // here month starts from 0: january.

// auto correcting by js
console.log(new Date(2037, 10, 35)); // dec 5 2037

// unix time
console.log(new Date(0)); // 01/01/1970

// 3 days after unix time
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Date Methods
// here month starts from 0: january.
const future = new Date(2037, 10, 19, 15, 23, 5);
console.log(future.getFullYear()); // always use getFullYear
console.log(future.getMonth()); // always use getMonth
console.log(future.getDate()); // always use getDate
console.log(future.getDay()); // always use getDay
console.log(future.getHours()); // always use getHours
console.log(future.getMinutes()); // always use getMinutes
console.log(future.getSeconds()); // always use getSeconds
console.log(future.toISOString()); // string formatting
console.log(future.getTime()); // time passed after 1.1.1970

//4. getting time stamp for right now
console.log(Date.now());

// setting date
future.setFullYear(2040);
console.log(future);

// Applying Dates in our Bankist App

// time-stamp
// to convert date to number cast Number
console.log(future);
console.log(Number(future));
console.log(+future);

const calcDaysPassed = (date1, date2) => Math.abs((date2 - date1)/(1000*60*60*241));
const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24))
console.log(days1);
















