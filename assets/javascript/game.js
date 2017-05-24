// Generate random number between 19 and 120 

  //  $(document).on("click", "button", function() {

     var minNumber = 19;
     var maxNumber = 120;

     var randomNumber = randomNumberFromRange(minNumber, maxNumber);
     var userscore = 0; 

     function randomNumberFromRange(min,max) {
     return Math.floor(Math.random()*(max-min+1)+min);
}
     console.log(randomNumber);

     var paragraph = $('<p>');
     paragraph.text(randomNumber);
     $('#randomNumber').append(paragraph);


 	randomCrystal(); 


//Generating the random numbers in the crystals - // Each crytal is a random hidden value between 1 - 12.  
    function randomCrystal() { 
    var minNumberCrystal = 1 ;
    var maxNumberCrystal = 12;

    var randomnumberCrystal1 = randomNumberFromRangeCrystal(minNumberCrystal, maxNumberCrystal);
    var randomnumberCrystal2 = randomNumberFromRangeCrystal(minNumberCrystal, maxNumberCrystal);
    var randomnumberCrystal3 = randomNumberFromRangeCrystal(minNumberCrystal, maxNumberCrystal);
    var randomnumberCrystal4 = randomNumberFromRangeCrystal(minNumberCrystal, maxNumberCrystal);



//get random number for crystals 
    function randomNumberFromRangeCrystal(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

     //Variables hole the crystal numbers 
     var bCrystal = randomnumberCrystal1;
     var wCrystal = randomnumberCrystal2;
     var yCrystal = randomnumberCrystal3;
     var pCrystal = randomnumberCrystal4;
     //var userscore = 0; 

	 console.log(bCrystal); 
	 console.log(wCrystal); 
	 console.log(yCrystal); 
	 console.log(pCrystal); 




	  $('#bCrystal').click(function() {
	  (userscore += bCrystal);	
	  $('#userscore').html(userscore);
	  check(); 	
});

	  $('#wCrystal').click(function() {
	  	(userscore += wCrystal);
	  $('#userscore').html(userscore);	
	  check(); 	
});

	  $('#yCrystal').click(function() {
	  (userscore += yCrystal);
	  $('#userscore').html(userscore);	
	  check(); 	
});

	  $('#pCrystal').click(function() {
	  (userscore += pCrystal); 
	  $('#userscore').html(userscore);	
	  check(); 	
});


} 


function check() {  
	 if (userscore > 30 ) { 
	 	alert('tgtg');
	 }}







//Create variables, one for each crystal. Create IDs for each crystal in HTML.     

//Have button and process to start and restart game 



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








