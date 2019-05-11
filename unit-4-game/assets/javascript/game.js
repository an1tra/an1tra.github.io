/*Psuedo coding
1. Display 4 crystals on the page(html button)
2. A random number needs to be generated at the start of the game
3. When player clicks on a crystal, it will add a number of points to the 
players total score.
4. This amount must be hidden until a button is clicked
5. When a crystal button is clicked, it must add this amount to a player 
score counter.
6. Player wins must increase when total score matches the randomly generated number.
7. Game must restart when player wins or loses
8. At restart, a newly random generated number should show.
9. At restart, crystal buttons should have 4 new hidden values.
10. At restart, the player score counter should reset to zero.
11. Create a variable that stores wins and losses.
12. The random number shown at the start of each game should be between 19 -120
13. The hidden value of each crystal should be between 1-12
*/

$(document).ready(function() {

	// =========== NUMBER ARRAYS ============

	// computer variable array
	let numberRange = [];
    
    //The empty array holds #'s 19-120. 
	for (let i = 19; i < 121; i++) {
        numberRange.push(i);
	}

	// crystal numbers array
	let crystalsNumberRange = [];
    
    //The empty array holds #'s 1-12.
	for (let c = 1; c < 13; c++) {
		crystalsNumberRange.push(c);
	}


    	// ========= GLOBAL VARIABLES ===========

	// random variables selected by computer
	let numberToMatch; // number to match
	let crystalNumbers = []; // for array of random crystal values

	let c1;
	let c2;
	let c3;
	let c4;

  let totalScore = 0; // user's score

	let wins = 0;
    let losses = 0;
    
    // ============= FUNCTIONS ================

	// pick a random number
	function pickRandomNumber(arr) {
        //Math.random generates random number from 0 to 1. 
        //Multiply Math.random by array length to get various numbers not limited to 0-1.
        //Math.floor => rounds down the above result to nearest int. 
		let x = arr[Math.floor(Math.random() * arr.length)];
		numberToMatch = x;
		$("#randomNumber").html(numberToMatch);

		console.log("random number: " + numberToMatch);

	} 

	// pick random numbers for crystals

	function pickRandomCrystals(arr) {

		for (let y = 0; y < 4; y++){

			let a = arr[Math.floor(Math.random() * arr.length)];

			crystalNumbers.push(a);
		}
    // check which numbers have been picked
		console.log("crystal numbers: " + crystalNumbers);

    } // END of pickRandomCrystals function
    
    function crystalValues(arr) {

		// change value of each crystal button according to array
		for (i = 0; i < arr.length; i++) {

		$("#button-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		c1 = arr[0];
		c2 = arr[1];
		c3 = arr[2];
		c4 = arr[3];
	} // END of crystalValues function

	function gameReset(x) {

		crystalNumbers = []; // clears crystal number values

		pickRandomNumber(numberRange);

		pickRandomCrystals(crystalsNumberRange);

		crystalValues(crystalNumbers);

		totalScore = 0;
		$("#totalNumber").html(totalScore);

		alert(x);
	} // END of gameReset function

    // *** GAME SETTINGS AT START ***

	pickRandomNumber(numberRange); // random number to match
	pickRandomCrystals(crystalsNumberRange); // array of random crystal values
	crystalValues(crystalNumbers);

		// crystal button functions using jquery

		$("#button-1").on("click", function() {
            //same as totalScore = totalScore + c1
			totalScore += c1;
			$("#totalNumber").html(totalScore);
		});

		$("#button-2").on("click", function() {

			totalScore += c2;
			$("#totalNumber").html(totalScore);
		});

		$("#button-3").on("click", function() {

			totalScore += c3;
			$("#totalNumber").html(totalScore);
		});

		$("#button-4").on("click", function() {

			totalScore += c4;
			$("#totalNumber").html(totalScore);
		});

	$("button").on("click", function() {
		// this is what happens if the user wins
		if (totalScore == numberToMatch) {

			wins++;
			console.log(totalScore);
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);


			setTimeout(function() {gameReset("YOU WIN!!")}, 200);
		}

		else if (totalScore > numberToMatch){

			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("WOMP-WOMP...YOU LOSE!")}, 200);
		}
	});

}); // end of script
