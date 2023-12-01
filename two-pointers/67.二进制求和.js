/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let len1 = a.length - 1;
  let len2 = b.length - 1;
  let add = 0;
  let res = [];

  while (len1 >= 0 || len2 >= 0 || add !== 0) {
    let x = len1 >= 0 ? a.charAt(len1) - "0" : 0;
    let y = len2 >= 0 ? b.charAt(len2) - "0" : 0;
    let result = x + y + add;
    res.push(result % 2);
    add = Math.floor(result / 2);
    len1 -= 1;
    len2 -= 1;
  }
  return res.reverse().join("");
};
// @lc code=end
