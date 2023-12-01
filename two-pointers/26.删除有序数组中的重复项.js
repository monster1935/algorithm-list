/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * 经典的双指针
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] !== nums[left]) {
      left++;
      nums[left] = nums[right];
    }
    right++;
  }

  return left + 1;
};
// @lc code=end
