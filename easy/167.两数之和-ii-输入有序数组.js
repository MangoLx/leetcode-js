/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // ! 暴力法 o2  200ms
    // for (let i = 0; i < numbers.length - 1; i++) {
    //     for (let j = i + 1; j < numbers.length; j++) {
    //         if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
    //     }
    // }

    // 时间复杂度低方法 对撞双指针 76ms
    let front = 0;
    let end = numbers.length-1;
    while (front < end) {
        const frontNums = numbers[front];
        const endNums = numbers[end];
        if (frontNums + endNums < target) front++;
        else if (frontNums + endNums > target) end--;
        if (frontNums + endNums === target) return [front + 1, end + 1];
    }
};
// @lc code=end

