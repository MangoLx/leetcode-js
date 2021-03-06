/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // 贪心算法，只取正值
  // 今天买明天就卖，只计算赚的情况
  let sum = 0;
  for (let i = 1; i < prices.length; i++) {
    sum += Math.max(prices[i] - prices[i - 1], 0);
  }
  return sum;
};
// @lc code=end
