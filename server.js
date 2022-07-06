let playerScore = 0;
let computerScore = 0;

document.getElementById('rock').onclick = user;





function computerPlay() {
    const choice = ["rock", "paper", "scissors"]; 
    const randomChoice = Math.floor(Math.random()*3);
    const computerChoice = choice[randomChoice];
    return computerChoice;
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'It\'s a tie, you have both selected rock!'
    } else  if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'It\'s a tie, you have both selected paper!'
    } else  if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return 'It\'s a tie, you have both selected scissors!'
    
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++ 
        return 'You win! Rock beats scissors.'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'You win! Paper beats rock.'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return 'You win! Scissors beats paper.'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++ 
        return 'You lost! Paper beats rock.'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        return 'You lost! Scissors beats paper.'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        return 'You lost! Rock beats scissors.'
    }
}

  const game = () => {
/* for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = prompt('Choose your weapon').toLowerCase();
    playRound(playerSelection, computerSelection)  
} */

if (playerScore > computerScore) {
    return 'You\'ve won!'
} else if (playerScore > computerScore) {
    return 'You\'ve lost!'
} else {
    return 'It\s a draw!'
}
}

console.log(game());












