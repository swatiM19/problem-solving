// /**
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */
var searchMatrix = function(matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;
    let s = 0;
    let e = n*m-1;
    while(s<=e){
        let mid = s + Math.floor((e-s)/2);
        let row = Math.floor(mid/m);
        let col = mid%m;
        if(matrix[row][col] == target){
            return true;
        } else if(matrix[row][col] < target){
            s = mid+1;
        } else if(matrix[row][col] > target){
            e = mid-1;
        }
    }
    return false;
};