/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
    const len = matrix.length;
    
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            // 交换matrix[i][j] matrix[j][i]
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    matrix.forEach(line => line.reverse());
};
// @lc code=end

