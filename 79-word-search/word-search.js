/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var findWord = function(board, i , j, idx, word){
    let directions = [[1,0],[-1,0],[0,1],[0,-1]];
    if(idx == word.length) return true;
    if(i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] == "$"){
        return false;
    }
    if(board[i][j] != word[idx]){
        return false;
    }

    let temp = board[i][j];
    board[i][j] = "$";
    for(let d =0; d<directions.length; d++){
        let new_i = i + directions[d][0];
        let new_j = j + directions[d][1];
        if(findWord(board, new_i, new_j, idx+1, word)){
            return true;
        }
    }
    board[i][j] = temp;

    return false;
}
var exist = function(board, word) {
    let m = board.length;
    let n = board[0].length;
    let boardCopy = [];

    for(let i=0; i<m; i++){
        boardCopy[i] =[]
        for(let j=0; j<n; j++){
            boardCopy[i][j] = board[i][j]
        }
    }
    //console.log(boardCopy)

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(boardCopy[i][j] == word[0] && findWord(boardCopy, i, j, 0, word)){
                return true;
            }
        }
    }
    return false;
};