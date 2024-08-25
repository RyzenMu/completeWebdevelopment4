/* in javascript there are only 5 falsey values
1. 0
2. '' - empty string
3. undefined.
4. null
5. NaN.

*/
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean({})); // empty object. // empty object is true.

// Boolean is always type coersion.

const money = 0; 
if (money) {
    console.log("Dont spend it all");
} else {
    console.log("You should get a job");
}

let height;
if (height){
    console.log('h provided');
} else {
    console.log("h not provided");
}


