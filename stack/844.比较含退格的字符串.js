/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const stack1 = [];
  const stack2 = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "#") {
      stack1.push(s[i]);
    } else {
      stack1.pop();
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] !== "#") {
      stack2.push(t[i]);
    } else {
      stack2.pop();
    }
  }
  return stack1.join("") === stack2.join("");
};
// @lc code=end
