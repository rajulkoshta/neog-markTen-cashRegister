let billInput = document.querySelector("#billAmount");
let cashInput = document.querySelector("#cashAmount");
let checkBtn = document.querySelector(".btn-primary");
let reloadBtn = document.querySelector(".btn-secondary");
let message = document.querySelector("#error-message");
let noOfNotes = document.querySelectorAll(".no-of-notes");

var notes = [2000, 500, 100, 20, 10, 5, 1]
reloadBtn.addEventListener("click", refresh);

checkBtn.addEventListener("click", validatingBillAndCashAmt);

function validatingBillAndCashAmt() {
hideMessage();

    if (billInput.value > 0) {
        if (cashInput.value >= billInput.value) {
            var amountToBeReturned = cashInput.value - billInput.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Do you wanna wash plates!");
        }
    } else {
        showMessage("invalid bill Amount");
    }
}
function calculateChange(amountToBeReturned){
        for(var i=0;i<=notes.length;i++){
           const numberOfNotes = Math.trunc(amountToBeReturned/notes[i]);
           amountToBeReturned %= notes[i];
           noOfNotes[i].innerText=numberOfNotes;

        }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText =msg;

}
function refresh(){
    window.location.reload("Refresh");
  }