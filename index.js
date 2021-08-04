var readlineSync = require('readline-sync');
var score = 0;
//Input User Name
var userName = readlineSync.question("Enter your name? ");
console.log("Hello! " + userName.toUpperCase() + " to DO YOU KNOW Deepali?");
//Function play
function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toLowerCase() === answer) {
    console.log("Right!");
    score++;
  } else {
    console.log("Wrong!");
    score;
  }
}

//Array of Question
var questions = [
  {
    question: "Where do I live? ",
    answer: "lucknow"
  },
  {
    question: "Am I older than 25? ",
    answer: "no"
  },
  {
    question: "Who is my favourite superhero? ",
    answer: "iron man"
  },
  {
    question: "Which is my favourite ice cream flavour? ",
    answer: "black current"
  },
  {
    question: "Which is my favoyrite colour? ",
    answer: "black"
  }
]
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);

}
console.log("You SCORED: ", score);
console.log("\r\n")
console.log("Here are HIGHSCORES: ");
//High Scores Array
var highScores = [{
  name: "Deepali", score: "5"
}, {
  name: "xyz", score: "5"
}]
for (var j = 0; j < highScores.length; j++) {
  var currentHighScore = highScores[j];
  if (currentHighScore.score === "5") {
    console.log(currentHighScore.name, currentHighScore.score)
  }
}

