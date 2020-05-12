/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const res = [];
  if (rowIndex <= 0 ) return [1];
  for (let i = 0; i <= rowIndex; i++) {
    const arr = [];
    for (let j = 0; j <= i; j++) {
      j > 0 && j < i
        ? arr.push(res[i - 1][j] + res[i - 1][j - 1])
        : arr.push(1)
    }
    res.push(arr);
  }
  return res.pop();
};
// @lc code=end

