let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses : 0,
  ties : 0
};

function displayScore(){

  document.querySelector('.js-total-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}


function playGame(playerMove){

  let result='';

  let computerMove=pickComputerMove();

  if (playerMove === 'Scissors') {
    if (computerMove === 'Rock'){
      result='You Lost';
    }else if(computerMove=== 'Paper'){
      result='You Won';
    }else if(computerMove === 'Scissors'){
      result=`It's a Tie`;
    }
  }else if (playerMove === 'Rock'){
    if (computerMove === 'Rock'){
      result=`It's a Tie`;
    }else if(computerMove=== 'Paper'){
      result='You Lost';
    }else if(computerMove === 'Scissors'){
      result='You Won';
    }
  }else if (playerMove === 'Paper'){
    if (computerMove === 'Rock'){
      result='You Won';
    }else if(computerMove=== 'Paper'){
      result=`It's a Tie`;
    }else if(computerMove === 'Scissors'){
      result='You Lost';
    }
  }

  if (result === 'You Won'){
    score.wins+=1;
  }else if (result === 'You Lost'){
    score.losses+=1;
  }else if (result === `It's a Tie`){
    score.ties+=1;
  }

  

  document.querySelector('.js-result').innerHTML=`${result}`;

  document.querySelector('.js-moves-choosen').innerHTML=`You <img src="images/${playerMove}-emoji.png" class="move-icon">  <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
  
  displayScore();

  localStorage.setItem('score',JSON.stringify(score));
}

function pickComputerMove() {

  let computerMove='';

  let randomNumber=Math.random();

  if (randomNumber>=0 && randomNumber< 1/3){
    computerMove='Rock';
  }else if(randomNumber>=1/3 && randomNumber< 2/3){
    computerMove='Paper';
  }else if(randomNumber>=2/3 && randomNumber< 1){
    computerMove='Scissors';
  }

  return computerMove
}