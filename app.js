'use strict';
const game = () => {
  let pScore = 0;
  let cScore = 0;
  //start the game
  let main = document.querySelector('.main');

  let battle = document.querySelector('.battle');
  let userChoiceDisplay = document.querySelector('.battleUserImg');
  let pcChoiceDisplay = document.querySelector('.battlePcImg');
  let newGame = document.querySelector('.play-again');
  let resultDisplay = document.querySelector('.display-winner');

  let playerScore = document.querySelector('.userscore');
  let computerScore = document.querySelector('.pcscore');

  let userChoice;
  let choicePc;

  const playMatch = () => {
    let possibleChoices = document.querySelectorAll('.hand');
    //handle click event
    possibleChoices.forEach((possibleChoice) =>
      possibleChoice.addEventListener('click', () => {
        userChoice = possibleChoice.getAttribute('id');
        //update img of user choice
        if (possibleChoice === paper) {
          userChoiceDisplay.src = `images/Paper.png`;
        } else if (possibleChoice === rock) {
          userChoiceDisplay.src = `images/Rock.png`;
        } else {
          userChoiceDisplay.src = `images/Scissors.png`;
        }
        GenerateComputerChoice();
        compareHands();
        //reset
        main.classList.add('fadeout');
        main.style.transition = '0.2s';
        battle.classList.remove('fadein');
        battle.style.transition = '0.2s';
        //change display
        newGame.addEventListener('click', () => {
          main.classList.remove('fadeout');
          main.style.transition = '0.2s';
          battle.classList.add('fadein');
          battle.style.transition = '0.2s';
        });
      })
    );
  };

  //  Generate pc choice
  const GenerateComputerChoice = () => {
    //pc options
    let optionsPc = ['paper', 'rock', 'scissors'];
    //Generate pc number
    let numberPc = Math.floor(Math.random() * optionsPc.length);
    // Generate pc choice
    choicePc = optionsPc[numberPc];
    pcChoiceDisplay.src = `/images/${choicePc}.png`;
  };

  const compareHands = () => {
    //check for a draw
    if (userChoice === choicePc) {
      resultDisplay.innerHTML = 'DRAW';
      return;
    }
    //check for rock
    if (userChoice === 'rock') {
      if (choicePc === 'scissors') {
        resultDisplay.innerHTML = 'YOU WIN';
        pScore++;
        updateScore();
        return;
      } else {
        resultDisplay.innerHTML = 'YOU LOSE';
        cScore++;
        updateScore();
        return;
      }
    }
    //check for paper
    if (userChoice === 'paper') {
      if (choicePc === 'rock') {
        resultDisplay.innerHTML = 'YOU WIN';
        pScore++;
        updateScore();
        return;
      } else {
        resultDisplay.innerHTML = 'YOU LOSE';
        cScore++;
        updateScore();
        return;
      }
    }
    //check for scissors
    if (userChoice === 'scissors') {
      if (choicePc === 'paper') {
        resultDisplay.innerHTML = 'YOU WIN';
        pScore++;
        updateScore();
        return;
      } else {
        resultDisplay.innerHTML = 'YOU LOSE';
        cScore++;
        updateScore();
        return;
      }
    }
  };
  const updateScore = () => {
    playerScore.innerHTML = pScore;
    computerScore.innerHTML = cScore;
  };
  // execute all other functions
  playMatch();
};
// execute the main function
game();
