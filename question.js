// Creating new Questions
function createQuestionUI() {

    const date = new Date().toLocaleDateString();
    const time = new Date().toTimeString();

    const container = document.querySelector(".leetcode-questions");
    const numberOfQuestion = container.childElementCount + 1;

    // Questin : Input
    const questionTitle = prompt("Enter Question:");
    const qLevel = prompt("Level:").toLowerCase();
    const qTopic = prompt("Topic:").toLowerCase();
    const sol = prompt("Solution:");

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
                       ${sol}
                    </pre>
                    </div>
                </div>
            </div>`;
    container.append(questionUI);
}