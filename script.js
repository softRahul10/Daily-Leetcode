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




