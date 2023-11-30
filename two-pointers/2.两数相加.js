/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(-1);
  let head = dummy;
  let add = 0;
  let sum = 0;
  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
    head.next = new ListNode(sum % 10);
    add = Math.floor(sum / 10);
    head = head.next;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }

  add && (head.next = new ListNode(add));
  return dummy.next;
};
// @lc code=end
