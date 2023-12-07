/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function(root) {
  if (root === null) return [];
  const res = [];
  const queue = [root];
  let direction = 1; // 1 left, -1 right

  while (queue.length) {
    let len = queue.length;
    let temp = [];
    if (direction === 1) {
      while (len) {
        let curr = queue.shift();
        temp.push(curr.val);
        if (curr.left) {
          queue.push(curr.left);
        }
        if (curr.right) {
          queue.push(curr.right);
        }
        len--;
      }
    } else {
      while (len) {
        let curr = queue.pop();
        temp.push(curr.val);
        if (curr.right) {
          queue.unshift(curr.right);
        }
        if (curr.left) {
          queue.unshift(curr.left);
        }
        len--;
      }
    }
    direction = -direction;
    res.push([...temp]);
  }
  return res;

};
// @lc code=end

