/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p = m + n - 1;
  let p1 = m - 1;
  let p2 = n - 1;
  while (p1 >= 0 && p2 >= 0) {
    nums1[p--] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--];
  }
  // 如果是p2结束了，p1还没结束，不用操作，因为p1就在原位置
  // p1结束之后，如果还有p2没结束，说明p1的元素都用完了，只需要把p2赋值即可
  for (let i = 0; i <= p2; i++) {
    nums1[i] = nums2[i];
  }
};
// @lc code=end
