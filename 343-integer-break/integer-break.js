/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n<2) return -1;
    return dfs(n, new Map());
};
const dfs = (n, dp) => {
    if(n == 1) return 1;
    if(dp.has(n)) return dp.get(n);
    let max = 0;
    for(let i=1; i< n; i++){
        max = Math.max(max, i*Math.max(n-i, dfs(n-i,dp)));
    }
    dp.set(n,max);
    return max;
}