/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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

// 递归
// var maxDepth = function(root) {
//   if (root === null) {
//     return 0;
//   }
//   let depthLeft = maxDepth(root.left);
//   let depthRight = maxDepth(root.right);

//   return Math.max(depthLeft, depthRight) + 1;
// };
var maxDepth = function (root) {
  let res = 0;
  let depth = 0;

  const traverse = function (root) {
    if (root === null) {
      return;
    }
    depth++;
    if (root.left === null && root.right === null) {
      res = Math.max(res, depth);
    }
    traverse(root.left);
    traverse(root.right);
    depth--;
  };

  traverse(root);
  return res;
};
// @lc code=end
