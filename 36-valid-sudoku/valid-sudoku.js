/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const set = new Set();
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            if(board[i][j] == '.') continue;
            let row_ = "row"+i+board[i][j];
            let col_ = "col"+j+board[i][j];
            let box_ = "box"+Math.floor(i/3)+Math.floor(j/3)+board[i][j]
            if(set.has(row_) || set.has(col_) || set.has(box_)){
                return false;
            } else {
                set.add(row_);
                set.add(col_);
                set.add(box_);
            }
        }
    }
    return true;
};