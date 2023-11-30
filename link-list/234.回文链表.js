/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 使用递归后续遍历可以拿到最后的结果
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let left = head;
  const travese = function (right) {
    if (right === null) return true;
    let res = travese(right.next);
    res = res && right.val === left.val;
    left = left.next;
    return res;
  };
  return travese(head);
};
// @lc code=end
