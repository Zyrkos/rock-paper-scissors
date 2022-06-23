




function computerPlay() {
    const choice = ["rock", "paper", "scissors"]; //array
    const randomChoice = Math.floor(Math.random()*3);
    //This function makes the computer randomly select an item from a given array. 
    //In this case, we create an array with the options rock, paper and scissors, and then use
    //Math.random(*3, since that is the number of items in the array), which gets any number
    //between 0 and 1 (but never 1), Math.floor then approximates it.
    const computerChoice = choice[randomChoice];
    return computerChoice;
}


const playRound = (playerSelection, computerSelection) => {
    //In this function, we're going to introduce all the possibilities for the match
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'It\'s a tie, you have both selected rock!'
    } else  if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'It\'s a tie, you have both selected paper!'
    } else  if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return 'It\'s a tie, you have both selected scissors!'
    //ties above
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats scissors.'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats rock.'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats paper.'
    //player wins above  
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lost! Paper beats rock.'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lost! Scissors beats paper.'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lost! Rock beats scissors.'
    }
    //computer wins above



}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));













