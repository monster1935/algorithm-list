/*
 * @lc app=leetcode.cn id=705 lang=javascript
 *
 * [705] 设计哈希集合
 */

// @lc code=start

var MyHashSet = function () {
  this.base = 1000;
  this.data = new Array(this.base).fill(0).map((i) => new Array());
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const hash = key % this.base;
  for (let element of this.data[hash]) {
    if (element === key) {
      return;
    }
  }
  return this.data[hash].push(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const hash = key % this.base;
  const item = this.data[hash];
  for (let i = 0; i < item.length; i++) {
    if (item[i] === key) {
      item.splice(i, 1);
      return;
    }
  }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const hash = key % this.base;
  for (let element of this.data[hash]) {
    if (element === key) {
      return true;
    }
  }
  return false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end
