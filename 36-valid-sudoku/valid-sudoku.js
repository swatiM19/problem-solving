/**
 * @param {character[][]} board
 * @return {boolean}
 */

var validBox = function(board, sr,sc,er,ec){
    let set = new Set();
    for(let i=sr; i<=er; i++){
        for(let j=sc; j<=ec; j++){
            if(board[i][j] == '.') continue
            if(set.has(board[i][j])){
                return false;
            }
            set.add(board[i][j]);
        }
    }
    return true;
}
var isValidSudoku = function(board) {
    // validate row
    for(let row = 0; row<9; row++){
        const set = new Set();
        for(let col = 0; col<9; col++){
            if(board[row][col] == '.') continue;
            if(set.has(board[row][col])){
                return false;
            }
            set.add(board[row][col]);
        }
    }
    // validate col
    for(let col = 0; col <9; col++){
        const set = new Set();
        for(let row = 0; row<9; row++){
            if(board[row][col] == '.') continue;
            if(set.has(board[row][col])){
                return false;
            }
            set.add(board[row][col]);
        }
    }
    // validate 3x3
    for(let sr = 0; sr<9; sr+=3){
        let er = sr+2
        for(let sc = 0;sc<9; sc+=3){
            let ec = sc+2
            if(!validBox(board,sr,sc,er,ec)){
                return false;
            }
        }
    }
    return true;
};