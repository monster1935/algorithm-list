/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start

var reverseN = function (head, n) {
  var curr = head;
  var prev = null;
  for (let i = 0; i < n; i++) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  head.next = curr;
  return prev;
};

let successor = null;
var reverseN1 = function (head, n) {
  if (n === 1) {
    successor = head.next;
    return head;
  }

  let last = reverseN1(head, n - 1);
  head.next.next = head;
  head.next = successor;
  return last;
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left === 1) {
    return reverseN(head, right);
  }
  head.next = reverseBetween(head.next, left - 1, right - 1);
  return head;
};
// @lc code=end
