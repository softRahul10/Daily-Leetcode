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