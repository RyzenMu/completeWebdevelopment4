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

//solution 1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// solution 2
const [bmGoalkeeper, ...bmFieldplayers] = players1;
const [bdGoalkeeper, ...bdFieldPlayers] = players2;
console.log(bmGoalkeeper, bdGoalkeeper);
console.log(bmFieldplayers);
console.log(bdFieldPlayers);

// solution 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
console.log(allPlayers.length);

// solution 4
const bmSubstitute = ['thiago', 'Coutinho', 'Perinsic'];
const bmFinalPlayers = [...players1, ...bmSubstitute];
console.log(bmFinalPlayers);

// solution 5
const {team1:bmOdds, x: draw, team2 : bdOdds} = game.odds;
// const bmOdds = game.odds.team1;
// const draw = game.odds.x;
// const bdOdds = game.odds.team2;
console.log(bmOdds, draw, bdOdds);

const {odds: {team1, x:draw1, team2}} = game;
console.log(team1, draw1, team2);

// solution 6
game.printGoals('Lewandowski');
game.printGoals('Gnarby');
const printGoals1 = function(...players) {
  console.log(`${players.length} goals weer scored`);
  };
printGoals1('Davies', 'Muller', 'Lewandowski', 'Kimich');
printGoals1('Davies', 'Muller');
printGoals1(...game.scored);


// solution 7

team1 < team2 && console.log('Team 1 is likely to win');
team1 > team2 && console.log('Team 2 is likely to win');

// 




















