/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const y = String(x); // 转化为字符串反转
    const z = y.split().reverse().join('');
    return z === y;
};
// @lc code=end

