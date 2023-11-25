/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */

// 迭代
// var levelOrder = function(root) {
//   if (root === null) {
//     return [];
//   }
//   let res = [];
//   const queue = [root];
//   while(queue.length) {
//     let len = queue.length;
//     let temp = [];
//     while(len) {
//       const curr = queue.shift();
//       temp.push(curr.val);
//       if (curr.left) {
//         queue.push(curr.left);

//       }
//       if (curr.right) {
//         queue.push(curr.right);
//       }
//       --len;
//     }
//     if (temp.length) {
//       res.push(temp);
//     }
//   }
//   return res;
// };

// 递归
var levelOrder = function (root) {
  let res = [];

  const traverse = function (root, level) {
    if (root === null) {
      return;
    }
    if (!Array.isArray(res[level])) {
      res[level] = [];
    }
    res[level].push(root.val);
    traverse(root.left, level + 1);
    traverse(root.right, level + 1);
  };

  traverse(root, 0);

  return res;
};
// @lc code=end
