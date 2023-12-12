/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
var reverse = function (a, b) {
  let pre, cur, next;
  pre = null;
  cur = a;
  next = a;
  while (cur !== b) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (head === null) return null;
  let a, b;
  a = b = head;
  for (let i = 0; i < k; i++) {
    if (b === null) return head;
    b = b.next;
  }
  let last = reverse(a, b);
  a.next = reverseKGroup(b, k);
  return last;
};
// @lc code=end
