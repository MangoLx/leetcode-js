/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 最大最小区间
    var max = Math.pow(2, 31) - 1;
    var min = -Math.pow(2, 31);

    var y = 0; // 保存返回的数字

    while(x !== 0) {
        y = 10 * y + x % 10; // 取得最后一位数字和前一位数字反转拼接
        x = ~~(x/10);   // 向下取整
    }

    if (y > max) return 0;
    if (y < min) return 0;

    return y;
};
// @lc code=end

