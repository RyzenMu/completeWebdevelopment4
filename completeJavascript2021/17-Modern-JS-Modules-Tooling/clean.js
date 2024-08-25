'strict mode';

const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimits = Object.freeze ({
  jonas: 1500,
  matilda: 100,
});
// spendingLimits.jay = 200;

const getLimit = (limits, user) => limits?.[user] ?? 0;

const addExpense = function (state, limits, value, description, user='jonas') {
  // if (!user) user = 'jonas';
  const cleanUser = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0; 
  const limit = spendingLimits?.[user] ?? 0;

  if (value <= getLimit(cleanUser)) {
    return [...state, { value: -value, description: description, cleanUser }];
    // budget.push({ value: -value, description: description, cleanUser });
  }
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
console.log(newBudget1);
const newBudget2 = addExpense(newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
  const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget3);

const checkExpenses = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user) ? {...entry, flag: 'limit'} : entry;
  })
  // for (const entry of newBudget3) {
  // const limit = spendingLimits?.[user] ?? 0;

    // let lim;
    // if (spendingLimits[entry.user]) {
    //   lim = spendingLimits[entry.user];
    // } else {
    //   lim = 0;
    // }

    // if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
    
  // }
};
const finalBudget = checkExpenses(newBudget3, spendingLimits);

console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state.filter(entry => {
    entry.value <= -bigLimit
  }).map(entry =>entry.description.slice(-2)).join('/')
  .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}` , ' ');
  // let output = '';
  // for (const entry of budget) {
  //   if (entry.value <= -bigLimit) {
  //     output += entry.description.slice(-2) + ' / '; // Emojis are 2 chars
  //   }
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

logBigExpenses(finalBudget, 1000);
