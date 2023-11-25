/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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

// 递归
// var isSymmetric = function(root) {
//   if (root === null) {
//     return true;
//   }

//   const check = function(left, right) {
//     if (left === null && right === null) {
//       return true;
//     }
//     if (left && right && (left.val === right.val)) {
//       return check(left.left, right.right) && check(left.right, right.left);
//     }
//     return false;
//   }

//   return check(root.left, root.right);
// };

// 非递归
var isSymmetric = function (root) {
  if (root === null) {
    return true;
  }
  const queue = [root.left, root.right];
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i += 2) {
      const left = queue.shift();
      const right = queue.shift();
      if ((!left && right) || (left && !right)) {
        return false;
      }
      if (left && right) {
        if (left.val !== right.val) {
          return false;
        }
        queue.push(left.left, right.right);
        queue.push(left.right, right.left);
      }
    }
  }
  return true;
};

// @lc code=end
