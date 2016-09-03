//Rules
/*
Write a function that, given a depth (n), returns a single-dimensional array representing Pascal's Triangle to the n-th level.

For example:

pascalsTriangle(4) == [1,1,1,1,2,1,1,3,3,1]
*/


//My Code
function pascalsTriangle(n,pasTri) {
  pasTri = pasTri || [[1]];
  if(pasTri.length === n) {
    return pasTri.reduce((flatArr,level) => flatArr.concat(level));
  }
  const prevLevel = pasTri[pasTri.length-1];
  const nextLvl = prevLevel.reduce(
      (nxtL,num,i) => {
        let nextNum = i < prevLevel.length-1 ? prevLevel[i+1] : 0;
        return [...nxtL, num + nextNum];
      },[1]);
  return pascalsTriangle(n,[...pasTri,nextLvl]);
}


//Tests
pascalsTriangle(4); //should return [1,1,1,1,2,1,1,3,3,1]
