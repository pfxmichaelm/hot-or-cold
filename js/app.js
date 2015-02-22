
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
  answer = Math.floor((Math.random() * 100) + 1);
  //var uGuess = 0;
  var numOfGuess = 0;
  var guess = [];
  var distance = null;
  var prevDistance = null;
  $('#userGuess').val(' ');

  function getGuessNum() {
    uGuess = $('#userGuess').val();
    console.log('guess = ' + uGuess);
    game();
  }

  $('form').submit(function(event) {
    event.preventDefault();
    getGuessNum();
  });

  $('#userGuess').keydown(function(event) {
    //event.preventDefault();
    //console.log('event.which = ' + event.which);
    if (event.which == 13) {
      //getGuessNum()
    }
  });

  function game() {
    console.log('enter game' + ', num = ' + answer);
    var uGuess = parseInt($('#userGuess').val());
    if (uGuess != null && $.isNumeric(uGuess) && (1 < uGuess < 101)) {
      numOfGuess += 1;
      guess.push(uGuess);
      distance = Math.abs(answer - uGuess);
      console.log('dist = ' + distance);
      if (uGuess == answer) {
        console.log("Winner");
      }
      else {
        if (distance > 50) {
          console.log('ice cold');
        }
        else if (distance < 50 && distance > 30) {
          console.log('cold');
        }
        else if (distance < 30 && distance > 20) {
          console.log('warm');
        }
        else if (distance < 20 && distance > 10) {
          console.log('hot');
        }
        else if (distance < 10 && distance > 1) {
          console.log('very hot');
        }
        $('#userGuess').val(' ');
      }
    }
  }

  $('.new').click(function(event) {
    event.preventDefault();
    answer = Math.floor((Math.random() * 100) + 1);
    console.log('new number is: ' + answer);
    uGuess = 0;
    var numOfGuess = 0;
    var guess = [];
    var distance = null;
    var prevDistance = null;
    $('#userGuess').val(' ');
  });
});
//$('#userGuess').focus();
