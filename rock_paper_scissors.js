console.log("Hello World");

function getComputerChoice() {
    return Math.random();
}

function computerChoiceMove() {
    let computer_choice = 0;
    let computer_choice_random = getComputerChoice();
    if (computer_choice_random < 0.33) {
        computer_choice = 1;
    } else if (computer_choice_random > 0.67) {
        computer_choice = 3;
    } else {
        computer_choice = 2;
    }

    return computer_choice;
}

function getHumanChoice(){
    let human_choice = prompt("Enter choice \n1. Rock \n2. Paper \n3. Scissors");
    return human_choice;
}

// console.log(getComputerChoice());
// console.log(getHumanChoice());

let human_score = 0;
let computer_score = 0;

function playRound(human_choice, computer_choice) {
    let computer_choice = Math.round(getComputerChoice()*10);
    let human_input = getHumanChoice();
    
    
}
