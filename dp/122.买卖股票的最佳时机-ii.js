/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * i 为第几天，k为交易次数上限，0代表没有持有，1代表已持有，k 此处为正无穷，所以k和k-1是一样的
 *  dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
    dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
            = max(dp[i-1][k][1], dp[i-1][k][0] - prices[i])
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;
  // const dp = Array.from({ length: len }, () => new Array(2).fill(0));
  // const dp = new Array(len).fill(0).map(() => new Array(2));
  let dp_i_0 = 0; // 第i天不持有股票
  let dp_i_1 = -Infinity; // 第i天持有股票
  for (var i = 0; i < len; i++) {
    const temp = dp_i_0;
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, temp - prices[i]);
  }
  return dp_i_0;
};
// @lc code=end
