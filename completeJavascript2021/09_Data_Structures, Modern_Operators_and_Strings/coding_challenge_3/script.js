'use strict';
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// solution 1
const eventsArr = [...gameEvents.values()];
console.log(eventsArr);
const eventsSet = new Set(eventsArr);
console.log(eventsSet);

// solution 2
gameEvents.delete(64);
console.log(gameEvents);

// solution 3
const timeArr = [...gameEvents.keys()];
let sum = 0;
let avg = 0;
for (const time of timeArr) {
  sum += time;
};
avg = (90/timeArr.length);
console.log(`An event happened on an avg og : ${avg}`);

// solution 4
for (const [key, value] of gameEvents) {
  key < 45 ? console.log(`[FIRST HALF] ${key} : ${value}`) : console.log(`[SECOND HALF] ${key} : ${value}`);
};














