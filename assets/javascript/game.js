// Generate random number between 19 and 120 

     var bCrystal
     var wCrystal
     var yCrystal
     var pCrystal 




	function reset () { 
		userscore = 0; 
		$('#userscore').text(userscore); 
		randomNumber = randomNumberFromRange(minNumber, maxNumber);
		randomCrystal(); 
		$('#randomNumber').text(randomNumber);  

	}


     var minNumber = 19;
     var maxNumber = 120;

     
     var randomNumber = randomNumberFromRange(minNumber, maxNumber);

     function randomNumberFromRange(min,max) {
     return Math.floor(Math.random()*(max-min+1)+min);     
}

   //  var paragraph = $('<p>');
     //paragraph.text(randomNumber);
    $('#randomNumber').text(randomNumber);


     var userscore = 0;  
	 console.log(randomNumber);

	 var win = 0; 
	 var loss = 0; 

	reset();


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
     bCrystal = randomnumberCrystal1;
     wCrystal = randomnumberCrystal2;
     yCrystal = randomnumberCrystal3;
     pCrystal = randomnumberCrystal4;

	 console.log(bCrystal); 
	 console.log(wCrystal); 
	 console.log(yCrystal); 
	 console.log(pCrystal); 

}

	 //on click adds the random number assigned to that crustal to the userscore 
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





//Check if the usernumber is over over right on the random number generated 
function check() {  
	 if (userscore === randomNumber ) { 
	 	alert('Win!');
	 	win = win + 1 ; 
	  $('#win').html(win);
	  reset();


		}	


	if (userscore > randomNumber)	{
		alert('LOSE!');
	  loss = loss + 1;
	  $('#loss').html(loss);
	  reset();


	}}




//Have button and process to start and restart game 
 






//- players loses when player number goes over comp random number 

//- as player wins or loses, have two counters track total wins and losses 

//- updated screen with each win or loss 

//Game automatically refreshes after win/loss game state 
//Crystals get new amounts. 

//New comp number randomly chosen 

//Reset player score and score counter 








