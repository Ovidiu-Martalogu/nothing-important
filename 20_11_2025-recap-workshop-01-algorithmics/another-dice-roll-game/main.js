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

console.log(` `);

console.log(`The list players are: `);
// prin metoda Ficher-Yales
for (let i = players.length - 1; i > 0; i--) {
    const randomList = Math.floor(Math.random() * (i + 1));

    const auxVariable = players[randomList];
    players[randomList] = players[i];
    players[i] = auxVariable;
}
for (let i = 0; i < players.length; i++) {

    console.log(`[${players[i].avatar}] ${players[i].name} `);

}
/*
// alta varianta-a mea
const listPlayers = [...players].sort(() => Math.random() - 0.5);
for (let i = 0; i < players.length; i++) {

    console.log(`[${listPlayers[i].avatar}] ${listPlayers[i].name} `);
}
*/
console.log(` `);

// the game
for (let i = 0; i < gameRounds - 1; i++) {
    console.log(``);
    console.log(`** ROUND ${i + 1} STARTS **`);

    for (let j = 0; j < players.length; j++) {
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        players[j].score = players[j].score + diceRoll;
        console.log(`[${players[j].avatar}] ${players[j].name} rolls: ${diceRoll}. His score is now: ${players[j].score}.`);
    }

}
for (let i = gameRounds - 1; i < gameRounds; i++) {
    console.log(``);
    console.log(`** ROUND ${i + 1} STARTS **`);
    for (let j = 0; j < players.length - 1; j++) {
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        players[j].score = players[j].score + diceRoll;
        console.log(`[${players[j].avatar}] ${players[j].name} rolls: ${diceRoll}. His score is now: ${players[j].score}.`);
    }
}

let maxScore = [players[0].score];

let winnigPlayer = players[0].name;
for (let i = 0; i < players.length; i++) {

    if (players[i].score > maxScore) {
        maxScore = players[i].score;
        winnigPlayer = players[i].name;
    }

    players.sort((a, b) => a.score - b.score);
}
console.log(` `);
let scores = [];
for (let i = 0; i < players.length; i++) {
    console.log(`Place ${players.length - i} is: ${players[i].name}, with score:${players[i].score}`);
    scores.push(players[i].score);

}

console.log(` `);
console.log(`Winning player is : ${winnigPlayer}, with maxim score : ${maxScore}`);

console.log(` `);
console.log(`Loosing player is : ${players[0].name}, with min score : ${players[0].score}`);
console.log(scores);


/*
console.log('Quiz!');

console.log(quizData);

// shuffle an array using Fisher - Yates algorithm
for (let i = quizData.length - 1; i > 0 ; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    // console.log(i, randomIndex);

    const aux = quizData[randomIndex];
    quizData[randomIndex] = quizData[i];
    quizData[i] = aux;
}

for (let i = 0; i < quizData.length; i++) {
    alert(`Question: ${i + 1} \nCategory: ${quizData[i].category} \nDifficulty: ${quizData[i].difficulty} \n\n${quizData[i].question}`)
}
*/


// for (let j = 0; j < players.length; j++) {
//         let diceRoll = Math.floor(Math.random() * 6) + 1;
//         players[j].score = players[j].score + diceRoll;
//         console.log(`[${players[j].avatar}] ${players[j].name} rolls: ${diceRoll}. His score is now: ${players[j].score}.`);
//     }

/*

console.log(`The states are: `);
let list = {};
for (let i = 0; i < players.length; i++) {
    randPlayers = Math.floor(Math.random() * players.length);
    list = players[randPlayers];
    console.log(`[${players[randPlayers].avatar}] ${players[randPlayers].name} `);
}
console.log(`lista:${list}`);*/