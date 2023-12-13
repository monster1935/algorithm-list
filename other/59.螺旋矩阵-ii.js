/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let total = n * n;
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

  let row = 0;
  let col = 0;
  let directionIndex = 0;
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  for (let i = 0; i < total; i++) {
    res[row][col] = i + 1;
    let nextRow = row + directions[directionIndex][0];
    let nextColumn = col + directions[directionIndex][1];
    if (
      nextRow < 0 ||
      nextRow >= n ||
      nextColumn < 0 ||
      nextColumn >= n ||
      res[nextRow][nextColumn] !== 0
    ) {
      directionIndex = (directionIndex + 1) % 4;
    }
    row = row + directions[directionIndex][0];
    col = col + directions[directionIndex][1];
  }
  return res;
};
// @lc code=end
