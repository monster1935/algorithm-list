/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
// var postorderTraversal = function(root) {
//   let res = [];

//   const traverse = function(root) {
//     if (root === null) {
//       return;
//     }

//     traverse(root.left);
//     traverse(root.right);
//     res.push(root.val);

//   }
//   traverse(root);

//   return res;
// };

// 迭代
var postorderTraversal = function (root) {
  let stack = [];
  let res = [];
  let curr = root;
  let pre = null;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    // 1、叶子节点访问
    // 2、右边节点已经访问过
    // 3、已经访问的节点其左节点不用访问
    if (curr.right === null || pre === curr.right) {
      res.push(curr.val);
      pre = curr;
      curr = null;
    } else {
      stack.push(curr);
      curr = curr.right;
    }
  }
  return res;
};
// @lc code=end
