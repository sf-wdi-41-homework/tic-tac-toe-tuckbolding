  var turns = 0;
  var win = false;
  // var player1img = 'images/X.png';
  // var player2img = 'images/O.png';

$(document).ready(function() {

    $('.reset').on("click", function(){
      console.log("reset button clicked!");
      $(".box").text("");
      win = false;
    });

    /*$('.col-md-4 box').on('click').append('<img src="'+players.image+'">');*/
    $('.box').on('click', function(){
      $(this).text()==="" && win ===false;
    //check that click worked
      console.log("Box was clicked!");
        if(turns % 2 ===0){
          //draw an 'x'
          $(this).text('X');
          turns++;
        } else {
          // draw an 'o'
          $(this).text('O');
          turns++;
        }
    //Check for winner after every turn
    if(  $(".1").text() === "X" && $(".2").text() === "X" && $(".3").text() === "X"
      || $(".1").text() === "O" && $(".2").text() === "0" && $(".3").text() === "O"
      || $(".4").text() === "X" && $(".5").text() === "X" && $(".6").text() === "X"
      || $(".4").text() === "O" && $(".5").text() === "0" && $(".6").text() === "O"
      || $(".7").text() === "X" && $(".8").text() === "X" && $(".9").text() === "X"
      || $(".7").text() === "O" && $(".8").text() === "O" && $(".9").text() === "O"
      || $(".1").text() === "X" && $(".4").text() === "X" && $(".7").text() === "X"
      || $(".1").text() === "O" && $(".4").text() === "O" && $(".7").text() === "O"
      || $(".2").text() === "X" && $(".5").text() === "X" && $(".8").text() === "X"
      || $(".2").text() === "O" && $(".5").text() === "O" && $(".8").text() === "O"
      || $(".3").text() === "X" && $(".6").text() === "X" && $(".9").text() === "X"
      || $(".3").text() === "O" && $(".6").text() === "O" && $(".9").text() === "O"
      || $(".1").text() === "X" && $(".5").text() === "X" && $(".9").text() === "X"
      || $(".1").text() === "O" && $(".5").text() === "O" && $(".9").text() === "O"
      || $(".3").text() === "X" && $(".5").text() === "X" && $(".7").text() === "X"
      || $(".3").text() === "O" && $(".5").text() === "O" && $(".7").text() === "O"
    ){
      alert("Winner!");
      console.log("Winner!");
      win = true;

    } else if ( $(".1").text() !== "" && $(".2").text() !== "" && $(".3").text() !== ""
          && $(".4").text() !== "" && $(".5").text() !== "" && $(".6").text() !== ""
          && $(".7").text() !== "" && $(".8").text() !== "" && $(".9").text() !== ""
    ){
      console.log("nobody wins!");
    }


  });

});


// function makeMove() {
//   $('.box').append('<img src='+player1img+'>');
// else if (count%2 ===0){
//   count++
//   $
// }
//
// }
