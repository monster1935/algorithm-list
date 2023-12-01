/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0,
    count = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    // 清空之前的记录count
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
};
// @lc code=end
