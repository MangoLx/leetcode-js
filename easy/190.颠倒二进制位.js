/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    // 倒叙输出
    const str = n.toString(2); // 转化为二进制字符串
    let m = '0'.repeat(32 - str.length) + str; // 补充到32位
    return parseInt(m.split('').reverse().join(''), 2); // 反转
};
// @lc code=end

