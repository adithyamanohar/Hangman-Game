// Create a word bay to chose things from 
var wordList = ["batman", "batgirl"]


var hiddenWord;
var hiddenArray = [];
var userGuess;
var letterPresentInd;

function checkUserGuess (userGuess, iterator) {
				if(hiddenWord.charAt(i) == userGuess) {
						alert("Letter matches!");
					}
			
				else {
					alert("Letter does not match");
						// if (hiddenWord === event) {
						hiddenArray.push(userGuess);
						alert("hiddenArray =" + hiddenArray[i]);
						console.log(hiddenArray);
						//}
						}
} //End of checkUserGuess()

function checkIfLetterPrevUsed (userGuess) {
				for (var i = 0; hiddenWord.length; i++) {
					//alert("userGuess =" + userGuess);

					//var prevLetter = hiddenArray[z];

					var hiddenWordAsString = String(hiddenWord)
					var hiddenWordTrimmed = hiddenWordAsString.trim();
					var currentLetterInWord = hiddenWordTrimmed.charAt(i);
					//alert("currentLetterInWord = " + currentLetterInWord);
					
						if(currentLetterInWord == userGuess) {
								alert("This letter is in the word either one or more times!");

								//Since letter guessed matches letter in the word, toggle div for that letter so that it is visible.
								//Set indicator that would tell you if the letter matches.
								//Check if the indicator is true. If it is, toggle the div. 

								alert("Time to choose another letter to test.");
								break;
						}
						else if (currentLetterInWord.length == 0) {
							alert("Sorry, no more letters in word to test for the entry you provided. Please try another letter.");
							break;
						}
						else  {
							//if (letterPresentInd = true) 
							alert("This letter does not seem to be in the word...yet");
							//checkUserGuess(userGuess, i);
						}
						/*else {
							alert("You suck at life");
						}*/

				}
		} //End of checkIfLetterPrevUsed

function chooseWord () {
	console.log("h1");
   //      	// Create a method to choose from the array at random	
        	var s =Math.floor(Math.random()*wordList.length);
        	alert("s = " + s)
        		//console.log(wordList[s].length);
        		console.log("hi");
   //      	// Display the word on the Webpage
   			 hiddenWord = wordList[s].split("-");
   			 console.log("hidden word = " + hiddenWord)
   			 alert ("The hidden word is in the console as I was unable to successfully complete the UI of the game.")
			// var testWord = wordList[s];
			// var counts = wordList[s].length;
	 	
 		//Display Hangman Word



 		
 			
        	//When a key is presse


			//get length of word

   //      	while (counts > 0) {
   // 			 score.under.push('_');
   // 			 counts--;
			// }	
			
			//$("#chosenWordDisplay").text(hiddenWord);
			//replace all letters with dash
			//push to front emd
	} //End of chooseWord()



		// }
 $(document).ready(function() {
 	 	chooseWord();
 		document.onkeyup = function(event){
			 	console.log("button press");
			 		// body...
			 	userGuess = event.key;
			 	checkIfLetterPrevUsed(userGuess);		


			 	// displayHiddenWord();
		}
 	console.log("game.js has loaded.");
});


 
// var under = [];

// var score = {
// 	under: [],
// } 
        	// Replace each word with hidden spaces
			//for(var i=0; i < wordList.length; i++) {
 			// wordList[i] = wordList[i].replace(/[^ ]/g, "-");
 			//}
        // $("#hangmanButton").on("click", function() {

        // 	$('#hangmanButton').css({"display" : "none"});
console.log("check")