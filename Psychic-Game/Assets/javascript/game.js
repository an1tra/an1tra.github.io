//Create array with all possible computer choices - limited to the alphabet.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

//Create variable to store wins, losses, number of guesses, and an array of guesses made.
var wins = 0;
var losses = 0;
var numGuesses = 10;
var guessChoices = [];


//Create a function for user pressing a key on the keyboard
document.onkeyup = function(event) {
//When a key is pressed store that as a userGuess.
    var userGuess = event.key;

//The computer guess is a random number between 0 and length of the array.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//User options
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    
//Takes the userGuess and locates position in options array. (will output -1 if userGuess is not in the options array) 
   if (options.indexOf(userGuess) > -1) {
//If userGuess matches random computerGuess the wins variable increases by 1, numGuesses remains at 10, and nothing pushed to guessChoices array.
       if (userGuess === computerGuess) {
           wins++;
           numGuesses = 10;
           guessChoices = [];
       }
//If userGuess is not equal to random computerGuess the numGuesses variable decreases by 1 and userGuess is pushed to the empty guessChoices array.
       if (userGuess != computerGuess) {
           numGuesses --;
           guessChoices.push(userGuess);
       }
//If numGuesses reaches 0, numGuess is reset to 10, a "loss" is recorded in the losses variable, and guessChoices is reset.
       if (numGuesses === 0) {

       numGuesses = 10;
       losses ++;
       guessChoices = [];

       
   }

   var html = 
   "<h1> The Psychic Game </h1>" +
   "<p>Guess what letter I'm thinking of!</p>" +
   "<p>Wins: " + wins + "</p>" +
   "<p>Losses: " + losses + "</p>" +
   "<p>Guesses Left: " + numGuesses + "</p>" +
   "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

   document.querySelector("#game").innerHTML = html;

   
   }
};