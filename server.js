const choices = ["Rock", "Paper", "Scissors"];

function game () {
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice () {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    while (check == false) {
        input = prompt(
            "Type Rock, Paper, or Scissors. Spelling needs to be exact. Capitalization doesn/'t matter"
        );
        while (input == null) {
            input = prompt("Type Rock, Paper, or Scissors");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random()*3)];
//This function randomly selects an item from the "choices" array
//You can test if the function is working by using: console.log(computerChoice(choices));
//In Math.random we multiply by 3 since that is the number of strings inside the 'choices' array.
}

function validateInput(choice) {
    return choices.includes(choice);
    
//This function checks the input and makes sure that is one of the three possible choices
}
let input = playerChoice();












