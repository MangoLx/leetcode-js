/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const res = [];
  if (numRows <= 0 ) return res;
  for (let i = 0; i < numRows; i++) {
    const arr = [];
    for (let j = 0; j <= i; j++) {
      j > 0 && j < i
        ? arr.push(res[i - 1][j] + res[i - 1][j - 1])
        : arr.push(1)
    }
    res.push(arr);
  }
  return res;
};
// @lc code=end

