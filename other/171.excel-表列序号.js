/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let len = columnTitle.length;
  let res = 0;
  for (let i = 0; i < len; i++) {
    const num = columnTitle[i].charCodeAt() - "A".charCodeAt() + 1;
    res += num * Math.pow(26, len - i - 1);
  }

  return res;
};
// @lc code=end
