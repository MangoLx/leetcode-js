/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') return 0;
    // return haystack.indexOf(needle);
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] = needle[0]) { // 判断第一个是否一样
            if (haystack.substring(i, i + needle.length) === needle) return i; 
        }
    }
    return -1;
};
// @lc code=end

