/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // 虚拟头结点 
    let dummyHead = new ListNode(-1);
    dummyHead.next = head;

    let prev = dummyHead;
    while(prev.next !== null){
        prev.next.val === val
            ? prev.next = prev.next.next
            : prev = prev.next;
    }

    return dummyHead.next;
};
// @lc code=end

