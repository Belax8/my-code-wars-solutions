//Rules
/*
Pete is now mixing the cake mixture. He has the recipe, containing the required ingredients for one cake. He also might have added some of the ingredients already, but something is missing. Can you help him to find out, what he has to add to the mixture?

Requirements:

Pete only wants to bake whole cakes. And ingredients, that were added once to the mixture, can't be removed from that. That means: if he already added the amount of flour for 2.8 cakes, he needs to add at least the amount of flour for 0.2 cakes, in order to have enough flour for 3 cakes.
If Pete already added all ingredients for an integer amount of cakes, you don't need to add anything, just return an empty hash then.
If Pete didn't add any ingredients at all, you need to add all ingredients for exactly one cake.
For simplicity we ignore all units and just concentrate on the numbers. E.g. 250g of flour is simply 250 (units) of flour and 1 lb of sugar is also simply 1 (unit) of sugar.
Ingredients, which don't have to be added to the mixture (missing amount = 0), must not be present in the result.
Examples:

var recipe = {flour: 200, eggs: 1, sugar: 100};

getMissingIngredients(recipe, {flour: 50, eggs: 1}); // must return {flour: 150, sugar: 100}
getMissingIngredients(recipe, {}); // must return {flour: 200, eggs: 1, sugar: 100}
getMissingIngredients(recipe, {flour: 500, sugar: 200}); // must return {flour: 100, eggs: 3, sugar: 100}
*/


//My Code
function getMissingIngredients(recipe, added) {

  var times = 1;
  var needed = {};

  //see how many times the recipe will need to be repeated
  var flourCount = added.flour != undefined ? Math.ceil(added.flour / recipe.flour) : 1;
  var eggCount = added.eggs != undefined ? Math.ceil(added.eggs / recipe.eggs) : 1;
  var sugarCount = added.sugar != undefined ? Math.ceil(added.sugar / recipe.sugar) : 1;
  if(flourCount > times) { times = flourCount; }
  if(eggCount > times) { times = eggCount; }
  if(sugarCount > times) { times = sugarCount; }

  //check is he added everything that he needed
  if(added.flour === recipe.flour * times && added.eggs === recipe.eggs * times && added.sugar === recipe.sugar * times) {
    return '';
  }

  //find out how much of each missing ingredient
  if(added.flour !== recipe.flour * times) {
    let count = 0;
    if(added.flour == undefined) {
      count = recipe.flour * times;
    } else {
      while (added.flour < recipe.flour * times) {
        count += 1;
        added.flour += 1;
      }
    }
    needed.flour = count;
  }
  if(added.eggs !== recipe.eggs * times) {
    let count = 0;
    if(added.eggs == undefined) {
      count = recipe.eggs * times;
    } else {
      while (added.eggs < recipe.eggs * times) {
        count += 1;
        added.eggs += 1;
      }
    }
    needed.eggs = count;
  }
  if(added.sugar !== recipe.sugar * times) {
    let count = 0;
    if(added.sugar == undefined) {
      count = recipe.sugar * times;
    } else {
      while (added.sugar < recipe.sugar * times) {
        count += 1;
        added.sugar += 1;
      }
    }
    needed.sugar = count;
  }

  //return
  return needed;
}


//Tests
var recipe = {flour: 200, eggs: 1, sugar: 100};
getMissingIngredients(recipe, {flour: 50, eggs: 1}); //should return {flour: 150, sugar: 100}
getMissingIngredients(recipe, {}); //should return {flour: 200, eggs: 1, sugar: 100}
getMissingIngredients(recipe, {flour: 500, sugar: 200}); //should return {flour: 100, eggs: 3, sugar: 100}
