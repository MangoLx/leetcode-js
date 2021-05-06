/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s; // 一层就是自己

    const rows = new Array(numRows).fill('');
    const n = 2 * numRows - 2;
    for (let i = 0; i < s.length; i++) {
        const x = i % n;
        rows[Math.min(x, n - x)] += s[i];
    }

    return rows.join('');

};
// @lc code=end

