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

showAllBtn.addEventListener("click",()=>{
    solution("show");
})

hideAllBtn.addEventListener("click",()=>{
    solution("hide");
})


// Topic Tally
// Tally updater
function updateTally() {
    const tallyTopic = document.querySelectorAll('.tally-topic');
    tallyTopic.forEach(topic => {   
       const topicId = topic.id;
       const topicNo = topic.children[1]; 
       const topicQuery = `.leetcode-${topicId}`;
       const allQuestions = document.querySelectorAll(topicQuery).length;
       topicNo.textContent = allQuestions; 
    });
}

updateTally();


// General Function for show and Hide question on the basis of level
function solutionByLevel(level='all') {
    const everySolution = document.querySelectorAll('.leetcode');
    everySolution.forEach(sol=>{
        sol.setAttribute('style','display:none');
    });

    everySolution.forEach(sol=>{
        let query = `leetcode-${level}`;
        if(sol.classList.contains(query)) {
            sol.setAttribute('style','display:block');
        }else if(level === 'all') {
            sol.setAttribute('style','display:block');
        }
    })
}

const everyLevel = document.querySelectorAll('.visible-by-level button');

everyLevel.forEach(button => {
    button.addEventListener('click',(event)=>{
        let level = button.id;
        solutionByLevel(level);
    })
})

