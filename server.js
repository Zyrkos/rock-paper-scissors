let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const resultDiv = document.querySelector('.result');






function computerPlay() {
    const choice = ["rock", "paper", "scissors"]; 
    const randomChoice = Math.floor(Math.random()*3);
    const computerChoice = choice[randomChoice];
    return computerChoice;
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        const p = document.createElement('p');
        p.innerText = 'It\'s a tie, you have both selected rock!'
    } else  if (playerSelection === 'paper' && computerSelection === 'paper') {
        const p = document.createElement('p');
        p.innerText = 'It\'s a tie, you have both selected paper!'
    } else  if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        const p = document.createElement('p');
        p.innerText = 'It\'s a tie, you have both selected scissors!'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        const p = document.createElement('p');
        p.innerText = 'You win! Rock beats scissors.'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        const p = document.createElement('p');
        p.innerText = 'You win! Paper beats rock.'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        const p = document.createElement('p');
        p.innerText = 'You win! Scissors beats paper.'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++ 
        const p = document.createElement('p');
        p.innerText = 'You lost! Paper beats rock.'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        const p = document.createElement('p');
        p.innerText = 'You lost! Scissors beats paper.'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        const p = document.createElement('p');
        p.innerText = 'You lost! Rock beats scissors.'
    }
}

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
})


/*   const game = () => {
for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = prompt('Choose your weapon').toLowerCase();
    playRound(playerSelection, computerSelection)  
}

if (playerScore > computerScore) {
    return 'You\'ve won!'
} else if (playerScore > computerScore) {
    return 'You\'ve lost!'
} else {
    return 'It\s a draw!'
}
} */

/* console.log(game());
 */











