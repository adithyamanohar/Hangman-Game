




// Create a word bay to chose things from 

var wordList = ["Batman", "Nightwing", "Robins", "Batgirl", "BatWoman", "Alfred"];







 $(document).ready(function() {

 		//Display Hangman Word
        $("#hangmanButton").on("click", function() {

        	// Replace each word with hidden spaces
			for(var i=0; i < wordList.length; i++) {
 			// wordList[i] = wordList[i].replace(wordList[i].charAt(0), '-' );
 			wordList[i] = wordList[i].replace(/[^]/g, "-");
			}

   //      	// Create a method to choose from the array at random	
        	var s =[Math.floor(Math.random()*wordList.length)];

   //      	// Display the word on the Webpage
			$("#chosenWordDisplay").text(wordList[s]);

			
			

 });

// var str = "Visit Microsoft!";
// var res = str.replace("Microsoft", "W3Schools");





 });
