let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const resultDiv = document.querySelector('.result');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');




function computerPlay() {
    const choice = ["rock", "paper", "scissors"]; 
    const randomChoice = Math.floor(Math.random()*3);
    const computerChoice = choice[randomChoice];
    return computerChoice;
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        const p = document.createElement('p');
        p.innerText = 'It\'s a tie, you have both selected rock!';
        resultDiv.append(p);
    } else  if (playerSelection === 'paper' && computerSelection === 'paper') {
        const p = document.createElement('p');
        p.innerText = 'It\'s a tie, you have both selected paper!';
        resultDiv.append(p);
    } else  if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        const p = document.createElement('p');
        p.innerText = 'It\'s a tie, you have both selected scissors!';
        resultDiv.append(p);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        const p = document.createElement('p');
        p.innerText = 'You win! Rock beats scissors.';
        resultDiv.append(p);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        const p = document.createElement('p');
        p.innerText = 'You win! Paper beats rock.';
        resultDiv.append(p);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        const p = document.createElement('p');
        p.innerText = 'You win! Scissors beats paper.';
        resultDiv.append(p);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        const p = document.createElement('p');
        p.innerText = 'You lost! Paper beats rock.';
        resultDiv.append(p);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        const p = document.createElement('p');
        p.innerText = 'You lost! Scissors beats paper.';
        resultDiv.append(p);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        const p = document.createElement('p');
        p.innerText = 'You lost! Rock beats scissors.';
        resultDiv.append(p);
    }
}

const checkForWinner = (playerScore, computerScore) => {
    if(playerScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('player-won');
        h2.innerText = `You won ${playerScore} to ${computerScore}!`;
        resultDiv.append(h2);

    } else if(computerScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('computer-won');
        h2.innerText = `You lost ${playerScore} to ${computerScore}!`;
        resultDiv.append(h2);
    }
}

const updateScore = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player score: ${playerScore}`;
    computerScoreSpan.innerText = `Computer score: ${computerScore}`;
}

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
})

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
})













