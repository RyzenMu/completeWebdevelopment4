// And Or and Not
let hasDriversLicense = true;
let hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
hasGoodVision = false;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);


const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

if (shouldDrive){
    console.log('should drive');
} else {
    console.log('Noo');
}