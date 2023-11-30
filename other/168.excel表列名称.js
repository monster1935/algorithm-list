/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let ans = [];
  while (columnNumber > 0) {
    const a0 = ((columnNumber - 1) % 26) + 1;
    console.log("a0", a0);
    ans.push(String.fromCharCode(a0 - 1 + "A".charCodeAt()));
    columnNumber = Math.floor((columnNumber - a0) / 26);
    console.log("columnNumber", columnNumber);
  }
  ans.reverse();
  return ans.join("");
};
// @lc code=end
