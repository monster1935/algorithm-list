/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  const window = {};

  let res = 0;
  while (right < s.length) {
    const c = s[right];
    right++;
    if (window[c] === undefined) {
      window[c] = 1;
    } else {
      window[c]++;
    }
    // 有重复的情况下缩减窗口
    while (window[c] > 1) {
      const d = s[left];
      left++;
      window[d]--;
    }
    res = Math.max(res, right - left);
  }
  return res;
};
// @lc code=end
