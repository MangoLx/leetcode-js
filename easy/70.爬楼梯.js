/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let f1 = 2;
    let f2 = 3;
    let f3 = 0;
    if (n <= 3) return n;
    while (n > 3) {
        f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
        n--;
    }
    return f2;

    // 传统递归会超出限制，效率太低
    // if (n <= 1) return 1;
    // return climbStairs(n - 1) + climbStairs(n - 2);
};
// @lc code=end

