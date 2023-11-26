/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @return {number}
 */
// var pathSum = function(root, targetSum) {
//   if (root === null) {
//     return 0;
//   }

//   // 计算当前节点一共有的路径总数
//   const rootSum = function(root, targetSum) {
//     let res = 0;
//     if (root === null) {
//       return 0;
//     }
//     if (root.val === targetSum) {
//       res += 1;
//     }

//     res += rootSum(root.left, targetSum - root.val);
//     res += rootSum(root.right, targetSum - root.val);

//     return res;
//   }

//   let res = rootSum(root, targetSum);
//   res += pathSum(root.left, targetSum);
//   res += pathSum(root.right, targetSum);

//   return res;
// };

var pathSum = function (root, targetSum) {
  const prefix = new Map();
  prefix.set(0, 1);

  const traverse = function (root, prefix, curr, targetSum) {
    if (root === null) {
      return 0;
    }
    curr += root.val;

    let res = prefix.get(curr - targetSum) || 0;
    prefix.set(curr, (prefix.get(curr) || 0) + 1);
    res += traverse(root.left, prefix, curr, targetSum);
    res += traverse(root.right, prefix, curr, targetSum);
    prefix.set(curr, (prefix.get(curr) || 0) - 1);

    return res;
  };

  return traverse(root, prefix, 0, targetSum);
};
// @lc code=end
