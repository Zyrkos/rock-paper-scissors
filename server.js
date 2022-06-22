const choices = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return choices[Math.floor(Math.random()*3)];

}
//This function randomly selects an item from the "choices" array


console.log(computerPlay(choices));