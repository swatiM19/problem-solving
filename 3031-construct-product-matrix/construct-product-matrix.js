/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var constructProductMatrix = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let MOD = 12345
    let ans = Array.from({length: m},()=> Array(n).fill(1));
    let prefix = 1;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            ans[i][j] = prefix;
            prefix = (prefix * grid[i][j]) % MOD;
        }
    }
    let suffix = 1;
    for(let i=m-1;i>=0;i--){
        for(let j=n-1;j>=0;j--){
            ans[i][j] = (suffix * ans[i][j]) % MOD;
            suffix = (suffix * grid[i][j]) % MOD; 
        }
    }
    return ans;
};