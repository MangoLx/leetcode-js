/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // let maxArea = 0;
    // for (let i = 0; i < height.length; i++) {
    //     for (let j = i + 1; j < height.length; j++) {
    //         const cur = Math.abs(i - j) * Math.min(height[i], height[j]);
    //         if (cur > maxArea) maxArea = cur;
    //     }
    // }
    // return maxArea;

    let res = 0;
    let i = 0;
    let j = height.length - 1;

    while(i < j) {
        res = Math.max(res, Math.min(height[i], height[j]) * (j - i));
        if (height[i] < height[j]) {
            i++
        } else {
            j--;
        }
    }

    return res;
};
// @lc code=end

