/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 1) return true;
    let num = n;
    while (num > 1) {
        num /= 2;
    }
    return num === 1;
};
// @lc code=end

