/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head === null || head.next === null) return head;
    let nowNode = head;
    let nextNode = head.next; // 下一个节点
    while (nowNode.next !== null) { // 不是最后一个
        if (nowNode.val === nextNode.val) {
            nextNode = nextNode.next; // 跳转
            nowNode.next = nextNode; // 链表重新链接
        } else { // 不想通，直接转换下一个
            nowNode = nextNode;
            nextNode = nextNode.next;
        }
    }
    return head;
};
// @lc code=end

