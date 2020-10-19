/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // const obj = {};
    // for (let i = 0; i < nums.length; i++) {
    //     if (obj[nums[i]]) {
    //         return true;
    //     } else {
    //         obj[nums[i]] = 1;
    //     }
    // }
    // return false;
    return new Set(nums).size !== nums.length;
};
// @lc code=end

