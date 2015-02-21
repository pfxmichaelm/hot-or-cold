
$(document).ready(function() {
  /*--- Display information modal box ---*/
  $(".what").click(function() {
    $(".overlay").fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function() {
    $(".overlay").fadeOut(1000);
  });

  function setupGame() {
    var answer = Math.floor((Math.random() * 100) + 1);
    console.log('number is: ' + answer);
    answer = Math.floor((Math.random() * 100) + 1);
    var numOfGuess = 0;
    var guess = [];
    var distance = null;
    var prevDistance = null;
    $('#userGuess').val(' ');
  }

  setupGame();

  function getGuessNum() {
    var uGuess = $('#userGuess').val();
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

  //getGuessNum();


  function game() {
    console.log('enter game');

  }


  $('.new').click(function(event) {
    event.preventDefault();
/*    answer = Math.floor((Math.random() * 100) + 1);
    console.log('new number is: ' + answer);
    var numOfGuess = 0;
    var guess = [];
    var distance = null;
    var prevDistance = null;
    $('#userGuess').val(' ');*/
    setupGame();
  });
});
//$('#userGuess').focus();
