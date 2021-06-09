/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length < 1) return [];
    const res = [];
    const map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };

    const dfs = (curStr, i) => {
        if (i > digits.length - 1) { // 出口
            res.push(curStr);
            return;
        }
        const letters = map[digits[i]];
        for (const letter of letters) {
            dfs(curStr + letter, i + 1);
        }
    }

    dfs('', 0);

    return res;
};
// @lc code=end

