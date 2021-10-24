'use strict';

let computerPlay = function () {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    console.log('rock');
  } else if (randomNumber === 2) {
    console.log('scissors');
  } else {
    console.log('paper');
  }
};

computerPlay();

let playGame = function (player, pc) {
    if(player === 1 )
};
