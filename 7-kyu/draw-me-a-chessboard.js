//Rules
/*
A grid is a perfect starting point for many games (Chess, battleships, Candy Crush!).

Making a digital chessboard I think is an interesting way of visualising how loops can work together.

Your task is to write a function that takes two integers rows and columns and returns a chessboard pattern as a two dimensional array.

So chessBoard(6,4) should return an array like this:

[
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"]
]
And chessBoard(3,7) should return this:

[
    ["O","X","O","X","O","X","O"],
    ["X","O","X","O","X","O","X"],
    ["O","X","O","X","O","X","O"]
]
*/


//My Code
function chessBoard(rows, columns) {
  var array = [];
  for(var i = 0; i < rows; i++) {
    array.push([]);
    for(var j = 0; j < columns; j += 2) {
      if(i % 2 == 0) {
        array[i].push("O");
        if(j + 1 < columns) {
          array[i].push("X");
        }
      }
      else {
        array[i].push("X");
        if(j + 1 < columns) {
          array[i].push("O");
        }
      }

    }
  }
  return array;
}


//Tests
chessBoard(6,4); //should return
/*
  [
      ["O","X","O","X"],
      ["X","O","X","O"],
      ["O","X","O","X"],
      ["X","O","X","O"],
      ["O","X","O","X"],
      ["X","O","X","O"]
  ]
*/
chessBoard(3,7); //should return
/*
  [
      ["O","X","O","X","O","X","O"],
      ["X","O","X","O","X","O","X"],
      ["O","X","O","X","O","X","O"]
  ]
*/
