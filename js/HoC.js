$(document).ready(function() {
  var answer, numOfGuess, guess, distance;  

  function canContinue(uGuess) {
    var bool = false;
    if (uGuess != null && $.isNumeric(uGuess) && (1 < uGuess < 101)) {
      bool = true;
    }
    return bool;
  }
  function getGuessNum() {
    var uGuess = parseInt($('#userGuess').val());
    $('#guessList').prepend('<li>' + uGuess + '</li>');
    if (canContinue(uGuess) === false){ return false; }
    game(uGuess);

    console.log('guess = ' + uGuess);
  }
  function game(uGuess) {
    numOfGuess += 1;
    $('#count').html(numOfGuess);
    guess.push(uGuess);
    distance = Math.abs(answer - uGuess);
    getTemp(distance);

    console.log('enter game' + ', num = ' + answer);
    console.log('dist = ' + distance);
  }
  function getTemp(distance) {
    var temp = '';
    if (!distance) {return false;}
    if (distance > 50) {
      temp = "Ice cold";
    } else if (distance > 30) {
      temp = "Cold";
    } else if (distance > 20) {
      temp = "Warm";
    } else if (distance > 10) {
      temp = "Hot";
    } else if (distance > 1) {
      temp = "Very Hot";
    } else if (distance == 0) {
      temp = 'Winner';
    }
    $('#feedback').html(temp);
    $('#userGuess').val('');
    console.log ('temp = ' + temp);
  }
  function init(event) {
    //event.preventDefault();

    answer = Math.floor((Math.random() * 100) + 1);
    uGuess = null;
    numOfGuess = 0;
    guess = [];
    distance = null;

    $('#userGuess').val(' ');
    $('#feedback').html("Make your Guess!");
    $('#count').html(0);
    $('#guessList').html(' ');

    console.log('new number is: ' + answer);
  }
  function registerEvents() {$('.new').click(init);
    /*--- Display information modal box ---*/
    $(".what").click(function() {
      $(".overlay").fadeIn(1000);
    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
      $(".overlay").fadeOut(1000);
    });
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
  }
  
  init();
  registerEvents();
});