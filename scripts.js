function getComputerChoice(){
  let random_number = Math.random();
  if (random_number > 0.66) {
    return "SCISSORS"
  }else if (random_number > 0.33){
    return "PAPER"
  }else {
    return "ROCK"
  }

}

function getWinner(player_choice, computer_choice){
  if (player_choice == computer_choice){
    return "DRAW"
  }
  else if (player_choice === "ROCK" && computer_choice === "SCISSORS"){
    return "Player"
  }else if (player_choice === "PAPER" && computer_choice === "ROCK"){
    return "Player"
  }else if (player_choice === "SCISSORS" && computer_choice === "PAPER"){
    return "Player"
  }else{
    return "Computer"
  }
}

let player_score_elemnt = document.querySelector("#player_score");
let computer_score_elemnt = document.querySelector("#computer_score");

let player_score = 0;
let computer_score = 0;

function updateScore(winner){
  if (winner === 'Player'){
    player_score++;
  }else if (winner === 'Computer'){
    computer_score++;
  }

}

function updateScoreboard(){
  player_score_elemnt.textContent = player_score;
  computer_score_elemnt.textContent = computer_score;

}


const buttons = document.querySelectorAll(".buttons_container button");

buttons.forEach(button => {
  button.addEventListener('click', function(){
    const player_choice = button.textContent;
    console.log(`You clicked ${player_choice}!`)
    let computer_choice = getComputerChoice()
    console.log(`Computer choice is ${computer_choice}!`)
    let winner  = getWinner(player_choice, computer_choice)
    console.log(`The WINNER is ${winner}!`)
    updateScore(winner);
    updateScoreboard();
  });
});