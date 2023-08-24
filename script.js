const object = ["scissors", "paper", "stone"];
var playerScore = 0;
var computerScore = 0;
var drawScore = 0;

//Generate a random integer for the program to generate a response
var generatePlay = function () {
  var randomInteger = Math.floor(Math.random() * 3);
  if (randomInteger == 0) {
    randomPlay = object[0]; //Scissors
  } else if (randomInteger == 1) {
    randomPlay = object[1]; // Paper
  } else {
    randomPlay = object[2]; //Stonee
  }
  return randomPlay;
};

var gameResult = function (input, randomPlay) {
  if (input == randomPlay) {
    drawScore++;
    result = "Draw"; //same objects
  } else if (
    (input == object[0] && randomPlay == object[1]) ||
    (input == object[1] && randomPlay == object[2]) ||
    (input == object[2] && randomPlay == object[0])
  ) {
    playerScore++;
    result = "You Win";
  } else {
    computerScore++;
    result = "You Lose";
  }
  return result;
};

var resetScores = function () {
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;
};

var showScore = function () {
  return `Player: ${playerScore}\n Computer: ${computerScore}\n Draw: ${drawScore} Win Rate: ${
    playerScore / (computerScore + playerScore + drawScore)
  }`;
};

var main = function (input) {
  var playerObject = input.toLowerCase(); //Input validation
  if (!object.includes(playerObject)) {
    return 'Wrong input, please type in "scissors","paper" or "stone" to play another round';
  }
  var computerObject = generatePlay(); //Computer's turn

  var result = gameResult(playerObject, computerObject); //Results & Score

  return (
    "Your Input: " +
    playerObject +
    "<br>Program Input: " +
    computerObject +
    "<br><br>Game Result: " +
    result
  );
};
