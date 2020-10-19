// Variables

var startButton = document.getElementById("startButton");
var highScoreForm = document.getElementById("highScoreForm");
var submitInitials = document.getElementById("submitInitials");
var userInitials = document.getElementById("userInitials");
var counterField = document.getElementById("counter");
var questionImage = document.getElementById("questionImage");
var questionNumber = document.getElementById("questionNumber");
var questionText = document.getElementById("questionText");
var answerOne = document.getElementById("answerOne");
var answerOneButton = document.getElementById("answerOneButton");
var answerTwo = document.getElementById("answerTwo");
var answerTwoButton = document.getElementById("answerTwoButton");
var answerThree = document.getElementById("answerThree");
var answerThreeButton = document.getElementById("answerThreeButton");

var questions = {
    1: {
        picture: "http://oldcomputers.net/pics/Altair_8800.jpg",
        heading: "The MITS Altrair 8800",
        text: "For the original, out of the box, MITS Altair 8800, released in 1975, how did you enter programs?",
        answers: ["Hooking up an auxillary keyboard", "Flipping the switches on the front panel", "Connecting a paper-tape machine"],
        correctAnswer: 1
    },
    2: {
        picture: "http://oldcomputers.net/pics/apple1.jpg",
        heading: "The Apple I",
        text: "Who was the sole designer of the Apple I, released in 1976?",
        answers: ["Steve Jobs", "Bill Gates", "Steve Wozniak"],
        correctAnswer: 2
    },
    3: {
        picture: "http://oldcomputers.net/pics/trs80-i.jpg",
        heading: "1977 Trinity",
        text: "Three personal computers released in 1977 were referred to as the 1977 Trinity by Byte magazine.  They included the Radio Shack TRS-80, the Apple II, and what was the third computer?",
        answers: ["Commodore PET 2001", "Atari VCS 2600", "Vector Graphic Vector 1"],
        correctAnswer: 0
    },
    4: {
        picture: "http://oldcomputers.net/pics/appleii-right.jpg",
        heading: "Storage for the 1977 Trinity",
        text: "What was the original form of program storage for the original 1977 Trinity of computers?",
        answers: ["Paper Tape", "Cassette Tape", "Floppy Disks"],
        correctAnswer: 1
    },
    5: {
        picture: "http://oldcomputers.net/pics/trs80ii.jpg",
        heading: "Radio Shack TRS-80 Model II",
        text: "What was the main goal of the TRS-80 Model II?",
        answers: ["Manufacturing applications", "Replace the Model I", "Small business applications"],
        correctAnswer: 2
    },
    6: {
        picture: "http://oldcomputers.net/pics/ibm5150.jpg",
        heading: "IBM PC 5150",
        text: "What was the operating system on the IBM PC 5150, released in 1981?",
        answers: ["Windows", "Microsoft PC-DOS", "BASIC"],
        correctAnswer: 1
    },
    7: {
        picture: "http://oldcomputers.net/pics/ibm5150-mb.jpg",
        heading: "Cloning the IBM PC",
        text: "Why were other companies eventually able to clone the IBM PC?",
        answers: ["IBM used already available off-the-shelf components", "IBM published their designs", "IBM offered licensing agreements"],
        correctAnswer: 0
    },
    8: {
        picture: "http://oldcomputers.net/pics/macintosh.jpg",
        heading: "Apple Macintosh",
        text: "Introduced in 1984, the Apple Macintosh was the first commercially successful computer to use a ...?",
        answers: ["Modem for connecting to other computers", "Internal hard drive", "Graphical User Interface"],
        correctAnswer: 2
    },
    9: {
        picture: "http://oldcomputers.net/pics/compaqI.JPG",
        heading: "The first IBM clone",
        text: "Which machine was the first 100% compatible IBM PC clone?",
        answers: ["Apple Lisa, 1983", "Compaq Portable, 1982", "Commodore 64, 1982"],
        correctAnswer: 1
    },
    10: {
        picture: "http://oldcomputers.net/pics/next-cube-system.jpg",
        heading: "Steve Jobs after Apple",
        text: "Designed for colleges, students, and universities, what was the name of Steve Job's computer released in 1988?",
        answers: ["NeXT", "Apple IIC Plus", "Commodore 128D"],
        correctAnswer: 0
    }
}

var currentQuestion = 1;
var timer = 0;
var tmpTimer = 0;
var initials = "";
var answerSelected = 0;
var atEnd = 0;
var score = 0;

var highScores = [];
var tmpScores = localStorage.getItem("scores");

// Functions

function checkAnswerAndAdvance(passCurrentQuestion, answerNumber) {
    var questionAnswer = questions[passCurrentQuestion].correctAnswer;
    if (answerNumber === questionAnswer) {
        // Correct answer, move to the next question
        currentQuestion += 1;
        // displayQuestion(currentQuestion);
        alert("Correct! Press Enter to continue.");
    } else {
        // Incorrect answer, subtract 10 from the clock and go to the next question
        alert("Incorrect! 10 seconds will be deducted.  Press Enter to continue.");
        timer -= 10;
        currentQuestion += 1;
        // displayQuestion(currentQuestion);
    }
    if (currentQuestion <= 10) {
        displayQuestion(currentQuestion);
    } else {
        atEnd = 1;
        endSequence();
    }

}

function endSequence() {
    tmpTimer = timer;
    counterField.textContent = tmpTimer;
    score = tmpTimer;
    alert("Complete! Your score was " + score);

}

function displayQuestion(number) {
    // Change the picture
    questionImage.setAttribute("src", questions[number].picture);
    // Change the heading and text
    questionNumber.innerHTML = questions[number].heading;
    questionText.innerHTML = questions[number].text;
    // Change the text for each answer
    answerOne.childNodes[1].textContent = " " + questions[number].answers[0];
    answerTwo.childNodes[1].textContent = " " + questions[number].answers[1];
    answerThree.childNodes[1].textContent = " " + questions[number].answers[2];
}


// Read in high scores and set all to zero if first time.
if (tmpScores === null) {
    console.log("scores was empty");
    for (i = 0; i < 10; i += 2) {
        highScores[i] = "TBD";
        highScores[i + 1] = 0;
    }
    localStorage.setItem("scores", JSON.stringify(highScores));
} else {
    highScores = JSON.parse(tmpScores);
}

// Now display high scores on screen


// Event listeners

answerOneButton.addEventListener("click", function () {

    checkAnswerAndAdvance(currentQuestion, 0);
})

answerTwoButton.addEventListener("click", function () {

    checkAnswerAndAdvance(currentQuestion, 1);
})

answerThreeButton.addEventListener("click", function () {

    checkAnswerAndAdvance(currentQuestion, 2);
})

startButton.addEventListener("click", function () {
    currentQuestion = 1;
    tmpTimer = 0;
    initials = "";
    answerSelected = 0;
    atEnd = 0;
    timer = 1000;
    displayQuestion(currentQuestion);
    var timerInterval = setInterval(function () {
        if (atEnd === 0) {
            timer -= 1;
            counterField.textContent = timer;
        } else {
            timer = 0;
            counterField.textContent = tmpTimer;
        }
        if (timer === 0) {
            clearInterval(timerInterval);
            return;
        }
    }, 1000);
}
);


submitInitials.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Initials Entered: " + userInitials.value);
});

// If the user gets a high score:
// highScoreForm.setAttribute("class", "d-block")
// And then afterwards:
// highScoreForm.setAttribute("class", "d-none")