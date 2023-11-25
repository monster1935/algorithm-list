/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {
  if (root === null) {
    return [];
  }
  const res = [];
  const queue = [root];
  while (queue.length) {
    let len = queue.length;
    let temp = [];
    while (len) {
      const curr = queue.shift();
      temp.push(curr.val);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
      --len;
    }
    if (temp.length) {
      res.push(temp);
    }
  }

  return res.map((item) => item[item.length - 1]);
};
// @lc code=end
