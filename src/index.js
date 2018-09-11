/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let triangles = 0;
  const preferencesSet = preferences;
  if(preferencesSet.length > 2) {
    for (let i = 0;  i < preferencesSet.length; i++) { // [2, 3 , 1]
      const firstLover = i + 1; // 1
      const secondLover = preferencesSet[i]; // 2
      const thirdLover = preferencesSet[secondLover - 1];
      if( preferencesSet[thirdLover - 1] === firstLover){
        triangles += 1;
      }
    }
  }
  return Math.trunc(triangles / 3);
};
