let humanScore = 0;
let computerScore = 0;


//Get computer choice using rnadom number generator//

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
    }else if (humanSelection == "paper" && computerSelection == "rock"){
        return console.log("You win! Paper covers rock,");
    }else if (humanSelection == "scissors" && computerSelection == "paper"){
        return console.log("You win! Scissors cuts paper.");
    }else if (humanSelection == "rock" && computerSelection == "paper"){
        return console.log("You lose! Paper covers rock");
    }else if (humanSelection == "paper" && computerSelection == "scissors"){
        return console.log("You lose! Scissors cuts paper.");
    }else if (humanSelection == "scissors" && computerSelection == "rock"){
        return console.log("You lose! Rock smashes scissors");
    }else {
        return console.log("Hmmm...something has gone wrong.  Refresh to start over");
    }

}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection);




//Play a game of rps consisiting of 5 games//