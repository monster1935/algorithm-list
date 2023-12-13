/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // 使用正则表达式匹配一个或者多个空格
  return s.trim().split(/\s+/).reverse().join(" ");
};

// @lc code=end
