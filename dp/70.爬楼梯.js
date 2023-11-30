/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// var climbStairs = function (n) {
//   let dp = [];
//   dp[0] = 1;
//   dp[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n];
// };
var climbStairs = function (n) {
  let p = 0;
  let q = 0;
  let sum = 1;

  for (let i = 1; i <= n; i++) {
    p = q;
    q = sum;
    sum = p + q;
  }

  return sum;
};
// @lc code=end
