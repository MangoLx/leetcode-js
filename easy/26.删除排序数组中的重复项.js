/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 性能...
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                nums.splice(j, 1);
                j--;
            } else { break; }
        }
    }

    return nums.length;
};
// @lc code=end

// 双指针
var removeDuplicates = function(nums) {
    var i = 0;
    let j = 0;
    let temp = nums[i];
    while(j <= nums.length-1){
        if (temp === nums[j+1]) {
            j++;
        } else {
            nums[i+1] = nums[j+1];
            temp = nums[j+1];
            i++;
        }
    }
    return i;
};
    

