/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let tracks = new Map();
  let track = [];
  let sum = 0;

  const traverse = function (root, track, sum) {
    if (root === null) {
      return;
    }

    track.push(root.val);
    sum += root.val;

    if (root.left === null && root.right === null) {
      const sumRes = tracks.get(sum);
      if (sumRes) {
        sumRes.push(track.slice());
        tracks.set(sum, sumRes);
      } else {
        tracks.set(sum, [track.slice()]);
      }
    }

    traverse(root.left, track, sum);
    traverse(root.right, track, sum);
    track.pop(root.val);
    sum -= root.val;
  };

  traverse(root, track, sum);

  return tracks.get(targetSum) || [];
};
// @lc code=end
