/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 空间换时间，使用hashmap
// var twoSum = function(nums, target) {
//   const map = {};

//   for (let i = 0; i < nums.length; i++) {
//     const curr = nums[i];
//     let targetnum = target - curr;
//     const targetindex = map[targetnum];
//     if (typeof targetindex === 'undefined') {
//       map[curr] = i;
//     } else {
//       return [i, targetindex];
//     }
//   }
// };

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - curr) {
        return [i, j];
      }
    }
  }
};
// @lc code=end
