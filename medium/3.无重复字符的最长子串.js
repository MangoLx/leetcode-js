/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 切割成数组
    const temp = s.split('');
    let arr = []; // 保存无重复字符串
    let maxLen = 0; // 保存最大长度
    for (let i = 0; i < temp.length; i++) {
        const id = arr.indexOf(temp[i]); // 获取当前字符是否在无重复数组里面存在
        arr.push(temp[i]);
        if (id === -1) { // 不存在
            maxLen = maxLen < arr.length ? arr.length : maxLen;
        } else { // 存在
            arr = arr.slice(id + 1); // 存在就干掉之前的重新计数
        }
    }
    return maxLen;
};
// @lc code=end

