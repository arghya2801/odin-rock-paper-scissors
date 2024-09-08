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
        alert("Both played " + human_choice + ", so tied");
    } else if (human_choice == 1 && computer_choice == 2){
        alert("You lose! " + computer_choice + " beats " + human_choice);
        computer_score += 1;
    } else if (human_choice == 1 && computer_choice == 3){
        alert("You win! " + human_choice + " beats " + computer_choice);
        human_score += 1;
    } else if (human_choice == 2 && computer_choice == 1){
        alert("You win! " + human_choice + " beats " + computer_choice);
        human_score += 1;
    } else if (human_choice == 2 && computer_choice == 3){
        alert("You lose! " + computer_choice + " beats " + human_choice);
        computer_score += 1;
    } else if (human_choice == 3 && computer_choice == 1){
        alert("You lose! " + computer_choice + " beats " + human_choice);
        computer_score += 1;
    } else if (human_choice == 3 && computer_choice == 2){
        alert("You win! " + human_choice + " beats " + computer_choice);
        human_score += 1;
    }
}

function playGame(){
    // for (let i = 0; i < 5; i++){
        let computer_choice_function = computerChoiceMove();
        let human_input = getHumanChoice();
        playRound(human_input, computer_choice_function);
        // }
        
        console.log("Your score - " + human_score);
        console.log("Computer score - " + computer_score);
        if (human_score > computer_score) console.log("You win!")
            else if (human_score < computer_score) console.log("You lose!")
        else console.log("Game Tied!")
}

function displayScore(){
    resultsDiv.innerHTML = `
    <p>Result</p>
    <p>Player Score: ${human_score}</p>
    <p>Computer Score: ${computer_score}</p>
    `
    if (human_score == 5 || computer_score == 5){
        if (human_score == 5) {
            alert("You win the game!")
        } else if (computer_score == 5){
            alert("You lose!")
        }
        
        resultsDiv.innerHTML = `
        <p>Final Result</p>
        <p>Player Score: ${human_score}</p>
        <p>Computer Score: ${computer_score}</p>
        `
        
    
        human_score = 0;
        computer_score = 0;
    }
    
}

// console.log(playRound(human_input, computer_choice_function));
// console.log(playGame())

const resultsDiv = document.getElementById("results");

const rock = document.getElementById("rock");
rock.addEventListener("click", () => {
    console.log("rock");
    let computer_choice_function = computerChoiceMove();
    let human_input = 1;
    playRound(human_input, computer_choice_function);
    displayScore();
});

const paper = document.getElementById("paper");
paper.addEventListener("click", () => {
    console.log("paper");
    let computer_choice_function = computerChoiceMove();
    let human_input = 2;
    playRound(human_input, computer_choice_function);
    displayScore();
});

const scissor = document.getElementById("scissor");
scissor.addEventListener("click", () => {
    console.log("scissor");
    let computer_choice_function = computerChoiceMove();
    let human_input = 3;
    playRound(human_input, computer_choice_function);
    displayScore();
});

