/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let need = new Map();
  let window = new Map();
  for (let c of p) {
    need.set(c, (need.get(c) || 0) + 1);
  }

  let left = 0,
    right = 0,
    valid = 0;
  let res = [];
  while (right < s.length) {
    const c = s[right];
    right++;
    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }
    while (right - left >= p.length) {
      if (valid === need.size) {
        res.push(left);
      }
      const d = s[left];
      left++;
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) {
          valid--;
        }
        window.set(d, (window.get(d) || 0) - 1);
      }
    }
  }

  return res;
};
// @lc code=end
