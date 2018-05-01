const Word = require('./Word');

module.exports.getWord = function () {

  const wordList = ["analysis",
    "feather",
    "rehearsal",
    "declaration",
    "feminist",
    "giant",
    "tract",
    "premature",
    "shrink",
    "illustrate",
    "health",
    "cooperative",
    "skip",
    "tongue",
    "catalogue",
    "half",
    "consultation",
    "costume"
  ];

  // Grabs random word from the wordList.
  const randomWord = wordList[Math.floor(Math.random() * wordList.length)];

  // creates word object and return to the index file
  let word = new Word(randomWord);

  return word;
}