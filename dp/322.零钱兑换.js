/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function(coins, amount) {
//   const memo = new Array(amount + 1).fill(-Infinity);

//   const dp = function(coins, amount) {
//     if (amount === 0) return 0;
//     if (amount < 0) return -1;

//     if (memo[amount] != -Infinity) return memo[amount];

//     let res = Infinity;

//     for (let coin of coins) {
//       let sp = dp(coins, amount - coin);
//       if (sp === -1) continue;
//       res = Math.min(res, sp + 1);
//     }

//     memo[amount] =  res === Infinity ? -1 : res;
//     return memo[amount];
//   }

//   return dp(coins, amount);
// };

var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 0; i < dp.length; i++) {
    for (let coin of coins) {
      if (i - coin < 0) {
        continue;
      }
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount];
};
// @lc code=end
