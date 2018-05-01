const Letter = require('./Letter');

const Word = function (word) {

  this.letters = [];

  // splitting the word into a character array
  this.wordArray = word.split('');

  // Adds the letter object to the letters array.
  this.wordArray.forEach(letter => {
    this.letters.push(new Letter(letter));
  });

  // Initial guesses remaining
  this.guessesRemaining = 10;

  // flag for the all letter guessed
  this.guessedAll = false;

  // Checks if letter exists in the word.
  this.checkLetterInWord = function (guessedLetter) {

    let ifAnyMatch = [];

    for (let i = 0; i < this.letters.length; i++) {

      let ret = this.letters[i].guessedLetter(guessedLetter);
      ifAnyMatch.push(ret);
    }

    // if letter does not exist in word guesses remaining will be reduced by 1.
    if (!ifAnyMatch.includes(true)) {
      this.guessesRemaining--;
    }
  }

  // Handles displaying letters and _ for the words.
  this.display = function () {

    let str = '';

    this.letters.forEach((letter) => {
      str += letter.display();
    });

    console.log('                           ' + str + '       Guesses remaining:' + this.guessesRemaining);
  }

  // Checks if complete work has been guessed.
  this.checkAllLetterGuessed = function () {
    let guess = [];

    for (let i = 0; i < this.letters.length; i++) {
      guess.push(this.letters[i].guessed);
    }

    if (!guess.includes(false)) {
      this.guessedAll = true;
    }
  }
}

module.exports = Word;