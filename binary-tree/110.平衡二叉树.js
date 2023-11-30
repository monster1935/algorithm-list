/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  const getHeight = function (root) {
    if (root === null) {
      return 0;
    }
    const leftH = getHeight(root.left);
    if (leftH === -1) return -1;
    const rightH = getHeight(root.right);
    if (rightH === -1) return -1;
    return Math.abs(leftH - rightH) > 1 ? -1 : 1 + Math.max(leftH, rightH);
  };

  return getHeight(root) === -1 ? false : true;
};
// @lc code=end
