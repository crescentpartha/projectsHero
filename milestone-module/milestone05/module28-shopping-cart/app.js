
// 28.2 shopping cart handle decrease and update price
function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if (isIncreasing) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    console.log(caseInput.value);
    // update case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;

}

// 28.1 Module Overview and shopping cart increase case count
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false);
});
