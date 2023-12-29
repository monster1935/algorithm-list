/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) {
        return nums.length;
    }
    let left = 2
    let right = 2;
    while(right < nums.length) {
        if(nums[right] !== nums[left - 2]) {
            nums[left] = nums[right];
            left++;
        } 
        right++;
    }
    return left;

};
// @lc code=end

