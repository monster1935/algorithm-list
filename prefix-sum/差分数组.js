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
