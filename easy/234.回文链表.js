
/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // 数组双指针
    const vals = [];
    while (head) {        // 丢进数组里
        vals.push(head.val);
        head = head.next;
    }
    // 双指针
    let start = 0;
    let end = vals.length - 1;
    while (start < end) {
        if (vals[start] !== vals[end]) return false;
        start++;
        end--;
    }
    return true;
};
// @lc code=end

