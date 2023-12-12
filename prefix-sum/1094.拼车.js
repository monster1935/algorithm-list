/*
 * @lc app=leetcode.cn id=1094 lang=javascript
 *
 * [1094] 拼车
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
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  let nums = new Array(1001).fill(0);
  let df = new Different(nums);
  for (let i = 0; i < trips.length; i++) {
    let val = trips[i][0];
    let left = trips[i][1];
    let right = trips[i][2] - 1;
    df.increment(left, right, val);
  }

  var res = df.result();
  for (let i = 0; i < res.length; i++) {
    if (res[i] > capacity) {
      return false;
    }
  }
  return true;
};
// @lc code=end
