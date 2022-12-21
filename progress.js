function updateProgress() {
    const ele = document.querySelector(".bar");
    const numberOfQuestions = document.querySelector(".leetcode-questions").childElementCount;
    const questionUI = document.querySelector("#numberOfSolvedQuestions");
    const targetUI = document.querySelector("#targetQuestion");


    // Calculate Percentage
    const TARGET = 1000;
    const calculateProgress =  (numberOfQuestions*100)/TARGET;
    questionUI.innerHTML = numberOfQuestions;
    targetUI.innerHTML = TARGET;
    ele.style.width = `${calculateProgress}%`;
}

updateProgress();

// Question Level 
function updateLevel() {
    // Ui components
    const easyUi = document.querySelector('#easySolved');
    const mediumUi = document.querySelector('#mediumSolved');
    const hardUi = document.querySelector('#hardSolved');

    const easyLevel = document.querySelectorAll('.leetcode-easy').length;
    const mediumLevel = document.querySelectorAll('.leetcode-medium').length;
    const hardLevel = document.querySelectorAll('.leetcode-hard').length;

    easyUi.innerText = easyLevel;
    mediumUi.innerText = mediumLevel;
    hardUi.innerText = hardLevel;



}

