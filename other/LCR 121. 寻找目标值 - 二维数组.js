/**
 * @param {number[][]} plants
 * @param {number} target
 * @return {boolean}
 */
var findTargetIn2DPlants = function (plants, target) {
  let i = plants.length - 1,
    j = 0;
  while (i >= 0 && j < plants[0].length) {
    if (plants[i][j] < target) {
      j++;
    } else if (plants[i][j] > target) {
      i--;
    } else {
      return true;
    }
  }
  return true;
};
