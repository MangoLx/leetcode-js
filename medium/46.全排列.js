/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
    const res = [];
    const used = {};

    const dfs = (path) => {
        // 首先判断出口
        if (path.length >= nums.length) {
            res.push(path.slice()); // 注意，一定要传入复制，不然会被清空
            return;
        }

        // 进行循环遍历
        for (const num of nums) { // 使用of遍历不会遍历原型，增加效率
            if (used[num]) { // 如果用过，跳过
                continue;
            }

            path.push(num); // 把数字推入数组
            used[num] = true; // 使用过的对象集合更新
            dfs(path); // 继续向下遍历
            path.pop(); // 弹出返回
            used[num] = false;
        }
    };

    dfs([]);

    return res;
};
// @lc code=end

