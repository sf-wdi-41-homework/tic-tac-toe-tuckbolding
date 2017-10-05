// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function



/*function checkForWin() {
  if (board == winConditions) {
    alert("You won!")
  }

}
  $('div').on('click').append('<img')

		function makeMove(player) {
		    $('.col-md-4 box').on('click').text('X');

		  	}

		});

		console.log("Javascript is running!");


//Create makeMove function to assign images when item is clicked

//Create checkVictory function to check if win conditions are met

var winConditions = [ /* what you defined */

function winTest(board, row) {
  for(var i = 0; i < winConditions.length; i++) {
    var sum = 0;
    var w = winConditions[i];

    for(var b = 0; b < w.length; b++) {
      if(board[w[b]].textcontent === row) {
        sum++
      }
    }

    if(sum === 3) {
      return true;
    }
  }
  return false;
}

// var result = winTest(board, 'X');
//
// var board = [
// 	['e','e','e',
//   'e','e','e',
//   'e','e','e']
// ];
//
// var winConditions = [
//
//   ['x','x','x',
//   'e','e','e',
//   'e','e','e'],
//
//   ['e','e','e',
//   'x','x','x',
//   'e','e','e'],
//
//   ['e','e','e',
//   'e','e','e',
//   'x','x','x'],
//
//   ['x','e','e',
//   'x','e','e',
//   'x','e','e'],
//
//   ['e','x','e',
//   'e','x','e',
//   'e','x','e'],
//
//   ['e','e','x',
//   'e','e','x',
//   'e','e','x'],
//
//   ['x','e','e',
//   'e','x','e',
//   'e','e','x'],
//
//   ['e','e','x',
//   'e','x','e',
//   'x','e','e'],
//
//   ['e','e','e',
//   'e','e','e',
//   'e','e','e']
//
// ];
