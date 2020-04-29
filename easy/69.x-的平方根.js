/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // 已经有官方库了，我为啥还要实现.....
    // return Math.floor(Math.sqrt(x));

    // 二分查找，前半段都没有这个数，后面一定没有
    let left = 0; 
    let right = x;
    while(left < right) {
        const mid = (left + right) >>> 1;
        if(mid * mid < x) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    if(left * left > x) {
        return left - 1
    } else {
        return left;
    }
};
// @lc code=end

