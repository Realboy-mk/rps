let humanScore = 0;
let computerScore = 0;


//Get computer choice using random number generator//

function getComputerChoice(){
    let randomNum = Math.random();
    if(randomNum < 0.33){
        return "rock";
    } else if(randomNum < 0.66){
        return "paper";
    } else{
        return "scissors";
        }
}


//Get human choice using prompt function//

function getHumanChoice(){
    let userChoice = prompt("Please choose your combatant.  Rock, Paper, or Scissors");
    return userChoice;
}

//wirte playRound function to play a single round of RPS//

function playRound(humanChoice, computerChoice){
    if (humanSelection == computerSelection){
        return console.log("You tied.")
    }else if (humanSelection == "rock" && computerSelection == "scissors"){
        return console.log("You win! Rock smashes scissors");
        humanScore++;
    }else if (humanSelection == "paper" && computerSelection == "rock"){
        return console.log("You win! Paper covers rock,");
        humanScore++;
    }else if (humanSelection == "scissors" && computerSelection == "paper"){
        return console.log("You win! Scissors cuts paper.");
        humanScore++;
    }else if (humanSelection == "rock" && computerSelection == "paper"){
        return console.log("You lose! Paper covers rock");
        computerScore++;
    }else if (humanSelection == "paper" && computerSelection == "scissors"){
        return console.log("You lose! Scissors cuts paper.");
        computerScore++;
    }else if (humanSelection == "scissors" && computerSelection == "rock"){
        return console.log("You lose! Rock smashes scissors");
        computerScore++;
    }else {
        return console.log("Hmmm...something has gone wrong.  Refresh to start over");
    }

}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice()

function playGame(){
    for (let i = 0; i < 4; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore){
        console.log("You win the series!");
    }else if (humanScore < computerScore){
        console.log("You lost the series!");
    }else {
        console.log("You tied the series");
    }
}

playGame();


