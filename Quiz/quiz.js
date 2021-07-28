const question = document.querySelector("#Question");
const choices = document.querySelectorAll(".choice-container");
const progressText = document.querySelector("#progressText");
const progressBarFull = document.querySelector("#progressBarFull"); //Accesing the elements
const scoreText = document.querySelector("#score");
const overlay = document.querySelector(".final-overlay");
const finalScore = document.querySelector(".score");
const playAgain = document.querySelector(".btn-playagain");
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0; //Declaring variables
let questionCounter = 0;
let availableQuestions = [];
let questions = [
  {
    question: "what is 2+2",
    choice1: 1,
    choice2: 2,
    choice3: 3,
    choice4: 4, //list of Questions and answer
    answer: 4,
  },
  {
    question: "what is 2+3",
    choice1: 1,
    choice2: 2,
    choice3: 3,
    choice4: 5,
    answer: 5,
  },
  {
    question: "what is 2+2",
    choice1: 1,
    choice2: 2,
    choice3: 3,
    choice4: 4,
    answer: 4,
  },
  {
    question: "what is 2+2",
    choice1: 1,
    choice2: 2,
    choice3: 3,
    choice4: 4,
    answer: 4,
  },
];

const SCORE_POINTS = 100; //score points for one correct Answer
const MAX_QUESTIONS = 4; //No of Questions

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions]; //unpacking Questions to the available Question
  getNewQuestion(); //functions for starting game
}

function getNewQuestion() {
  //   console.log("function called"); written for debugging purposes
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    //if available Question become zero then create an overlay and show the result
    finalScore.textContent = `Score:${score}`;
    overlay.style.display = "flex";
    progressBarFull.style.width = "100%";
    return;
  } else {
    questionCounter++;
    progressText.textContent = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${
      (questionCounter / (MAX_QUESTIONS + 1)) * 100
    }%`;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length); //getting random Question index
    currentQuestion = availableQuestions[questionIndex];
    question.textContent = currentQuestion.question; // setting the Question in the text Content
    for (let i = 0; i < choices.length; i++) {
      choices[i].lastElementChild.textContent = //choices were the parent element so last child element were chosen to add the choice value
        currentQuestion["choice" + (i + 1)];
    }
    availableQuestions.splice(questionIndex, 1); //removing the question from the available Question
    acceptingAnswers = true;
  }
}
function incrementscore(num) {
  score += num; //score increment
  scoreText.textContent = score;
}
startGame();
for (let j = 0; j < choices.length; j++) {
  //added click even listener to the choices
  choices[j].addEventListener("click", function (e) {
    if (!acceptingAnswers) {
      return;
    }
    acceptingAnswers = false;
    let selectedChoice = choices[j].lastElementChild;

    if (Number(selectedChoice.textContent) === currentQuestion.answer) {
      selectedChoice.parentElement.classList.add("correct"); //if answer is correct then add correct class to the element
      incrementscore(SCORE_POINTS);
    } else {
      selectedChoice.parentElement.classList.add("wrong");
    }
    setTimeout(() => {
      if (selectedChoice.parentElement.classList.contains("correct")) {
        selectedChoice.parentElement.classList.remove("correct");
      } else {
        selectedChoice.parentElement.classList.remove("wrong");
      }
      getNewQuestion();
    }, 1000);
  });
}

overlay.addEventListener("click", function () {
  overlay.style.display = "none";
});
playAgain.addEventListener("click", function () {
  location.reload();
});
