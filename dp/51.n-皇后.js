/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const res = [];
  const board = Array.from({length: n}, () => Array(n).fill('.'));

  const backtrack = function(row, board) {
    if (row === board.length) {
      const temp = board.map(row => row.join(''));
      res.push(temp);
      return;
    }

    const n = board[row].length;
    for (let col = 0; col < n; col ++) {
      if (!isValid(board, row, col)) {
        continue;
      }  
      board[row][col] = 'Q';
      backtrack(row + 1, board);
      board[row][col] = '.';
    }
  }
  
  const isValid = function(board, row, col) {
    const n = board.length;
    // 这一列
    for (let i = 0; i < n; i++) {
       if (board[i][col] === 'Q') {
        return false;
       }
    }

    // 左上方
    for (let i = row - 1, j = col - 1; i >=0 && j>=0; i--, j--) {
       if (board[i][j] === "Q") {
         return false;
       }
    }

       for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
         if (board[i][j] === "Q") {
           return false;
         }
       }


    return true;
  }

  backtrack(0, board);
  return res;
};
// @lc code=end

