const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click",() => {
        const result = playRound(button.id, computerPlay());
        resultEl.textContent = result;
    });
});

function computerPlay(){
    const choice = ["rock","paper","scissor"];
    const randamChoice = Math.floor(Math.random() * choice.length);

    return choice[randamChoice];
}

function playRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection){
        return "It's a tie!"
    }else if(
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissor" && computerSelection === "paper")
    ){
      playerScore++;
      playerScoreEl.textContent = playerScore;
      return "You Win! " + playerSelection + " beats " + computerSelection ;
    }else{
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You Lose! " + computerSelection + " beats " + playerSelection; 
    }
}
