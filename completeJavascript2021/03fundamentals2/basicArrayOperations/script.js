const friends = ['leonardo', 'christian', 'tom'];
// push methods add an element to an array at the end and unshift adds to the begining.
let newLength2 = friends.push('keanueu');
console.log(newLength2); // only push method gives the length of the array.
friends.unshift('Arnold');
//pop method removes element from the last and shift removes from start.
friends.pop();
let newlength1 = friends.shift();
console.log(newlength1);
//remove exact elemnt by using splice function
let newLength = friends.splice(friends.indexOf('christian'), 1);
console.log(newLength);
console.log(friends);
// incudes method returns true/false
console.log(friends.includes('tom'));
console.log(friends.includes('arnold'));
