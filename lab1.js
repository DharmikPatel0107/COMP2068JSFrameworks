// Importing the prompt package
const prompt = require('prompt');

// Function to generate computer selection
function generateComputerSelection() {  
    const randomNumber = Math.random();
    if (randomNumber < 0.35) {
        return 'PAPER';
    } else if (randomNumber < 0.68) {
        return 'SCISSORS';
    } else {
        return 'ROCK';
    }
}

// Function to determine the winner
function determineWinner(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return "It's a tie";
    } else if (
        (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        return 'User Wins';
    } else {
        return 'Computer Wins';
    }
}

// Function to start the prompt
function startPrompt() {
    prompt.get(['userSelection'], function (err, result) {
        if (err) {
            return console.error(err);
        }

        const userSelection = result.userSelection.toUpperCase();

        if (userSelection === 'EXIT') {
            console.log('Exiting...');
            return; // Exit the program if the user chooses to exit
        }

        const computerSelection = generateComputerSelection();

        console.log('User Selection:', userSelection);
        console.log('Computer Selection:', computerSelection);

        const resultMessage = determineWinner(userSelection, computerSelection);
        console.log('Outcome:', resultMessage);

        // Continue prompting until the user chooses to exit
        startPrompt();
    });
}

// Start the prompt
prompt.start();
console.log('Enter your choice (ROCK, PAPER, SCISSORS) or type "EXIT" to quit.');
startPrompt(); // Start the prompt loop
