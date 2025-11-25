console.log('=== 🎲 Dice game 🎲 ===');

// values to store in memory 
// number of rounds (const)
// - score for player 1
// - score for player 2


// IMPLEMENTATION
// for each roud, 
//      - generate & display for each player a randon number between 1 and 6
//      - add the value to the current score

const gameRounds = 10;
let allScore= [];
let win={};

let players = [
    {
        name: 'Mugurel',
        avatar: '⚽',
        score: 0
    },
    {
        name: 'Codruța',
        avatar: '😻',
        score: 0
    },
    {
        name: 'Petruț',
        avatar: '🦕',
        score: 0
    },
    {
        name: 'Cristinuța',
        avatar: '🦋',
        score: 0
    },
    {
        name: 'Cornelian',
        avatar: '⛸',
        score: 0
    }];

console.log(`The players are: `);
for (let i = 0; i < players.length; i++) {
    console.log(`[${players[i].avatar}] ${players[i].name} `);
}

// the game
for (let i = 0; i < gameRounds; i++) {
    console.log(``);
    console.log(`** ROUND ${i + 1} STARTS **`);

    for (let j = 0; j < players.length; j++) {
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        players[j].score = players[j].score + diceRoll;
        console.log(`[${players[j].avatar}] ${players[j].name} rolls: ${diceRoll}. His score is now: ${players[j].score}.`);
      
    }
 
}

let maxScore=[players[0].score];
//let minScore=players[0].score;
let testScore=[];
//let loosingPlayer=players[0].name;
let winnigPlayer = players[0].name;
for (let i = 0; i < players.length; i++) {
    
    if (players[i].score > maxScore) {
        maxScore = players[i].score;
        winnigPlayer = players[i].name;
     
}


    // if (players[i].score < minScore) {
    //     minScore = players[i].score;
    //     loosingPlayer = players[i].name;
    //     testScore.push(players[i].score);
               
    // }
    players.sort((a,b) =>a.score - b.score);
}
console.log(` `);
let scores=[];
for (let i = 0; i < players.length; i++){
    console.log(`Place ${players.length-i} is: ${players[i].name}, with score:${players[i].score}`);
      scores.push(players[i].score);
      
     }


console.log(` `);
console.log(`Winning player is : ${winnigPlayer}, with maxim score : ${maxScore}`);

console.log(` `);
console.log(`Loosing player is : ${players[0].name}, with min score : ${players[0].score}`);
console.log(scores);
const duplicates = players.filter((player, index, arr) =>
  arr.findIndex(p => p.score === player.score) !== index
);

console.log(duplicates);

