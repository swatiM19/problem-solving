/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let i = 0;
    let j = n-1;
    
    while(i>=0 && i<m && j>=0 && j< n){
        if(matrix[i][j] == target){
            return true;
        } else if (matrix[i][j] > target){
            j--;
        } else if (matrix[i][j] < target){
            i++;
        }
    }
    return false;
};