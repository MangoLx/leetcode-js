/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const obj = {};
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
        const ele = nums[i];
        obj[ele] = obj[ele] ? obj[ele] + 1 : 1;
        if (obj[ele] > nums.length / 2) num = ele;
    }
    return num;
};
// @lc code=end

