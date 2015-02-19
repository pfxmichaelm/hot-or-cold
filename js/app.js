
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

function newGame() {

}

function secretNum() {
  num = Math.floor(Math.random() * 100);
  console.log(typeof num);
}

secretNum();
console.log(num);

function guess() {
  if (#userGuess == num) {
  	alert("Correct!!");
  }
  else {

  }
}