/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let res = false;

  const traverse = function (root, targetSum) {
    if (root === null) {
      return false;
    }
    if (root.left === null && root.right === null) {
      if (root.val === targetSum) {
        res = true;
        return;
      }
    }
    traverse(root.left, targetSum - root.val);
    traverse(root.right, targetSum - root.val);
  };

  traverse(root, targetSum);

  return res;
};
// @lc code=end
