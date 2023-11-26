/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 两个for循环加双指针思路，主要在于剪枝优化
var fourSum = function (nums, target) {
  let res = [];
  nums.sort((a, b) => a - b);
  const len = nums.length;
  for (let i = 0; i < len - 3; i++) {
    let x = nums[i];
    if (i > 0 && x === nums[i - 1]) continue; // 跳过重复
    if (x + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break; // 当前值太大了，后续所有循环结果都可以放弃了
    if (x + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue; // 当前值太小了，该值可以放弃，没必要算了，直接算后面的值
    for (let j = i + 1; j < len - 2; j++) {
      let y = nums[j];
      if (j > i + 1 && y === nums[j - 1]) continue; // 跳过重复
      if (x + y + nums[j + 1] + nums[j + 2] > target) break;
      if (x + y + nums[len - 1] + nums[len - 2] < target) continue;
      let left = j + 1;
      let right = len - 1;
      while (left < right) {
        const s = x + y + nums[left] + nums[right];
        if (s < target) {
          left++;
        } else if (s > target) {
          right--;
        } else if (s === target) {
          res.push([x, y, nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          left++;
          right--;
        }
      }
    }
  }

  return res;
};
// @lc code=end
