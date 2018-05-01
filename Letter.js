const Letter = function(letter) {

  this.letter = letter;
 
  this.guessed = false;

  // Diplay function which return blank / letter depending on whether
  // the letter has been guessed or not
  this.display = function() {
    if (this.guessed === false) {
      return ' __ ';
    } else {
      return this.letter;
    }
  }


  // Sets the guessed flag to true if the letter is guessed correctly
  this.guessedLetter = function(letter) {
    if (this.letter === letter) {
      this.guessed = true;
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Letter;