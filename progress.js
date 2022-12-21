function updateProgress() {
  const ele = document.querySelector(".bar");
  const numberOfQuestions = document.querySelector(
    ".leetcode-questions"
  ).childElementCount;
  const questionUI = document.querySelector("#numberOfSolvedQuestions");
  const targetUI = document.querySelector("#targetQuestion");

  // Calculate Percentage
  const TARGET = 1000;
  const calculateProgress = (numberOfQuestions * 100) / TARGET;
  questionUI.innerHTML = numberOfQuestions;
  targetUI.innerHTML = TARGET;
  ele.style.width = `${calculateProgress}%`;

  // Update Level wise data alos
  updateLevel();
}

updateProgress();

// Question Level
function updateLevel() {
  // Ui components
  const easyUi = document.querySelector("#easySolved");
  const mediumUi = document.querySelector("#mediumSolved");
  const hardUi = document.querySelector("#hardSolved");

  // Ui Bar
  const easyBar = document.querySelector(".level-easy-bar .bar");
  const mediumBar = document.querySelector(".level-medium-bar .bar");
  const hardBar = document.querySelector(".level-hard-bar .bar");

  // Number of Questions : Solved
  const easyLevel = document.querySelectorAll(".leetcode-easy").length;
  const mediumLevel = document.querySelectorAll(".leetcode-medium").length;
  const hardLevel = document.querySelectorAll(".leetcode-hard").length;

  // Update Data
  easyUi.innerText = easyLevel;
  mediumUi.innerText = mediumLevel;
  hardUi.innerText = hardLevel;

  // Update Bar
  easyBar.style.width = `${calculateLevelPercentage(200, easyLevel)}%`;
  mediumBar.style.width = `${calculateLevelPercentage(600, mediumLevel)}%`;
  hardBar.style.width = `${calculateLevelPercentage(200, hardLevel)}%`;
}

// function calculate progress Level wise
function calculateLevelPercentage(t, n) {
  return (n * 100) / t;
}
