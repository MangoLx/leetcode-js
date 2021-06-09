/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
    const res = [];
    const used = new Array(nums.length);

    nums.sort((a, b) => a - b); // 排序

    const dfs = (path) => {
        if (path.length >= nums.length) { // 出口
            res.push(path.slice());
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }

            if (i - 1 >= 0 && nums[i - 1] === nums[i] && !used[i - 1]) {
                continue;
            }

            path.push(nums[i]);
            used[i] = true;
            dfs(path);
            path.pop();
            used[i] = false;
        }
    };

    dfs([]);

    return res;
};
// @lc code=end

