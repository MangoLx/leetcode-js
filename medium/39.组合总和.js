/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    // 回溯算法 + 剪枝
    const res = [];

    const dfs = (start, temp, sum) => {
        if (sum >= target) { // 如果和大于等于目标和
            sum === target && res.push(temp.slice());
            return; // 递归出口，结束
        }

        for (let i = start; i < candidates.length; i++) { // 可以枚举的数字
            temp.push(candidates[i]); // 选择数字进入集合
            dfs(i, temp, sum + candidates[i]); // 回溯
            temp.pop(); // 弹出，继续下一个 进行剪枝
        }
    }

    dfs(0, [], 0);

    return res;
};
// @lc code=end

