/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const res = [-1, -1];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) break; // 没有的情况

        if (res[0] === -1 && nums[i] === target) { // 第一次遇到
            res[0] = i;
            res[1] = i;
        } else if (nums[i] === target && i > res[0]) {
            res[1] = i;
        }

    }

    return res;
};
// @lc code=end

