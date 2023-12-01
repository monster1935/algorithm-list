/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const res = new Array(rowIndex + 1).fill(0);
  for (let i = 0; i <= rowIndex; ++i) {
    res[i] = new Array(i + 1).fill(0);
    res[i][0] = res[i][i] = 1;
    for (let j = 1; j < i; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
    }
  }
  return res[rowIndex];
};
// @lc code=end
