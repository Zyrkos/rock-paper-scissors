const choices = ['Rock', 'Paper', 'Scissors'];

function game () {
    playRound();
}

function playRound(playerSelection, computerSelection) {
    const playerSelection = playerChoice();
    const computerSelection = computerPlay();


}

function computerPlay() {
    return choices[Math.floor(Math.random()*3)];
//This function randomly selects an item from the "choices" array
//You can test if the function is functioning by using: console.log(computerPlay(choices));

}

function playerChoice(){
    let input = prompt('Type Rock, Paper or Scissors');
    


}

game();



