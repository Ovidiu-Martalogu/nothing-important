console.log(`loading...`);
const gameRounds = 10;


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
let randPlayers;
let diceRolls;
for (let i = 0; i < gameRounds; i++) {
    console.log(`Round  ${i+1} start`);

for (let j = 0; j < players.length; j++) {
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        players[j].score = players[j].score + diceRoll;
        console.log(`[${players[j].avatar}] ${players[j].name} rolls: ${diceRoll}. His score is now: ${players[j].score}.`);
    

    if (players.length = players.length-1) {
        randPlayers = Math.floor(Math.random()*players.length);
        diceRolls = Math.floor(Math.random()*6)+1;
       players[j].score = players[j].score + diceRolls;
        // console.log(`Player ${players[j].name} rolls: ${diceRolls}. He score :${players[j].score}`);
        
        console.log(`${players[randPlayers].name} rolls: ${diceRolls}`);
    }

}
}

// for (let j = 0; j < players.length; j++) {
//         let diceRoll = Math.floor(Math.random() * 6) + 1;
//         players[j].score = players[j].score + diceRoll;
//         console.log(`[${players[j].avatar}] ${players[j].name} rolls: ${diceRoll}. His score is now: ${players[j].score}.`);
//     }
