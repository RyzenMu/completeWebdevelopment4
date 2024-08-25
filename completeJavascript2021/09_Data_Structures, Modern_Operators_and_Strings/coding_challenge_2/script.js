const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals : function(name){
    let goals = 0;
    for (let i=0; i<this.scored.length; i++) {
      if (name === this.scored[i]){
        goals += 1;
      }
    }
    console.log(`${name} has scored ${goals} goals`);
  },
};

// solution 1
for (const [no, nsme] of Object.entries(game.scored)) console.log(`Goal ${no} : ${nsme}`);

// solution 2
let avg = 0;
let sum = 0;
for (const odd of Object.values(game.odds)) {
    sum += odd;
};
avg = sum / Object.values(game.odds).length;
console.log(avg);

// solution 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamstr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`odd of ${teamstr} ${odd}`);
}

