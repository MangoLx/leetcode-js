/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n < 2) return 0;
    let ret = 0;
    let flag = 1;

    for (let i = 1; i < n; i++) {
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                flag = 0;
                break;
            }
        }
        flag === 2 ? ret++ : flag = 2;
    }
    
    return ret;
};
// @lc code=end

