// Global Elements
const searchBox =  document.querySelector('.search-box #topic');

// Simple Logic
// Accessing all buttons 
const allButtons = document.querySelectorAll("button#show-hide");

allButtons.forEach((button) => {
    button.addEventListener("click", () => {

        const parent = button.parentElement;
        const grandParent = parent.nextElementSibling;
        let grandParentState = grandParent.style.display;

        if (grandParentState === 'none') {
            grandParent.setAttribute("style", "display:block");
            button.innerText = "Hide";
        } else {
            grandParent.setAttribute("style", "display:none");
            button.innerText = "Show";
        }

    });

});


// ...
function updateProgress() {
    const ele = document.querySelector(".bar");
    const numberOfQuestions = document.querySelector(
        ".leetcode-questions"
    ).childElementCount - 1;
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

    // Create Quick link
    generateQuickLink();
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
    easyBar.style.width = `${calculateLevelPercentage(400, easyLevel)}%`;
    mediumBar.style.width = `${calculateLevelPercentage(400, mediumLevel)}%`;
    hardBar.style.width = `${calculateLevelPercentage(200, hardLevel)}%`;
}

// function calculate progress Level wise
function calculateLevelPercentage(t, n) {
    return (n * 100) / t;
}

// ...
// General function for Hide and Show
function solution(value) {
    const allSolution = document.querySelectorAll("#hidden");
    allSolution.forEach(solution => {
        if (value === 'show') {
            solution.setAttribute("style", "display:block");
        } else if (value === 'hide') {
            solution.setAttribute("style", "display:none");
        }
    })
}

const showAllBtn = document.querySelector("#showAll");
const hideAllBtn = document.querySelector("#hideAll");

showAllBtn.addEventListener("click", () => {
    solution("show");
})

hideAllBtn.addEventListener("click", () => {
    solution("hide");
})


// Topic Tally
// Tally updater
// function updateTally() {
//     const tallyTopic = document.querySelectorAll('.tally-topic');
//     tallyTopic.forEach(topic => {
//         const topicId = topic.id;
//         const topicNo = topic.children[1];
//         const topicQuery = `.leetcode-${topicId}`;
//         const allQuestions = document.querySelectorAll(topicQuery).length;
//         topicNo.textContent = allQuestions;
//     });
// }

// updateTally();


// General Function for show and Hide question on the basis of level
function solutionByLevel(level = 'all') {
    const everySolution = document.querySelectorAll('.leetcode');
    everySolution.forEach(sol => {
        sol.setAttribute('style', 'display:none');
    });

    everySolution.forEach(sol => {
        let query = `leetcode-${level}`;
        if (sol.classList.contains(query)) {
            sol.setAttribute('style', 'display:block');
        } else if (level === 'all') {
            sol.setAttribute('style', 'display:block');
        }
    })
}

const everyLevel = document.querySelectorAll('.visible-by-level button');
everyLevel.forEach(button => {
    button.addEventListener('click', (event) => {
        let level = button.id;
        solutionByLevel(level);
    })
})

// HOme Button
const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => {
    solutionByLevel();
});

// ...
// Show Topic wise Solutions
function visibleQuestionsByTopic(subject) {
    // Access all Questions
    const everyQuestion = document.querySelectorAll('.leetcode');
    const subjectString = `leetcode-${subject}`;
    everyQuestion.forEach(question => {
        question.setAttribute('style', 'display:none');
    })

    // Now, show only selected questions
    everyQuestion.forEach(question => {
        if (question.classList.contains(subjectString)) {
            question.setAttribute('style', 'display:block');
        }
    })
}

//...
// Search Question by Topic
function SearchTopic() {
    const menu = document.querySelector('.search-box #topic');
    const menuInfo = document.querySelector('.search-result');
    let searchTopic = menu.value;
    let searchString = `.leetcode-${searchTopic}`;
    let searchResult = document.querySelectorAll(searchString).length;

    // calling solution by level function
    solutionByLevel(searchTopic);

    // show number of question solved
    if (searchTopic === 'all') {
        let n = document.querySelectorAll('.leetcode').length;
        menuInfo.innerHTML =`<i class="fa-solid fa-hashtag"></i> ${n}`;
    } else {
        menuInfo.innerHTML = `<i class="fa-solid fa-hashtag"></i> ${searchResult}`;
    }
}
SearchTopic();

// Adding Event listener for Search Box
searchBox.addEventListener('change',function(){
    SearchTopic();
});

// ...
// Creating new Questions
function createQuestionUI() {

    const date = new Date().toLocaleDateString();
    const time = new Date().toTimeString();

    const container = document.querySelector(".leetcode-questions");
    const numberOfQuestion = container.querySelectorAll('.leetcode').length + 1;
    
    //const numberOfQuestion = container.childElementCount + 1;

    // Question : Input
    const questionTitle = prompt("Enter Question:");
    const qLevel = prompt("Level:").toLowerCase();
    const qTopic = prompt("Topic:").toLowerCase();
    const topicName = prompt("Topic Name :");

    // DOM Element Creation 
    const questionUI = document.createElement("div");
    questionUI.classList.add("leetcode");
    questionUI.classList.add(`leetcode-${qLevel}`);
    questionUI.classList.add(`leetcode-${qTopic}`);

    // New Question UI - Generating
    questionUI.innerHTML = `
    <!-- ${date} -->
    <!-- ${time} -->
    <!-- Javascript DOM -->
            <div class="leetcode-topic">
                <i class="fa-solid fa-laptop-code"></i>
                <span class="topic-name">${topicName}</span>
            </div>
            <div class="leetcode-time">
            <i class="fa-solid fa-clock"></i> <span class="time">${date}</span>
            </div>
            <div class="leetcode-title">
                <h3>Q${numberOfQuestion}. ${questionTitle} </h3>
                <button class="leetcode-level ${qLevel}">${qLevel}</button>
            </div>
            <div class="leetcode-body">
                <!-- Show/Hide -->
                <div class="leetcode-dialog">
                    <h4>Solution</h4>
                    <button id="show-hide" class="functionality">Show</button>
                </div>
                <div class="leetcode-body-content" id="hidden" style="display:none;">
                    <div class="leetcode-solution">
                    <pre>
                        <code class="language-java">
                      
                        </code>
                    </pre>
                    </div>
                </div>
            </div>`;
    container.append(questionUI);
}



/* Dynamically adding Id and generation quick link for 
    Every question
*/

function generateQuickLink() {

    const question = document.querySelectorAll('.leetcode .leetcode-title h3');
    const quickContainer = document.querySelector('.quick-content__container');

    //1. add id to every question title
    function addQuestionId() {
        for(let i = 0; i < question.length; i++) {
            question[i].id = i;
        }
    }

    //2. create dynamic quick link
    function createQuickLink(id,title) {
        const ele = document.createElement('li');
        ele.classList.add('quick-list');
        ele.innerHTML = `
            <a href="#${id}" title="${title}"> ${title} </a>
        `;
        return ele;
    }
    addQuestionId();
    for(let i = 0; i < question.length; i++) {
        let temp = createQuickLink(question[i].id,question[i].innerHTML);
        quickContainer.appendChild(temp);
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let tag = this.getAttribute('href').slice(1);
        document.getElementById(tag).scrollIntoView({
            behavior: 'smooth'
        });
    });
});