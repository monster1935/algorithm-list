/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;

  const maxDepth = function (root) {
    if (root === null) {
      return 0;
    }
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    // 经过一个节点的最大直径
    const myDimeter = leftDepth + rightDepth;
    maxDiameter = Math.max(maxDiameter, myDimeter);
    // 经过一个节点的最大深度
    return 1 + Math.max(leftDepth, rightDepth);
  };

  maxDepth(root);

  return maxDiameter;
};
// @lc code=end
