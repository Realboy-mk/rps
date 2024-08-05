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

//Declare player score variables//

//wirte playRound function to play a single round of RPS//

//Play a game of rps consisiting of 5 games//