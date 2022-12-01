function updateProgress() {
    const ele = document.querySelector(".bar");
    const numberOfQuestions = document.querySelector(".leetcode-questions").childElementCount;
    const questionUI = document.querySelector("#numberOfSolvedQuestions");
    const targetUI = document.querySelector("#targetQuestion");


    // Calculate Percentage
    const TARGET = 200;
    const calculateProgress =  (numberOfQuestions*100)/TARGET;
    questionUI.innerHTML = numberOfQuestions;
    targetUI.innerHTML = TARGET;
    ele.style.width = `${calculateProgress}%`;
}

updateProgress();
