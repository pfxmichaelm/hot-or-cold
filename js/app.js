
$(document).ready(function() {
  /*--- Display information modal box ---*/
  $(".what").click(function() {
    $(".overlay").fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function() {
    $(".overlay").fadeOut(1000);
  });

  var answer = Math.floor((Math.random() * 100) + 1);
  console.log('number is: ' + answer);
});

function getGuessNum() {
  var test = $('#userGuess').val();
  console.log('test = ' + test);
}

$('#guessButton').click(function (event) {
  event.preventDefault();
  getGuessNum();
});

$('#userGuess').keydown(function (event) {
  event.preventDefault();
  console.log('event.which = ' + event.which);
  if (event.which == 13) {
    getGuessNum()
  }
});

//getGuessNum();


function game() {
  console.log('enter game');

}

/*$('.new').click(function (event) {
  event.preventDefault();
  answer = Math.floor((Math.random() * 100) + 1);
  console.log('answer is xx: ' + answer);
  $('#userGuess').val(' ');
});*/

//$('#userGuess').focus();
