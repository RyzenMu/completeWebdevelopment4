// earlier data struictures in js had only arrays and objects
// now after es6 will are having sets
// the most commonly used iterable is arrays.

const orderSet = new Set ([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);

// strings are also iterables
console.log(new Set('jonas'));

// set methods
// 1. size
console.log(orderSet.size);
//2. has
console.log(orderSet.has('Pizza')); // true
console.log(orderSet.has('bread')); // false
// 3. add
orderSet.add('Garlic Bread');
console.log(orderSet);
// 4. delete
orderSet.delete('Risotto');
console.log(orderSet);
console.log(orderSet);
//6. looping through for-of
for(const order of orderSet) console.log(order);
// the main use case of sets is removing duplicate values.
// example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)]; // converting set to an array
console.log(staffUnique);











//5. clear
orderSet.clear();






