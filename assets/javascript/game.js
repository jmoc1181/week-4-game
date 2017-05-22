// Show the a random number between 19 and 120 
	// Check if any button is clicked...
    // $(document).on("click", "button", function() {

     // Generate random number
    
    
     var minNumber = 19;
     var maxNumber = 120;

     var randomNumber = randomNumberFromRange(minNumber, maxNumber);


      function randomNumberFromRange(min,max) {
      return Math.floor(Math.random()*(max-min+1)+min);
}
     console.log(randomNumber);

     var paragraph = $('<p>');
     paragraph.text(randomNumber);
     $('#randomNumber').append(paragraph);




    function randomCrystal() { 
    var minNumbercrystal = 1 ;
    var maxNumbercrystal = 12;

    var randomnumberCrystal = randomNumberFromRangeCrystal(minNumbercrystal, maxNumbercrystal);

    function randomNumberFromRangeCrystal(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
    console.log(randomnumberCrystal);

     var bCrystal = randomnumberCrystal;
     var wCrystal = randomnumberCrystal;
     var yCrystal = randomnumberCrystal;
     var pCrystal = randomnumberCrystal;

	 console.log(bCrystal); 
	 console.log(wCrystal); 
	 console.log(yCrystal); 
	 console.log(pCrystal); 
} 

 	randomCrystal(); 












// Each crytal is a random hidden value between 1 - 12.  






//Create variables, one for each crystal. Create IDs for each crystal in HTML.     

//Have button and process to start and restart game 


//At the start of each game, 
  //- Game create random number between 19 and 120
  //- each crystal creates random number 1-12, with each having different random number 


//Capture player crystal selection on click. 


//Compute new player total 
//show new updated amount on screen.    




//- player wins if amount matches 
//- players loses when player number goes over comp random number 

//- as player wins or loses, have two counters track total wins and losses 

//- updated screen with each win or loss 

//Game automatically refreshes after win/loss game state 
//Crystals get new amounts. 

//New comp number randomly chosen 

//Reset player score and score counter 








