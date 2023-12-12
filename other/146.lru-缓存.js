/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */
// @lc code=start
var ListNode = function (key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
};
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.count = 0;
  this.hash = {};
  this.dummyHead = new ListNode();
  this.dummyTail = new ListNode();
  this.dummyHead.next = this.dummyTail;
  this.dummyTail.prev = this.dummyHead;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let node = this.hash[key];
  if (node === undefined) return -1;
  this.moveToHead(node);
  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = this.hash[key];
  if (node === undefined) {
    if (this.count === this.capacity) {
      this.removeLRUItem();
    }
    let newNode = new ListNode(key, value);
    this.hash[key] = newNode;
    this.addToHead(newNode);
    this.count++;
  } else {
    node.value = value;
    this.moveToHead(node);
  }
};

LRUCache.prototype.moveToHead = function (node) {
  this.removeFromList(node);
  this.addToHead(node);
};

LRUCache.prototype.addToHead = function (node) {
  node.prev = this.dummyHead;
  node.next = this.dummyHead.next;
  this.dummyHead.next.prev = node;
  this.dummyHead.next = node;
};

LRUCache.prototype.removeFromList = function (node) {
  let temp1 = node.prev;
  let temp2 = node.next;
  temp1.next = temp2;
  temp2.prev = temp1;
};

LRUCache.prototype.removeLRUItem = function () {
  let tail = this.popTail();
  delete this.hash[tail.key];
  this.count--;
};
LRUCache.prototype.popTail = function () {
  let tail = this.dummyTail.prev;
  this.removeFromList(tail);
  return tail;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
