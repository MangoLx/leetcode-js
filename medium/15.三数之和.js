/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = []; // 储存结果数组
    // 首先进行排序
    nums.sort((a, b) => a - b);
    const size = nums.length;

    if (nums[0] > 0 || nums[size - 1] < 0) return res;

    let i = 0;
    while(i < size - 2) {
        if (nums[i] > 0) break; // 无解
        let first = i + 1; // 头部指针
        let end = size - 1; // 尾部指针

        while (first < end) { // 计算三个之和
            const sum = nums[i] + nums[first] + nums[end];
            if (sum > 0) { // 合比0大，则右指针左移
                while (nums[last] === nums[--last]) {} // 重复值跳过
            } else if (sum < 0) { // 合比0小，则左指针右移
                while (nums[first] === nums[++first]) {} // 重复值跳过
            } else {
                res.push([nums[i], nums[first], nums[end]]);
            }
        }
        while (nums[i] === nums[++i]) {}
    }

};
// @lc code=end

