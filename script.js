function getComputerChoice() {
    let jogadaCPU = Math.floor(Math.random()*3) + 1;
    if(jogadaCPU == 1){
        console.log("rock");
    }else if(jogadaCPU == 2){
        console.log("paper");
    }else{
        console.log("scissors");
    }
    return;
}

getComputerChoice();