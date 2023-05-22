function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    let choice;
    if(num == 0){
        return "Rock";
    }
    else if(num == 1){
        return "Paper";
    }
    else if(num == 2){
        return "Scissors";
    }
}

function getResult(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection == computerSelection){
        return "it's a tie !"
    }
    else if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            return "paper beats rock, you lost !";
        }
        else if(computerSelection == "scissors"){
            return "rock beats scissors, you win !";
        }
    }

    else if(playerSelection == "scissors"){
        if(computerSelection == "paper"){
            return "scissors beats paper, you win !";
        }
        else if(computerSelection == "rock"){
            return "rock beats scissors, you lost !";
        }
    }

    else if(playerSelection == "paper"){
        if(computerSelection == "scissors"){
            return "scissors beats paper, you lost !";
        }
        else if(computerSelection == "rock"){
            return "paper beats rock, you win !";
        }
    }

}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let games = 0;
    while(games < 5){
        games++;
        let playerChoice = prompt("Welcome to the Rock/Paper/Scissors game please chose what to play");
        let computerChoice = getComputerChoice();
        let result = getResult(playerChoice, computerChoice);
        if(result.includes("win")){
            playerScore++;
        }
        else{
            computerScore++;
        }
        console.log(result);
    }
    if(playerScore > computerScore){
        console.log("the game has finished, you're the final winner !");
    }
    else if(playerScore < computerScore){
        console.log("the game has finished, you're the final loser !");
    }
    else if(playerScore == computerScore){
        console.log("the game has finished, there's no winner !");
    }
}

game();