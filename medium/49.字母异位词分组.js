/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    // 使用map进行存储
    const map = new Map();

    for (let value of strs) { // 遍历
        // 字符串转化为数组
        let arr = Array.from(value);
        // 字符串排序
        arr.sort();
        // 把有同一数量字母作为map的key
        let key = arr.toString();
        // 取出当前map里面对应数组，没有则新建数组
        const list = map.get(key) || [];
        // str推入数组
        list.push(value);
        // 反设定回map
        map.set(key, list);
    }

    // 转化
    return Array.from(map.values());
};
// @lc code=end

