/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }

  const rows = matrix.length;
  const columns = matrix[0].length;
  const total = rows * columns;
  const res = [];
  const visited = new Array(rows).fill(0).map(() => new Array(columns).fill(0));

  let directionIndex = 0;
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let row = 0;
  let column = 0;
  for (let i = 0; i < total; i++) {
    res.push(matrix[row][column]);
    visited[row][column] = 1;
    let nextRow = row + directions[directionIndex][0];
    let nextColumn = column + directions[directionIndex][1];

    if (
      nextRow < 0 ||
      nextRow >= rows ||
      nextColumn < 0 ||
      nextColumn >= columns ||
      visited[nextRow][nextColumn]
    ) {
      directionIndex = (directionIndex + 1) % 4;
    }

    row = row + directions[directionIndex][0];
    column = column + directions[directionIndex][1];
  }

  return res;
};
// @lc code=end
