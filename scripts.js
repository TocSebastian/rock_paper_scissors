function getComputerChoice(){
    let random_number = Math.random()
    if(random_number>0.66){
      return 'SCISSORS'
    }else if (random_number > 0.33){
      return 'PAPER'
    }else {
      return 'ROCK'
    }
  }
  
  // console.log(getComputerChoice())
  
  
function getHumanChoice(){
    
    let choice_list = ['ROCK', 'PAPER', 'SCISSORS'];
    
    let user_input = prompt("Enter one of the options: Rock, Paper, Scissors");
  
    if (!user_input){
      alert("Invalid input. Please pick one of the options: Rock, Paper, Scissors");
      return getHumanChoice();
    }
  
    let formatted_input = user_input.trim().toUpperCase();
  
    if (choice_list.includes(formatted_input)){
      return formatted_input;
    }else{
      alert("Invalid choice. Please pick one of the options: Rock, Paper, Scissors");
      return getHumanChoice();
    }
    
  }

function playRound(computer_choice, human_choice){

    console.log(`Human choice is: ${human_choice}`)
    console.log(`Computer choice is: ${computer_choice}`)

    let game_rules = {
        'ROCK': {'wins_to': 'SCISSORS',
                'loses_to': 'PAPER'},
        'PAPER': {'wins_to': 'ROCK',
                'loses_to': 'SCISSORS'},
        'SCISSORS': {'wins_to': 'PAPER',
                    'loses_to': 'ROCK'}                            
                    };
    
    if (computer_choice === human_choice){
        return "DRAW";
    }else if (game_rules[human_choice]['wins_to'] === computer_choice){
        return "Player";
    }else {
        return "Computer";
    }
}


function playGame(){

    let human_score = 0;
    let computer_score = 0;
    let turn_number = 0;


    while (turn_number <5){

        let computer_selection = getComputerChoice();
        let human_selection = getHumanChoice();

        let round_result = playRound(computer_selection, human_selection);

        if (round_result == 'Player'){
            human_score++;
        }else if (round_result == 'Computer'){
            computer_score++;
        }
        console.log(`This Round was WON by ${round_result}!`)
        turn_number++;
        console.log(`The turn number is ${turn_number}`)
        }

    console.log(`The final score:\nHuman score: ${human_score}\nComputer score: ${computer_score}`);

    if (human_score === computer_score){
        console.log('The game is a DRAW!')
    }else if (human_score > computer_score){
        console.log('The game is won by PLAYER!')
    }else if (computer_score > human_score){
        console.log("The game is won by COMPUTER!")
    }

    // console.log(`The turn number is ${turn_number}`)
    

}

// console.log(playRound(computer_choice_tour, human_choice_tour))

playGame()