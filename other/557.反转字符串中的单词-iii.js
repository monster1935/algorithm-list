/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let temp = s.split(" ");
  temp.forEach((el, index) => {
    temp[index] = el.split("").reverse().join("");
  });
  return temp.join(" ");
};
// @lc code=end
