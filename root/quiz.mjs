//QUESTIONS

const questions = [
  {
    question: "What motivates you most to help animals?",
    answer1: "Teaching others about animal issues",
    answer1Total: "1",
    answer2: "Rescuing and caring for animals in need",
    answer2Total: "2",
    answer3: "Fighting for stronger laws and regulations",
    answer3Total: "3",
  },
  {
    question: "Which activity would you most enjoy?",
    answer1: "Giving presentations in schools or online",
    answer1Total: "1",
    answer2: "Volunteering at a shelter or fostering animals",
    answer2Total: "2",
    answer3: "Organizing petitions or attending public hearings",
    answer3Total: "3",
  },
  {
    question: "Your ideal project would be:",
    answer1: "Starting an animal education blog or YouTube channel",
    answer1Total: "3",
    answer2: "Creating a local animal rescue network",
    answer2Total: "2",
    answer3: "Campaigning for bans on animal testing",
    answer3Total: "1",
  },
  {
    question: "What's your top concern in animal rights?",
    answer1: "Lack of public awareness",
    answer1Total: "1",
    answer2: "Homeless pets and animal cruelty",
    answer2Total: "2",
    answer3: "Weak laws and lack of enforcement",
    answer3Total: "3",
  },
];

let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector(".quiz-container");
const questionEl = document.querySelector(".question");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
const restartButton = document.querySelector(".restart");
const result = document.querySelector(".result");

//Function to generate question
function generateQuestions(index) {
  //Select each question by passing it a particular index
  const question = questions[index];
  const option1Total = questions[index].answer1Total;
  const option2Total = questions[index].answer2Total;
  const option3Total = questions[index].answer3Total;
  //Populate html elements
  questionEl.innerHTML = `${index + 1}. ${question.question}`;
  option1.setAttribute("data-total", `${option1Total}`);
  option2.setAttribute("data-total", `${option2Total}`);
  option3.setAttribute("data-total", `${option3Total}`);
  option1.innerHTML = `${question.answer1}`;
  option2.innerHTML = `${question.answer2}`;
  option3.innerHTML = `${question.answer3}`;
}

function loadNextQuestion() {
  const selectedOption = document.querySelector('input[type="radio"]:checked');
  //Check if there is a radio input checked
  if (!selectedOption) {
    alert("Please select your answer!");
    return;
  }
  //Get value of selected radio
  const answerScore = Number(
    selectedOption.nextElementSibling.getAttribute("data-total")
  );

  ////Add the answer score to the score array
  score.push(answerScore);

  selectedAnswersData.push();

  const totalScore = score.reduce((total, currentNum) => total + currentNum);

  //Finally we incement the current question number ( to be used as the index for each array)
  currentQuestion++;

  //once finished clear checked
  selectedOption.checked = false;
  //If quiz is on the final question
  if (currentQuestion == totalQuestions - 1) {
    nextButton.textContent = "Finish";
  }
  //If the quiz is finished then we hide the questions container and show the results
  if (currentQuestion == totalQuestions) {
    container.style.display = "none";
    result.innerHTML = `<h1 class="final-score">Your score: ${totalScore}</h1>
           <div class="summary">
              <h1 class ="summary-title">Summary</h1>
              <p>You are:</p>
              <p>10 - 15 - You want to see the system change. You fight for better laws, corporate accountability, and institutional reform. You're strategic and persistent.</p>
              <p>5 - 10 - You're hands-on and heart-forward. You jump into action when animals are in need. Whether fostering pets or supporting shelters, you bring direct help. </p>
              <p>5 - You believe knowledge is power. You're passionate about raising awareness, sharing facts, and helping others understand animal issues. You're a voice that sparks change!</p>
          </div>
          <button class="restart">Restart Quiz</button>
           `;
    return;
  }
  generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
  //Decrement quentions index
  currentQuestion--;
  //remove last array value;
  score.pop();
  //Generate the question
  generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
  if (e.target.matches("button")) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
  }
}

generateQuestions(currentQuestion);
nextButton.addEventListener("click", loadNextQuestion);
previousButton.addEventListener("click", loadPreviousQuestion);
result.addEventListener("click", restartQuiz);
