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
