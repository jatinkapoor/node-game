const inquirer = require('inquirer');
const wordgenerator = require('./wordgenerator');

/**
 * Inquirer question that ask for player to guess letter.
 */
const question = {
  name: "letter",
  message: "Enter a letter: ",
  //Validation for input - the player can only input one letter at a time.
  validate: function (input) {
    if (input.length === 1 && /[a-z]/.test(input.trim().toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }
}

// Initial function that will be invoked to start the game.
const startGame = function () {

  var word = wordgenerator.getWord();
  word.display();
  getUserGuess(word);
}

// Function that will ask player for letter and   
const getUserGuess = function (word) {

  inquirer.prompt([
    question
  ]).then(answer => {

    // checks for letter to exist in the word
    word.checkLetterInWord(answer.letter.toLowerCase());

    // displays the hidden word on the console
    word.display();

    // checks if complete word is guessed or not?
    word.checkAllLetterGuessed();

    if (! word.guessedAll) {

      if (word.guessesRemaining > 0) {

        getUserGuess(word);
      } else {

        console.log("\n" + "                   Ohh No ! You ran out of your guesses !\n\n");
        startGame();
      }
    } else if (word.guessedAll) {

      console.log("\n" + "                   Good Job ! You nailed it !\n\n");
      startGame();
    }
  });
}

// Invoke start game function.
startGame();