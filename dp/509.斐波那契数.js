/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 时间复杂度O(2^n), 空间复杂度O(1)
// var fib = function(n) {
//   if (n === 0) return 0
//   if (n === 1) return 1;
//   return fib(n-1) + fib(n-2)
// };

// 时间复杂度O(n), 空间复杂度O(n)
// var fib = function (n) {
//   let memo = new Array(n + 1).fill(0);
//   const dp = function(memo, n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     if (memo[n] !== 0) return memo[n];
//     memo[n] = dp(memo, n-1) + dp(memo, n-2);
//     return memo[n];
//   }

//   return dp(memo, n);
// };

// 时间复杂度O(n), 空间复杂度O(n)
// var fib = function (n) {
//   let dp = new Array(n + 1).fill(0);
//   dp[0] = 0;
//   dp[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i-1] + dp[i-2];
//   }
//   return dp[n];
// };

// 时间复杂度O(n), 空间复杂度O(1)
var fib = function (n) {
  if (n === 0 || n === 1) {
    return n;
  }
  let dp_i_1 = 1,
    dp_i_0 = 0;
  for (let i = 2; i <= n; i++) {
    let dp_i = dp_i_1 + dp_i_0;
    dp_i_0 = dp_i_1;
    dp_i_1 = dp_i;
  }
  return dp_i_1;
};

// @lc code=end
