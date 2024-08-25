const mark = {
  fullName: "Max Muller",
  mass: 78,
  height: 1.69,
  calBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "Jonas Schemidict",
  mass: 92,
  height: 1.95,
  calBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
mark.calBMI();
john.calBMI();
console.log(mark.bmi);
console.log(john.bmi);

// condition checking
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s bmi is ${mark.bmi} is higher than ${john.fullName}'s bmi ${john.bmi}`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s bmi is ${john.bmi} is higher than ${mark.fullName}'s bmi ${mark.bmi}`
  );
} else {
  console.log();
}

console.log("This is a snippet");
console.log("This is another snippet");
console.log(28);

// bug fixme