const choices = ['Rock', 'Paper', 'Scissors'];

function game () {
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice() {
    let input = prompt("Type Rock, Paper or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper or Scissors");
        //This makes it so that when you press cancel, nothing goes wrong with the code
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        prompt("Type Rock, Paper or Scissors. Spelling needs to be exact, but capitalization doesn't matter."
        );
    }
    
    
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












