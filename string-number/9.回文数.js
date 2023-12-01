/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let res = [];
  let temp = x;
  if (x < 0) {
    return false;
  }
  // 条件 x !== 0 负数也能处理
  while (x !== 0) {
    const mod = x % 10;
    res.push(mod);
    x = parseInt(x / 10);
  }

  return res.join("") == temp;
};
// @lc code=end
