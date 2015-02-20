
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var answer = Math.floor((Math.random() * 100) + 1);
    console.log('Secret number is: ' + answer);
    var numberOfGuess = 0
    var guesses = [];
    var distance = null;
    var prevDistance = null;
});

function getGuess() {
  $(document).ready(function() {
    $('#guessButton').click(function() {
      var uGuess = $('#userGuess').val();
      uGuess = +uGuess;
      console.log(typeof uGuess)
      console.log('Guess: ' + uGuess);	
    });
    //game();
  });
}

getGuess();

function newGame() {

}

function game() {

}


//$('#userGuess').focus();