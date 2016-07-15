//Rules
/*
Instructions

Write a function sing that returns the lyrics for the song 99 Bottles of Beer as a an array.

Lyrics

You can find the complete lyrics here.

99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.

// and so on ...

3 bottles of beer on the wall, 3 bottles of beer.
Take one down and pass it around, 2 bottles of beer on the wall.

2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.

1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
Result

The returned result should be an array of all the lines in the song.

Example

['99 bottles of beer on the wall, 99 bottles of beer.',
'Take one down and pass it around, 98 bottles of beer on the wall.',
'98 bottles of beer on the wall, 98 bottles of beer.',
// and so on ...
'3 bottles of beer on the wall, 3 bottles of beer.',
'Take one down and pass it around, 2 bottles of beer on the wall.',
'2 bottles of beer on the wall, 2 bottles of beer.',
'Take one down and pass it around, 1 bottle of beer on the wall.',
'1 bottle of beer on the wall, 1 bottle of beer.',
'Take one down and pass it around, no more bottles of beer on the wall.',
'No more bottles of beer on the wall, no more bottles of beer.',
'Go to the store and buy some more, 99 bottles of beer on the wall.'];
*/


//My Code
var sing = function () {
  var array = [];
  for(var i = 99; i > 0; i--) {
    if(i === 1) {
      array.push(i + ' bottle of beer on the wall, ' + i + ' bottle of beer.');
      array.push('Take one down and pass it around, no more bottles of beer on the wall.');
      array.push('No more bottles of beer on the wall, no more bottles of beer.');
      array.push('Go to the store and buy some more, 99 bottles of beer on the wall.');
    }
    else if(i === 2) {
      array.push(i + ' bottles of beer on the wall, ' + i + ' bottles of beer.');
      array.push('Take one down and pass it around, ' + (i-1) + ' bottle of beer on the wall.');
    }
    else {
      array.push(i + ' bottles of beer on the wall, ' + i + ' bottles of beer.');
      array.push('Take one down and pass it around, ' + (i-1) + ' bottles of beer on the wall.');
    }
  }
  return array;
};


//Tests
sing(); //should return
/*
  ['99 bottles of beer on the wall, 99 bottles of beer.',
  'Take one down and pass it around, 98 bottles of beer on the wall.',
  '98 bottles of beer on the wall, 98 bottles of beer.',
  // and so on ...
  '3 bottles of beer on the wall, 3 bottles of beer.',
  'Take one down and pass it around, 2 bottles of beer on the wall.',
  '2 bottles of beer on the wall, 2 bottles of beer.',
  'Take one down and pass it around, 1 bottle of beer on the wall.',
  '1 bottle of beer on the wall, 1 bottle of beer.',
  'Take one down and pass it around, no more bottles of beer on the wall.',
  'No more bottles of beer on the wall, no more bottles of beer.',
  'Go to the store and buy some more, 99 bottles of beer on the wall.'];
*/
