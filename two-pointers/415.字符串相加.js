/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let len1 = num1.length - 1;
  let len2 = num2.length - 1;
  let add = 0;
  let res = [];

  while (len1 >= 0 || len2 >= 0 || add !== 0) {
    let x = len1 >= 0 ? num1.charAt(len1) - "0" : 0;
    let y = len2 >= 0 ? num2.charAt(len2) - "0" : 0;
    let result = x + y + add;
    res.push(result % 10);
    add = Math.floor(result / 10);
    2;
    len1 -= 1;
    len2 -= 1;
  }
  return res.reverse().join("");
};
// @lc code=end
