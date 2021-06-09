/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row = {};
    let col = {};
    let boxes = {};

    // 进行遍历
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            let num = board[i][j];
            if (num !== '.') {
                let boxIndex = parseInt(i / 3) * 3 + parseInt(j / 3);

                if (row[`${i}-${num}`] || col[`${j}-${num}`] || boxes[`${boxIndex}-${num}`]) {
                    return false;
                }

                row[`${i}-${num}`] = true;
                col[`${j}-${num}`] = true;
                boxes[`${boxIndex}-${num}`] = true;
            }
        }
    }

    return true;
};
// @lc code=end

