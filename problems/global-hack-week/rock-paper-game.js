/*
    platform: Global Hack Week
    title: Rock Paper Scissors

    description:
    This program simulates a game of Rock Paper Scissors between two players. 
    Each player will input their choice, and the program will determine the winner 
    
    based on the rules:
    - Rock beats Scissors
    - Scissors beats Paper
    - Paper beats Rock
    
    If both players choose the same option, it's a tie.

    constraints:
    - The input for each player should be a string: "rock", "paper", or "scissors".
    - The inputs are case-insensitive.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    console.log(`Player chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log('Player wins!');
    } else {
        console.log('Computer wins!');
    }

    rl.close();
}

rl.question('Choose rock, paper, or scissors: ', (answer) => {
    const playerChoice = answer.toLowerCase();
    if (['rock', 'paper', 'scissors'].includes(playerChoice)) {
        playGame(playerChoice);
    } else {
        console.log('Invalid choice. Please choose rock, paper, or scissors.');
        rl.close();
    }
});
