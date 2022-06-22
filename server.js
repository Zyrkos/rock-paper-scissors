const choices = ["Rock", "Paper", "Scissors"];



function playerChoice () {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);           
    while (check == false) {
        input = prompt(
            "Type Rock, Paper, or Scissors. Spelling needs to be exact. Capitalization doesn't matter"
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
}



function validateInput(choice) {
    return choices.includes(choice);
}



let input = playerChoice();







