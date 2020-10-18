var startButton = document.getElementById("startButton");
var highScoreForm = document.getElementById("highScoreForm");
var submitInitials = document.getElementById("submitInitials");
var userInitials = document.getElementById("userInitials");

// function tmp(event) {
//     event.preventdefault();
//     highScoreForm.setAttribute("class", "d-block");
// }

startButton.addEventListener("click", function (event) {
    // Start the quiz

});

submitInitials.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Initials Entered: " + userInitials.value);
});

// If the user gets a high score:
// highScoreForm.setAttribute("class", "d-block")
// And then afterwards:
// highScoreForm.setAttribute("class", "d-none")