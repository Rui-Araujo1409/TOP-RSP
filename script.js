//criar a jogada da CPU
function getComputerChoice() {
    let jogadaCPU = "";
    //criar var com random que irá definir as escolhas possíveis   
    let valorAleatório = Math.floor(Math.random() * 3) + 1;
    //se for 1 será rock
    if (valorAleatório == 1) {
        jogadaCPU = "rock";
        //se for 2 será paper
    } else if (valorAleatório == 2) {
        jogadaCPU = "paper";
        //se for 3 será scissor
    } else {
        jogadaCPU = "scissors";
    }
    //retornar valor jogada
    return jogadaCPU;
}


const contentor = document.querySelector("#contentor");
const botãoRock = document.querySelector("#btn-rock");
const botãoPaper = document.querySelector("#btn-paper");
const botãoScissor = document.querySelector("#btn-scissor");
let teste = "";
let humanChoice = "";
   let humanScore = 0;
    //criar var resultadopessoa com valorIn 0
    let computerScore = 0;
contentor.addEventListener("click", (event) => {

    let target = event.target;

    switch (target.id) {
        case "btn-rock":
            teste = botãoRock.textContent.toLowerCase();
            break;
        case "btn-paper":
            teste = botãoPaper.textContent.toLowerCase();
            break;
        case "btn-scissor":
            teste = botãoScissor.textContent.toLowerCase();
            break;
    }
    function getHumanChoice(

    ) {
        //fx que vai retornar os valores para os elementos botão com event delegation
        //e colocar na var


        //criar var que vai guardar input da pessoa
        //let jogadaPessoa = prompt("Qual a sua jogada? ");
        //converter texto em minusculas 
        jogadaPessoa = teste;
        //retornar
        return jogadaPessoa;
    }
 


    //fx para avaliação jogada
    function playRound(humanChoice, computerChoice) {
        //comparar as vars das jogadas
        if (humanChoice == "rock" && computerChoice == "paper") {
            //adicionar 1 ao jogador vencedor
            computerScore++;
            //print da mensagem do resultado jogada
            console.log(`You lose. Paper beats Rock.`);
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            console.log(`You win. Rock beats Scissors.`);
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            console.log(`You win. Paper beats Rock.`);
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
            console.log(`You lose. Scissors beats Paper.`);
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
            console.log(`You lose. Rock beats Scissors.`);
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            console.log(`You win. Scissors beats Paper.`);
        } else if (humanChoice == "scissors" && computerChoice == "scissors") {
            console.log(`Tie. Both choose Scissors.`);
        } else if (humanChoice == "paper" && computerChoice == "paper") {
            console.log(`Tie. Both choose Paper.`);
        } else if (humanChoice == "rock" && computerChoice == "rock") {
            console.log(`Tie. Both choose Rock.`);
        }
        return;
    }

    console.log(computerScore);
    //fx que vai chamar a jogada e guardar/apresentar resultados (5 voltas)
    function playGame() {
        //criar o loop
        //for (i = 1; i <= n; i++) {
        //var que chama a jogada da pessoa
        let humanSelection = getHumanChoice();
        //var que chama a jogada da CPU
        let computerSelection = getComputerChoice();
        //chamar a fx da jogada
        playRound(humanSelection, computerSelection);
        //}
        //compara os resultados finais
        if(computerScore == 5 || humanScore == 5) {
            (computerScore > humanScore) ? console.log(`CPU wins the game. Final score: you: ${humanScore}, CPU: ${computerScore}`) : console.log(`You win the game. Final score: you: ${humanScore}, CPU: ${computerScore}`);
            } 
        }
        
        playGame();
});


//fx para a jogada pessoa


//criar vars para guardar resultados
//criar var resultadoCPU com valorIn 0



