const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();

}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

        switch(randNum){
            case 1:
                computer = "ROCK";
                break;
                case 2:
                    computer = "PAPER";
                    break;
                    case 3:
                        computer = "SCISSORS";
                        break;
    }
}
function checkWinner(){
    if(player == computer){
        return "Draw!";
}
    else if(computer == "Rock"){
        return (player == "Paper") ? "You Win!" : "Lose!"
    }
    else if(computer == "Paper"){
        return (player == "Scissors") ? "You Win!" : "Lose!"
    }
    else if(computer == "Scissors"){
        return (player == "Rock") ? "You Win!" : "Lose!" 
    }
}
    

