/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // return s.split('').sort().toString() === t.split('').sort().toString();
    if (s.length !== t.length) return false;
    else if (s === t) return true;
    const obj = {};
    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) obj[s[i]] = 0;
        obj[s[i]]++;
        if (!obj[t[i]]) obj[t[i]] = 0;
        obj[t[i]]--;
    }
    for (const key in obj) {
        if (obj[key] !== 0) return false;
    }
    return true;
};
// @lc code=end

