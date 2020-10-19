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
var answerThree = document.getElementById("answerThree");

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


var timer = 0;
var initials = "";
var answerSelected = 0;
var answered = false;

// Functions

function displayQuestion(number) {
    // Change the picture
    questionImage.setAttribute("src", questions[number].picture);
    // Change the heading and text
    questionNumber.innerHTML = questions[number].heading;
    questionText.innerHTML = questions[number].text;
    // Change the text for each answer
    answerOne.textContent = questions[number].answers[0];
    answerTwo.textContent = questions[number].answers[1];
    answerThree.innerHTML = questions[number].answers[2];
}

answerOneButton.addEventListener("click", function () {
    answered = true;
    console.log(answered);
})

startButton.addEventListener("click", function () {
    timer = 1000;
    var timerInterval = setInterval(function () {
        timer -= 1;
        displayQuestion(1);
        counterField.textContent = timer;
        if (timer === 0) {
            clearInterval(timerInterval);
            return;
        }
    }, 1000);
}
);

// Next, an event to loop the game
// startButton.addEventListener("click", function (event) {
// displayQuestion(1);
// for (i = 1; i <= 10; i++) {
// Display the question
// displayQuestion(i);
// while (!answered) {
//     console.log("Waiting for answer");
// }
// }

// }
// );



submitInitials.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Initials Entered: " + userInitials.value);
});

// If the user gets a high score:
// highScoreForm.setAttribute("class", "d-block")
// And then afterwards:
// highScoreForm.setAttribute("class", "d-none")