/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
  let res = [];

  const traverse = function (root) {
    if (root === null) {
      return;
    }
    traverse(root.left);
    res.push(root.val);
    traverse(root.right);
  };
  traverse(root);

  for (let i = 0; i < res.length - 1; i++) {
    if (res[i] >= res[i + 1]) {
      return false;
    }
  }

  return true;
};
// @lc code=end
