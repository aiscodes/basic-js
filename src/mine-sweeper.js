const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
    const a = matrix.length;
    const b = matrix[0].length;
    let output = Array.from(Array(a), () => new Array(b));
    let mines = 0;
    for(let i = 0; i < a; i++) {
        for(let j = 0; j < b; j++) { 
            mines = 0;
            if(i > 0) {
                if(matrix[i-1][j-1]) mines += 1;
                if(matrix[i-1][j]) mines += 1;
                if(matrix[i-1][j+1]) mines += 1;
            }
            
            if(i < a - 1) {
                if(matrix[i+1][j-1]) mines += 1;
                if(matrix[i+1][j]) mines += 1;
                if(matrix[i+1][j+1]) mines += 1;
            }
            if(matrix[i][j-1]) mines += 1;
            if(matrix[i][j+1]) mines += 1;
            output[i][j] = mines;

        }
    }
    
    return output;
}

module.exports = {
  minesweeper
};
