/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const compare = function (t1, t2) {
    if (t1 === null && t2 === null) {
      return true;
    } else if (
      (t1 !== null && t2 === null) ||
      (t1 === null && t2 !== null) ||
      t1.val !== t2.val
    ) {
      return false;
    }
    let leftTree = compare(t1.left, t2.left);
    let rightTree = compare(t1.right, t2.right);

    return leftTree && rightTree;
  };
  if (root === null) {
    return false;
  }
  if (compare(root, subRoot)) {
    return true;
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
// @lc code=end
