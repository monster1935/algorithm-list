/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let res = [];
  const traverse = function (root) {
    if (root === null) {
      return;
    }
    res.push(root.val);
    traverse(root.left);
    traverse(root.right);
  };

  traverse(root);

  const createTree = function (root, level) {
    if (level > res.length - 1) {
      return;
    }
    root.left = null;
    root.right = new TreeNode(res[level]);
    createTree(root.right, level + 1);
  };

  createTree(root, 1);
  return root;
};
// @lc code=end
