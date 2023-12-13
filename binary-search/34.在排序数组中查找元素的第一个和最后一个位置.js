/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start

var binarySearch = function (nums, target, dir) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      if (dir === "left") {
        right = mid;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] > target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  if (dir === "left") {
    return nums[left] === target ? left : -1;
  } else {
    return nums[left - 1] === target ? left - 1 : -1;
  }
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let res = [-1, -1];
  let leftIndex = binarySearch(nums, target, "left");
  let rightIndex = binarySearch(nums, target, "right");
  res = [leftIndex, rightIndex];
  return res;
};
// @lc code=end
