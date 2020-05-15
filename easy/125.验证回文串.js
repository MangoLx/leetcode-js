/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // ! 内存消耗较大 比较简单
  // const arr = s.replace(/[^\d^\w]/g, '').toLowerCase().split('');
  // return arr.join() === arr.reverse().join();

  // 双指针 一个左 一个右
  // 提升内存消耗不多 综合用上面更好 省事
  s = s.replace(/[^\d^\w]/g, '').toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) { // left === right表示字符串为奇数
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};
// @lc code=end

