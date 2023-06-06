function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    let choice;
    if(num == 0){
        return "rock";
    }
    else if(num == 1){
        return "paper";
    }
    else if(num == 2){
        return "scissors";
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



let rock = document.querySelector(".rock");
rock.addEventListener('click', playRock);

let paper = document.querySelector(".paper");
paper.addEventListener('click', playPaper);

let scissors = document.querySelector(".scissors");
scissors.addEventListener('click', playScissors);

function changeIconAdverse(choice){
    let computerIcon = document.querySelector(".resAdverse");
    switch (choice) {
        case 'rock':
            computerIcon.textContent = "✊";
            break;
        case 'paper':
            computerIcon.textContent = "✋";
            break;
        case 'scissors':
            computerIcon.textContent = "✌";
            break;
        default:
          computerIcon.textContent = "❔";
      }
}

let joueurIcon = document.querySelector(".resJoueur");
let para = document.querySelector("main p");
let joueurScore = document.querySelector(".scoreJoueur");
let ComputerScore = document.querySelector(".scoreAdverse");

function playRock(){
    let computerChoice = getComputerChoice();
    changeIconAdverse(computerChoice);
    joueurIcon.textContent = "✊";
    para.textContent = getResult("rock", computerChoice);
    if (para.textContent.includes("win")){
        joueurScore.textContent = joueurScore.textContent.replace(/^\D+/g, '')
        let score = parseInt(joueurScore.textContent,10) + 1;
        joueurScore.textContent = "score joueur: " + score;
    }
    else if(para.textContent.includes("lost")){
        ComputerScore.textContent = ComputerScore.textContent.replace(/^\D+/g, '')
        let score = parseInt(ComputerScore.textContent,10) + 1;
        ComputerScore.textContent = "score adverse: " + score;
    }
    console.log(joueurScore.textContent);
}

function playPaper(){
    let computerChoice = getComputerChoice();
    changeIconAdverse(computerChoice);
    joueurIcon.textContent = "✋";
    para.textContent = getResult("paper", computerChoice);
    if (para.textContent.includes("win")){
        joueurScore.textContent = joueurScore.textContent.replace(/^\D+/g, '')
        let score = parseInt(joueurScore.textContent,10) + 1;
        joueurScore.textContent = "score joueur: " + score;
    }
    else if(para.textContent.includes("lost")){
        ComputerScore.textContent = ComputerScore.textContent.replace(/^\D+/g, '')
        let score = parseInt(ComputerScore.textContent,10) + 1;
        ComputerScore.textContent = "score adverse: " + score;
    }
    console.log(joueurScore.textContent);
}

function playScissors(){
    let computerChoice = getComputerChoice();
    changeIconAdverse(computerChoice);
    joueurIcon.textContent = "✌";
    para.textContent = getResult("scissors", computerChoice);
    if (para.textContent.includes("win")){
        joueurScore.textContent = joueurScore.textContent.replace(/^\D+/g, '')
        let score = parseInt(joueurScore.textContent,10) + 1;
        joueurScore.textContent = "score joueur: " + score;
    }
    else if(para.textContent.includes("lost")){
        ComputerScore.textContent = ComputerScore.textContent.replace(/^\D+/g, '')
        let score = parseInt(ComputerScore.textContent,10) + 1;
        ComputerScore.textContent = "score adverse: " + score;
    }
    console.log(joueurScore.textContent);
}