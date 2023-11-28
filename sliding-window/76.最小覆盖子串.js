/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let need = {};
  let window = {};
  let start = 0;
  let minLen = Infinity;
  let valid = 0;
  let left = 0;
  let right = 0;
  for (let c of t) {
    if (need[c]) {
      need[c] += 1;
    } else {
      need[c] = 1;
    }
  }
  while (right < s.length) {
    const c = s[right];
    right++;
    if (need[c]) {
      const v = window[c];
      if (v) {
        window[c] = v + 1;
      } else {
        window[c] = 1;
      }
      if (window[c] === need[c]) {
        valid++;
      }
    }

    while (Object.keys(need).length === valid) {
      if (right - left < minLen) {
        minLen = right - left;
        start = left;
      }
      const d = s[left];
      left++;
      if (need[d]) {
        if (window[d] === need[d]) {
          valid--;
        }
        window[d] = window[d] - 1;
      }
    }
  }

  return minLen === Infinity ? "" : s.substr(start, minLen);
};
// @lc code=end
