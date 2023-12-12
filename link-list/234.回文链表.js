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
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function (head) {
//   let left = head;
//   const travese = function (right) {
//     if (right === null) return true;
//     let res = travese(right.next);
//     res = res && right.val === left.val;
//     left = left.next;
//     return res;
//   };
//   return travese(head);
// };

// 空间复杂度O(1)版本
var isPalindrome = function (head) {
  const reverse = function (head) {
    let prev = null;
    let curr = head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  };
  const findMid = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    if (fast) {
      slow = slow.next;
    }
    return slow;
  };

  let left = head;
  let right = reverse(findMid(head));
  while (right) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }
  return true;
};
// @lc code=end
