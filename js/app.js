
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
  $('#guessButton').click(game);
  $('#userGuess').keydown(function (e) {
    console.log('KeyCode: ' + e.keyCode);
    if (e.keyCode == 13) {
      game();
    }
  });
}

getGuessNum();


function game() {
  console.log('enter game');
}

function newGame() {
  console.log('nothing yet')
}

//$('#userGuess').focus();
