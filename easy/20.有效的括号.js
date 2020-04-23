/*
 * @Author: your name
 * @Date: 2020-04-23 15:24:54
 * @LastEditTime: 2020-04-23 15:34:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /admin-4s/Users/mango/workspace/fe-leetcode/20.有效的括号.js
 */
/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const length = s.length;
    const arr = [];
    // 奇数直接排除
    if (length % 2) return false;
    for (let i = 0; i < length; i++) {
        const letter = s[i];
        switch (letter) {
            case '(' : 
                arr.push(letter);
                break;
            case '[' :
                arr.push(letter);
                break;
            case '{' :
                arr.push(letter);
                break;
            case ')' :
                if (arr.pop() !== '(') return false;
                break;
            case ']' :
                if (arr.pop() !== '[') return false;
                break;
            case '}' :
                if (arr.pop() !== '{') return false;
                break;
        }
    }
    return !arr.length;
};
// @lc code=end

