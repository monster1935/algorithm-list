/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode(-1);
  let p = dummy;
  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      p.next = list2;
      list2 = list2.next;
    } else {
      p.next = list1;
      list1 = list1.next;
    }
    p = p.next;
  }
  if (list1) {
    p.next = list1;
  }
  if (list2) {
    p.next = list2;
  }
  return dummy.next;
};
// @lc code=end
