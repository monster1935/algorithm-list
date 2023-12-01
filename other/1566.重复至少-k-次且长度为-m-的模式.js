/*
 * @lc app=leetcode.cn id=1566 lang=javascript
 *
 * [1566] 重复至少 K 次且长度为 M 的模式
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr, m, k) {
  let len = arr.length;
  for (let left = 0; left <= len - m * k; left++) {
    let offset = 0;
    for (; offset < m * k; offset++) {
      if (arr[left + offset] !== arr[left + (offset % m)]) {
        break;
      }
    }
    if (offset === m * k) {
      return true;
    }
  }
  return false;
};
// @lc code=end
