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

let human_score = 0;
let computer_score = 0;

function playRound(human_choice, computer_choice) {
    if (human_choice == computer_choice){
        console.log("Both played " + human_choice + ", so tied");
    } else if (human_choice == 1 && computer_choice == 2){
        console.log("You lose! " + computer_choice + " beats " + human_choice);
        computer_score += 1;
    } else if (human_choice == 1 && computer_choice == 3){
        console.log("You win! " + human_choice + " beats " + computer_choice);
        human_score += 1;
    } else if (human_choice == 2 && computer_choice == 1){
        console.log("You win! " + human_choice + " beats " + computer_choice);
        human_score += 1;
    } else if (human_choice == 2 && computer_choice == 3){
        console.log("You lose! " + computer_choice + " beats " + human_choice);
        computer_score += 1;
    } else if (human_choice == 3 && computer_choice == 1){
        console.log("You lose! " + computer_choice + " beats " + human_choice);
        computer_score += 1;
    } else if (human_choice == 3 && computer_choice == 2){
        console.log("You win! " + human_choice + " beats " + computer_choice);
        human_score += 1;
    }
}

let computer_choice_function = computerChoiceMove();
let human_input = getHumanChoice();

console.log(playRound(human_input, computer_choice_function));