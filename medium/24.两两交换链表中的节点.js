/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
const swapPairs = function(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    while (head && head.next) {
        const next = head.next;
        head.next = next.next; // 1号下一个转到3号
        next.next = head; // 2号下一个转到1号
        prev.next = next; // 0号下一个转到2号

        prev = head;
        head = head.next;
    }
    
    return dummy.next;
};
// @lc code=end

