/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
var Different = function (nums) {
  this.diff = [];
  if (nums.length) {
    this.diff[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
      this.diff[i] = nums[i] - nums[i - 1];
    }
  }
};

Different.prototype.increment = function (i, j, val) {
  this.diff[i] += val;
  if (j + 1 < this.diff.length) {
    this.diff[j + 1] -= val;
  }
};

Different.prototype.result = function () {
  let res = new Array(this.diff.length);
  res[0] = this.diff[0];
  for (let i = 1; i < this.diff.length; i++) {
    res[i] = res[i - 1] + this.diff[i];
  }
  return res;
};
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  let nums = new Array(n).fill(0);
  let df = new Different(nums);
  for (let i = 0; i < bookings.length; i++) {
    let val = bookings[i][2];
    let left = bookings[i][0] - 1;
    let right = bookings[i][1] - 1;
    df.increment(left, right, val);
  }
  let res = df.result();
  return res;
};
// @lc code=end
