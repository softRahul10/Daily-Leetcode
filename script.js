// Simple Logic
const UI_Component = (
    function() {
        const uiBtn = document.querySelector("#show-hide");
        const uiBox = document.querySelector("#hidden");
        return {
            uiBtn,
            uiBox
        }
    }
)();

// function
function showSolution() {
    const temp = UI_Component.uiBox;
    const tempState = temp.style.display;
    if(tempState !== 'block') {
        temp.style.display = 'block';
    }else{
        temp.style.display = 'none';
    }
}

UI_Component.uiBtn.addEventListener("click",()=>{
       showSolution();
});