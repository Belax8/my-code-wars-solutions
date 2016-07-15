//Rules
/*
It's a Pokemon battle! Your task is to calculate the damage that a particular move would do using the following formula (not the actual one from the game):

damage = 50 * (attack/defense) * effectiveness
Make sure to round the result up to the nearest integer.

attack = your attack power
defense = the opponent's defense
effectiveness = the effectiveness of the attack based on the matchup (see explanation below)
Effectiveness:

Attacks can be super effective, neutral, or not very effective depending on the matchup. For example, water would be super effective against fire, but not very effective against grass.

Super effective: 2x damage
Neutral: 1x damage
Not very effective: 0.5x damage
To prevent this kata from being tedious, you'll only be dealing with four types: fire, water, grass, and electric. Here is the effectiveness of each matchup:

fire > grass
fire < water
fire = electric

water < grass
water < electric

grass = electric

For this kata, any type against itself is not very effective. Also, assume that the relationships between different types are symmetric (if a is super effective against b, then b is not very effective against a).

The function you will create is called calculateDamage, and it takes in your type and the opponent's type as strings and the attack and defense as numbers.
*/


//My Code
function calculateDamage(yourType, opponentType, attack, defense){
  var effectiveness;

  if(yourType === 'fire') {
    if(opponentType === 'water') {
      effectiveness = 0.5;
    } else if(opponentType === 'grass') {
      effectiveness = 2;
    } else if(opponentType === 'fire') {
      effectiveness = 0.5;
    } else if(opponentType === 'electric') {
      effectiveness = 1;
    }
  } else if(yourType === 'water') {
    if(opponentType === 'water') {
      effectiveness = 0.5;
    } else if(opponentType === 'grass') {
      effectiveness = 0.5;
    } else if(opponentType === 'fire') {
      effectiveness = 2;
    } else if(opponentType === 'electric') {
      effectiveness = 0.5;
    }
  } else if(yourType === 'grass') {
    if(opponentType === 'water') {
      effectiveness = 2;
    } else if(opponentType === 'grass') {
      effectiveness = 0.5;
    } else if(opponentType === 'fire') {
      effectiveness = 0.5;
    } else if(opponentType === 'electric') {
      effectiveness = 1;
    }
  } else if(yourType === 'electric') {
    if(opponentType === 'water') {
      effectiveness = 2;
    } else if(opponentType === 'grass') {
      effectiveness = 1;
    } else if(opponentType === 'fire') {
      effectiveness = 1;
    } else if(opponentType === 'electric') {
      effectiveness = 0.5;
    }
  }

  var damage = 50 * (attack/defense) * effectiveness;
  return Math.ceil(damage);
}


//Tests
calculateDamage('fire', 'water', 100, 100); //should return 25
calculateDamage('grass', 'water', 100, 100); //should return 100
calculateDamage('electric', 'fire', 100, 100); //should return 50
calculateDamage('water', 'water', 120, 130); //should return 24
calculateDamage('water', 'fire', 130, 95); //should return 137
calculateDamage('water', 'electric', 120, 96); //should return 32
