




// Create a word bay to chose things from 

var wordList = [ "batman", "batgirl"];


 $(document).ready(function() {

 		//Display Hangman Word
        $("#hangmanButton").on("click", function() {

        	// Replace each word with hidden spaces
			for(var i=0; i < wordList.length; i++) {
 			// wordList[i] = wordList[i].replace(wordList[i].charAt(0), '-' ); - Alternative?
 			wordList[i] = wordList[i].replace(/[^ ]/g, "-");
			}

   //      	// Create a method to choose from the array at random	
        	var s =[Math.floor(Math.random()*wordList.length)];

   //      	// Display the word on the Webpage
			$("#chosenWordDisplay").text(wordList[s]);

 			
        	//When a key is pressed 
			document.onkeyup = function(event) {
				
				//The user guess
				var userGuess = event.key;
				// var displayedWord = wordList[s].contains(event.key);
				
			// If the guess is correct
			//var correctGuess = wordList[s].includes(userGuess);

				//If the user key is in string
				if((wordList[s].includes(userGuess))){
					alert("Yes");
				}
				else {
					alert("no")
				}

			
			}

});


 });
