// sort function for program

// sort 
function sort(arr) {
    let isSwapped;
    for(let i = 0; i < arr.length-1; i++) {
        isSwapped = false;
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j].value < arr[j+1].value) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(!isSwapped) {
            break;
        }
    }
}


/* Questions Info */
const UniversalData = (function fetchQuestionData() {

    const mathTotal = document.querySelectorAll('.leetcode-math').length;
    const bitwiseTotal = document.querySelectorAll('.leetcode-bitwise').length;
    const recursionTotal = document.querySelectorAll('.leetcode-recursion').length;
    const arrayTotal = document.querySelectorAll('.leetcode-array').length;
    const binarySearchTotal = document.querySelectorAll('.leetcode-binary-search').length;
    const sortingTotal = document.querySelectorAll('.leetcode-sorting').length;
    const matrixTotal = document.querySelectorAll('.leetcode-matrix').length;
    const hashingTotal = document.querySelectorAll('.leetcode-hashing').length;
    const stringTotal = document.querySelectorAll('.leetcode-string').length;
    const linkedlistTotal = document.querySelectorAll('.leetcode-linkedlist').length;
    const stackTotal = document.querySelectorAll('.leetcode-stack').length;
    const queueTotal = document.querySelectorAll('.leetcode-queue').length;

    return {
        mathTotal,
        bitwiseTotal,
        recursionTotal,
        arrayTotal,
        binarySearchTotal,
        sortingTotal,
        matrixTotal,
        hashingTotal,
        stringTotal,
        linkedlistTotal,
        stackTotal,
        queueTotal,
    };

})();

const tallyArray = [
   {
    name:'Math',
    id:'math',
    value:UniversalData.mathTotal
   },
   {
    name:'Bit Manipulation',
    id:'bitwise',
    value:UniversalData.bitwiseTotal
   },
   {
    name:'Recursion',
    id:'recursion',
    value:UniversalData.recursionTotal
   },
   {
    name:'Array',
    id:'array',
    value:UniversalData.arrayTotal
   },
   {
    name:'Binary Search',
    id:'binary-search',
    value:UniversalData.binarySearchTotal
   },
   {
    name:'Sorting',
    id:'sorting',
    value:UniversalData.sortingTotal
   },
   {
    name:'Matrix',
    id:'matrix',
    value:UniversalData.matrixTotal
   },
   {
    name:'Hashing',
    id:'hashing',
    value:UniversalData.hashingTotal
   },
   {
    name:'String',
    id:'string',
    value:UniversalData.stringTotal
   },
   {
    name:'Linked List',
    id:'linkedlist',
    value:UniversalData.linkedlistTotal
   },
   {
    name:'Stack',
    id:'stack',
    value:UniversalData.stackTotal
   },
   {
    name:'Queue',
    id:'queue',
    value:UniversalData.queueTotal
   }
];
