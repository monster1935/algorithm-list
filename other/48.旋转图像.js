/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const reverse = function (arr) {
    let i = 0;
    let j = arr.length - 1;
    while (j > i) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  };
  const len = matrix.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (j === i) continue;
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let row of matrix) {
    reverse(row);
  }
};
// @lc code=end
