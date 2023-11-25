/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const build = function (preorder, preStart, preEnd, inorder, inStart, inEnd) {
    if (preEnd < preStart) {
      return null;
    }
    let rootIndex = preStart;
    let rootVal = preorder[preStart];
    for (let i = 0; i < inorder.length; i++) {
      if (rootVal === inorder[i]) {
        rootIndex = i;
        break;
      }
    }
    let leftTreeSize = rootIndex - inStart;
    let root = new TreeNode(rootVal);
    root.left = build(
      preorder,
      preStart + 1,
      preStart + leftTreeSize,
      inorder,
      inStart,
      rootIndex - 1
    );
    root.right = build(
      preorder,
      preStart + leftTreeSize + 1,
      preEnd,
      inorder,
      rootIndex + 1,
      inEnd
    );
    return root;
  };

  return build(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1
  );
};
// @lc code=end
