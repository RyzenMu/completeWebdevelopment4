'use strict';

const tutor = {
    firstName: 'Jonas',
    lastName : 'Schemedict',
    age : 25,
    friends : [
        'bob',
        'micheal',
        'arnold'
    ]
    
}
tutor.specialization = "JavaScript";
tutor.youTubeChannel = "jonas Schemedict";
tutor['experience'] = "7 years";
console.log(tutor.firstName);
console.log(tutor);
console.log(tutor['lastName']);

// prompt('your name please');

console.log(`${tutor.firstName} has ${tutor.friends.length} friends and the best one is ${tutor.friends[2]}`)


