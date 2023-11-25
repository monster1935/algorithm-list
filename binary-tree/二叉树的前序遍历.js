/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 */
// 递归解法
// var preorderTraversal = function(root) {
//   let res = [];

//   const traverse = function (root) {
//     if (root === null) {
//       return;
//     }
//     res.push(root.val);
//     traverse(root.left);
//     traverse(root.right);
//   }
//   traverse(root);

//   return res;
// };

// 非递归解法
var preorderTraversal = function (root) {
  let res = [];
  let stack = [];

  let curr = root;
  while (curr || stack.length) {
    // 遍历最左边的节点
    while (curr) {
      // 遍历左边节点的过程中访问节点
      res.push(curr.val);
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    curr = curr.right;
  }

  return res;
};
// @lc code=end
