
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
  $('#guessButton').click(function (event) {
  	event.preventDefault();
    $('#userGuess').keydown(function (event) {
      event.preventDefault();
      console.log('KeyCode: ' + enter.keyCode);
      if (enter.keyCode == 13) {
        game();
      }
    });
  });
}

getGuessNum();


function game() {
  console.log('enter game');

}

$('.new').click(function (event) {
  event.preventDefault();
  answer = Math.floor((Math.random() * 100) + 1);
  console.log('answer is xx: ' + answer);
  $('#userGuess').val(' ');
});

//$('#userGuess').focus();
