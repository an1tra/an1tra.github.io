var word = require("./word");
var inquirer = require("inquirer");

var letterArray = "abcdefghijklmnopqrstuvwxyz";
var possibleWords = [   
    "washington, dc", 
    "london", 
    "beijing", 
    "paris", 
    "italy", 
    "moscow", 
    "madrid", 
    "tokyo"
];

var randomIndex = Math.floor(Math.random() * possibleWords.length) + 1;
var randomWord = possibleWords[randomIndex];

var computerWord = new word(randomWord);
var requireNewWord = false;
var incorrectLetters = [];
var correctLetters = [];

var guessesLeft = 10;

function gameLogic() {
    if(requireNewWord) {
        var randomIndex = Math.floor(Math.random() * possibleWords.length) + 1;
        var randomWord = possibleWords[randomIndex];

        computerWord = new word(randomWord);
        requireNewWord = false;
    }

    var completeWord = [];
    computerWord.objArray.forEach(completeCheck);

    if(completeWord.includes(false)) {
        inquirer.prompt([
            {
                type: "input",
                message: "Select letter from A to Z",
                name: "userinput"
            }
        ]).then(function(input){
            if(!letterArray.includes(input.userinput)|| input.userinput.length > 1){
                console.log("Please try again!");
                gameLogic();
            } else {
                if( incorrectLetters.includes(input.userinput)|| correctLetters.includes(input.userinput) || input.userinput === "") {
                    console.log("Already Guessed or Nothing was Entered");
                    gameLogic();
                } else {
                    var wordCheckArray = [];
                    computerWord.userGuess(input.userinput);
                    computerWord.objArray.forEach(wordCheck);
                    if(wordCheckArray.join("") === completeWord.join("")) {
                        console.log("Incorrect");

                        incorrectLetters.push(input.userinput);
                        guessesLeft --;
                    } else {
                        console.log("Correct");
                        correctLetters.push(input.userinput);
                    }
                    computerWord.log();

                    console.log("Guesses Left: " + guessesLeft + "/n");
                    console.log("Letters Guessed: " + incorrectLetters.join(" "));

                    if(guessesLeft > 0) {
                        gameLogic();
                    } else {
                        console.log("You have lost");
                        restartGame();
                    }
                    function wordCheck(key) {
                        wordCheckArray.push(key.guessed);
                    }
                }
            }
                

        });
    } else {
        console.log("You WIN!");
        restartGame();
    }
    function completeCheck(key) {
        completeWord.push(key.guessed)
    }


}
function restartGame() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to play again?",
            choices: ["Play Again", "Exit"],
            name: "restart"
        }
    ]).then(function(input){
        if(input.restart === "Play Again") {
            requireNewWord = true;
            incorrectLetters = [];
            correctLetters = [];
            guessesLeft = 10;
            gameLogic();
        }else {
            return;
        }
    });
}
gameLogic();