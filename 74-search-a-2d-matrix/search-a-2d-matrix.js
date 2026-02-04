/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    console.log(m, n)
    let lo = -1;
    let hi = (n*m)-1;
    console.log(lo, hi)
    while(lo + 1 < hi){
        let mid = lo + Math.floor((hi-lo)/2);
        if(isGreaterOrEqual(matrix, target, mid, n)){
            hi = mid;
        } else {
            lo = mid;
        }
    }
    console.log('hi', hi);
    return matrix[Math.floor(hi/n)][hi%n] == target;
};

var isGreaterOrEqual = function (matrix,target,idx,n) {
    console.log('idx',idx,Math.floor(idx/n),idx%n)
    return matrix[Math.floor(idx/n)][idx%n] >= target;
}