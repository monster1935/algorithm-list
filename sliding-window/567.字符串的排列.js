/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let window = new Map();
  let need = new Map();
  let valid = 0;
  let left = 0;
  let right = 0;
  for (let c of s1) {
    need.set(c, (need.get(c) || 0) + 1);
  }
  while (right < s2.length) {
    const c = s2[right];
    right++;
    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }
    while (right - left >= s1.length) {
      if (valid === need.size) {
        return true;
      }
      const d = s2[left];
      left++;
      if (need.get(d)) {
        if (window.get(d) === need.get(d)) {
          valid--;
        }
        window.set(d, (window.get(d) || 0) - 1);
      }
    }
  }
  return false;
};
// @lc code=end
