/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // 最长公共前缀，初始化为1;
    let theSame = ''; 
    // 如果strs的长度是0，则直接返回'‘
    if (strs.length == 0) {
        return '';
    }
    //如果strs的长度为1，则直接返回strs[0]
    if (strs.length == 1) {
        return strs[0];
    }

    for (let i = 0; i < strs[0].length; i++) {
        let isSame = true;
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                isSame = false;
                break;
            }
        }
        // 检查是否应该跳出
        if (!isSame) {
            break;
        } else {
            theSame += strs[0][i];
        }
    }
    return theSame;
};
// @lc code=end

