/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */

// 迭代
// var reverseList = function (head) {
//   let prev = null;
//   let curr = head;
//   while (curr) {
//     const next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
//   }

//   return prev;
// };

// 递归
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  const newhead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newhead;
};
// @lc code=end
