//Create an array of possibleWords
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
//Pick a random word from possibleWords
var word = possibleWords[Math.floor(Math.random() * possibleWords.length)];

//Create empty array to match number of letters in chosen word. It's in a loop bc it has to work to fill in an underscore for each letter.
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
//Create variable to keep track of letters left to be guessed. 
var remainingLetters = word.length;

while (remainingLetters > 0) {
    //Game code goes here
    //show the user their progress --> filling in the letters the user guesses correctly and showing which letters are still blank
    alert(answerArray.join(" ")); 

    //take input from the user
    var guess = prompt("Guess a letter, or click Cancel to stop playing");
    if (guess === null) {
        //exit the game loop
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        //Update answerArray and remainingLetters for every correct guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
        
  //End of the game loop  
}

//Show the answer and congradulate the player
alert(answerArray.join(" "));
alert("Good job the answer was " + word);


