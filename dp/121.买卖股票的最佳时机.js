/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * 
 * i 为第几天，k为交易次数上限，0代表没有持有，1代表已持有，k 此处最大为1，所以当k=0时，收益为0
 *  dp[i][1][0] = max(dp[i-1][1][0], dp[i-1][1][1] + prices[i])
    dp[i][1][1] = max(dp[i-1][1][1], dp[i-1][0][0] - prices[i]) 
            = max(dp[i-1][1][1], -prices[i])
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   const len = prices.length;
//   const dp = Array.from({ length: len }, () => new Array(2).fill(0));
//   for (var i = 0; i < len; i++) {
//     if (i - 1 == -1) {
//       dp[i][0] = 0;
//       dp[i][1] = -prices[i];
//       continue;
//     }
//     dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
//     dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
//   }
//   return dp[len - 1][0];
// };

// var maxProfit = function (prices) {
//   const len = prices.length;
//   // const dp = Array.from({ length: len }, () => new Array(2).fill(0));
//   const dp = new Array(len).fill(0).map(() => new Array(2));
//   for (var i = 0; i < len; i++) {
//     if (i - 1 == -1) {
//       dp[i][0] = 0;
//       dp[i][1] = -prices[i];
//       continue;
//     }
//     dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
//     dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
//   }
//   return dp[len - 1][0];
// };

// 节省空间
var maxProfit = function (prices) {
  const len = prices.length;
  // const dp = Array.from({ length: len }, () => new Array(2).fill(0));
  // const dp = new Array(len).fill(0).map(() => new Array(2));
  let dp_i_0 = 0; // 第i天不持有股票
  let dp_i_1 = -Infinity; // 第i天持有股票
  for (var i = 0; i < len; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, -prices[i]);
  }
  return dp_i_0;
};
// @lc code=end
