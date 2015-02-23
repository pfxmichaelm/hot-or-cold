
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
  $('#userGuess').val(' ');

  function getGuessNum() {
    uGuess = $('#userGuess').val();
    console.log('guess = ' + uGuess);
    $('#guessList').prepend('<li>' + uGuess + '</li>');
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
      $('#count').html(numOfGuess);
      guess.push(uGuess);
      distance = Math.abs(answer - uGuess);
      console.log('dist = ' + distance);
      if (uGuess == answer) {
        console.log("Winner");
        $('#feedback').html("Winner");
      }
      else {
        if (distance > 50) {
          console.log('ice cold');
          $('#feedback').html("Ice cold");
        }
        else if (distance < 50 && distance > 30) {
          console.log('cold');
          $('#feedback').html("Cold");
        }
        else if (distance < 30 && distance > 20) {
          console.log('warm');
          $('#feedback').html("Warm");
        }
        else if (distance < 20 && distance > 10) {
          console.log('hot');
          $('#feedback').html("Hot");
        }
        else if (distance < 10 && distance > 1) {
          console.log('very hot');
          $('#feedback').html("Very Hot");
        }
        $('#userGuess').val(' ');
      }
    }
  }

  $('.new').click(function(event) {
    event.preventDefault();
    answer = Math.floor((Math.random() * 100) + 1);
    console.log('new number is: ' + answer);
    uGuess = null;
    numOfGuess = 0;
    var guess = [];
    var distance = null;
    $('#userGuess').val(' ');
    $('#feedback').html("Make your Guess!");
    $('#count').html(0);
    $('#guessList').html(' ');
  });
});
//$('#userGuess').focus();
