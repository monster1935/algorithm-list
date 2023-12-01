/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const palindrome = function (s, left, right) {
    while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.substring(left + 1, right);
  };
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let s1 = palindrome(s, i, i);
    let s2 = palindrome(s, i, i + 1);
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }

  return res;
};
// @lc code=end
