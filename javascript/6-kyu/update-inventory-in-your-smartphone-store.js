//Rules
/*
You will be given an array which lists the current inventory of stock in your store. Example:

var currentInventory = [ [25, 'HTC'], [1000, 'Nokia'], [50, 'Samsung'], [33, 'Sony'], [10, 'Apple'] ];

Your will also be given an array which list the new inventory being delivered to your store today. Example:

var newInventory = [ [5, 'LG'], [10, 'Sony'], [4, 'Samsung'], [5, 'Apple'] ];

Your task is to write a function that when invoked

updateInventory(currentInventory, newInventory);

returns the updated list of your current inventory in alphabetical order:

[[15,'Apple'],[25,'HTC'],[5,'LG'],[1000,'Nokia'],[54,'Samsung'],[43,'Sony']]

Please note however that the input arrays may not necessarily be passed in alphabetical order.
*/


//My Code
function updateInventory(arr1, arr2) {
  var len1 = arr1.length;
  var len2 = arr2.length;
  var answer = arr1.length === 0 ? arr2 : arr1;

  //Update Inventory
  for(var i = 0; i < len2; i++) {
    for(var j = 0; j < len1; j++) {
      if(arr1[j][1] === arr2[i][1]) {
        answer[j][0] += arr2[i][0];
        break;
      } else if(j === len1 - 1) {
        answer.push(arr2[i]);
      }
    }
  }

  //Sort
  answer.sort(function(a,b) {
    return a[1] > b[1] ? 1 : -1;
  });

  return answer;
}


//Tests
var currentInventory = [
  [25, 'HTC'],
  [1000, 'Nokia'],
  [50, 'Samsung'],
  [33, 'Sony'],
  [10, 'Apple']
];

var newInventory = [
  [5, 'LG'],
  [10, 'Sony'],
  [4, 'Samsung'],
  [5, 'Apple']
];

updateInventory(currentInventory, newInventory); //should return [[15,'Apple'],[25,'HTC'],[5,'LG'],[1000,'Nokia'],[54,'Samsung'],[43,'Sony']]
