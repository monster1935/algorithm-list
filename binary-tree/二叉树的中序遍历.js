/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 * 递归解法
 */
// var inorderTraversal = function(root) {
//   let res = [];
//   const traverse = (root) => {
//      if (root === null) {
//        return [];
//      }
//      traverse(root.left);
//      res.push(root.val);
//      traverse(root.right);
//   }
//   traverse(root);
//   return res;
// };

// 非递归解法
var inorderTraversal = function (root) {
  let stack = [];
  let res = [];
  let curr = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    // 左-根-右 弹出后便访问
    res.push(curr.val);
    curr = curr.right;
  }

  return res;
};
// @lc code=end
