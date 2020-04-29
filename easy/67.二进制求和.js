/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // 以下方法会因为数字过大导致失准
    // return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
    // 大数字bigint
    return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
};
// @lc code=end

