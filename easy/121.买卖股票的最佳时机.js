/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // !执行速度太慢了 时间复杂度O2
  // let biggestGains = 0;
  // for (let i = 0; i < prices.length - 1; i++) {
  //   for (let j = i + 1; j < prices.length; j++) {
  //     if (prices[j] - prices[i] > biggestGains) {
  //       biggestGains = prices[j] - prices[i];
  //     }
  //   }
  // }
  // return biggestGains;

  // ?新方法 时间复杂度O 时间从400ms提高到70ms
  let minprice = Number.MAX_SAFE_INTEGER
  let max = 0
  for(let i = 0; i < prices.length; i++){
    if(prices[i] < minprice){
      minprice = prices[i];
    }else{
      max = Math.max(max,prices[i] - minprice);
    }
  }
  return max;
};
// @lc code=end

