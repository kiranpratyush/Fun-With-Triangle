const question = document.querySelector("#Question");
const choices = document.querySelectorAll(".choice-container");
const progressText = document.querySelector("#progressText");
const progressBarFull = document.querySelector("#progressBarFull");
const scoreText = document.querySelector("#score");
const overlay = document.querySelector(".final-overlay");
const finalScore = document.querySelector(".score");
const playAgain = document.querySelector(".btn-playagain");
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [
  {
    question: "what is 2+2",
    choice1: 1,
    choice2: 2,
    choice3: 3,
    choice4: 4,
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

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
}

function getNewQuestion() {
  console.log("function called");
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    finalScore.textContent = `Score:${score}`;
    overlay.style.display = "flex";
    progressBarFull.style.width = "100%";
    return;
  } else {
    questionCounter++;
    progressText.textContent = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / (MAX_QUESTIONS+1)) * 100}%`;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.textContent = currentQuestion.question;
    for (let i = 0; i < choices.length; i++) {
      choices[i].lastElementChild.textContent =
        currentQuestion["choice" + (i + 1)];
    }
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
  }
}
function incrementscore(num) {
  score += num;
  scoreText.textContent = score;
}
startGame();
for (let j = 0; j < choices.length; j++) {
  choices[j].addEventListener("click", function (e) {
    if (!acceptingAnswers) {
      return;
    }
    acceptingAnswers = false;
    let selectedChoice = choices[j].lastElementChild;
    console.log(e);
    console.log(selectedChoice);

    if (Number(selectedChoice.textContent) === currentQuestion.answer) {
      console.log(selectedChoice);
      selectedChoice.parentElement.classList.add("correct");
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
