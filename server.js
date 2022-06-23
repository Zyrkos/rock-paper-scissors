




function computerPlay() {
    const choice = ["Rock", "Paper", "Scissors"]; //array
    const randomChoice = Math.floor(Math.random()*3);
    //This function makes the computer randomly select an item from a given array. 
    //In this case, we create an array with the options rock, paper and scissors, and then use
    //Math.random(*3, since that is the number of items in the array), which gets any number
    //between 0 and 1 (but never 1), Math.floor then approximates it.
    const computerChoice = choice[randomChoice];
    return computerChoice;
}

console.log(computerPlay());













