function getComputerChoice() {
    let jogadaCPU = "";
    let valorAleatório = Math.floor(Math.random()*3) + 1;
    if(valorAleatório == 1){
        jogadaCPU = "rock";
    }else if(valorAleatório == 2){
        jogadaCPU = "paper";
    }else{
        jogadaCPU = "scissors";
    }
    return jogadaCPU;
}

const computerSelection = getComputerChoice();


function getHumanChoice(){
    let jogadaPessoa = prompt("Qual a sua jogada? ");
    jogadaPessoa = jogadaPessoa.toLowerCase();
    return jogadaPessoa;
}

const humanSelection = getHumanChoice();
console.log(`A jogada da CPU foi ${computerSelection}`);
console.log(`A jogada da pessoa foi ${humanSelection}`);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
if(humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose. Paper beats Rock.");
    computerScore++;
} else if(humanChoice == "rock" && computerChoice == "scissors"){
    console.log("You win. Rock beats Scissors.");
    humanScore++;
} else if(humanChoice == "paper" && computerChoice == "rock"){
    humanScore++;
    console.log("You win. Paper beats Rock.");
} else if(humanChoice == "paper" && computerChoice == "scissors"){
    console.log("You lose. Scissors beats Paper.");
    computerScore++;
} else if(humanChoice == "scissors" && computerChoice == "rock"){
    console.log("You lose. Rock beats Scissors.");
    computerScore++;
} else if(humanChoice == "scissors" && computerChoice == "paper"){
    console.log("You win. Scissors beats Paper.");
    humanScore++;
}
return;
}

playRound(humanSelection,computerSelection);
console.log(humanScore);
console.log(computerScore);
