/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // 暴力旋转，弹出个数，每次加入头部
    // for (let i = 0; i < k; i++) {
    //     nums.unshift(nums.pop());
    // }

    // 使用splice拆解 但是如果k超出了数组长度呢？
    nums.splice(0, 0, ...nums.splice(nums.length - k));
};
// @lc code=end

