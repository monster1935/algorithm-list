/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 冒泡的思路，只冒泡k次
// var findKthLargest = function(nums, k) {
//   function bubbleSort(arr, k) {
//     var len = arr.length;
//     for (var i = 0; i < k; i++) {
//       for (var j = 0; j < len - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//           [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//         }
//       }
//     }
//     return arr;
//   }

//   const nums1 = bubbleSort(nums, k);
//   return nums1[nums1.length - k];
// };

var findKthLargest = function (nums, k) {
  const swap = function (nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  };

  const maxHeapify = function (nums, curr, heapSize) {
    let left = 2 * curr + 1; // 左节点
    let right = 2 * curr + 2; // 右节点
    let largest = curr;
    if (left < heapSize && nums[left] > nums[largest]) {
      largest = left;
    }
    if (right < heapSize && nums[right] > nums[largest]) {
      largest = right;
    }

    if (largest !== curr) {
      swap(nums, curr, largest);
      maxHeapify(nums, largest, heapSize);
    }
  };

  const buildMaxHeap = function (nums, heapSize) {
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
      maxHeapify(nums, i, heapSize);
    }
  };

  let heapSize = nums.length;
  buildMaxHeap(nums, heapSize);
  for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
    swap(nums, 0, i);
    --heapSize;
    maxHeapify(nums, 0, heapSize);
  }

  return nums[0];
};
// @lc code=end
