/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
  let res = -Infinity;

  const traverse = (root) => {
    if (root === null) {
      return 0;
    }

    const left = Math.max(0, traverse(root.left));
    const right = Math.max(0, traverse(root.right));

    res = Math.max(res, root.val + left + right);

    return Math.max(left, right) + root.val;
  };

  traverse(root);
  return res;
};
// @lc code=end
