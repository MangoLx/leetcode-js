/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        sum += (s[i].charCodeAt() - 64) * Math.pow(26, s.length - i - 1);
    }
    return sum;
};
// @lc code=end

