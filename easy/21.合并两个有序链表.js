/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    const newListNodeHead = new ListNode(-1);
    let newListNode = newListNodeHead;
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            newListNode.next = l1;
            l1 = l1.next;
        } else {
            newListNode.next = l2;
            l2 = l2.next;
        }
        newListNode = newListNode.next;
    }
    newListNode.next = l1 ? l1 : l2;
    return newListNodeHead.next;
};
// @lc code=end

