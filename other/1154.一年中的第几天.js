/*
 * @lc app=leetcode.cn id=1154 lang=javascript
 *
 * [1154] 一年中的第几天
 */

// @lc code=start
/**
 * 普通闰年：公历年份是4的倍数，且不是100的倍数的，为闰年（如2004年、2020年等就是闰年）。
世纪闰年：公历年份是整百数的，必须是400的倍数才是闰年（如1900年不是闰年，2000年是闰年）。
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  const year = +date.slice(0, 4);
  const month = +date.slice(5, 7);
  const day = +date.slice(8);

  const amount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    amount[1] += 1;
  }

  let ans = 0;
  for (let i = 0; i < month - 1; ++i) {
    ans += amount[i];
  }
  return ans + day;
};
// @lc code=end
