/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const t = parseInt(s);
  if (isNaN(t)) {
    return 0;
  }
  if (t > Math.pow(2, 31) - 1 || t < Math.pow(-2, 31)) {
    return t < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
  }
  return t;
};
// @lc code=end
