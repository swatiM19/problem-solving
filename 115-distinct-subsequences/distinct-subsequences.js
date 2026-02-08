/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

var numDistinct = function (s, t) {
    let [s1,t1] = [s.length, t.length];
    let dp = new Array(s1+1).fill(-1).map(() => new Array(t1+1).fill(-1));
    
    function distinctSubs(i, j) {
        if(j == 0) return 1;
        if(i == 0) return 0;
        
        if(dp[i][j] !== -1){
            return dp[i][j];
        }
        
        if(s[i-1] == t[j-1]){
            return dp[i][j]=distinctSubs(i-1, j-1) + distinctSubs(i-1, j)
        }
        return dp[i][j] = distinctSubs(i-1, j);
    }
    
    return distinctSubs(s1, t1);
};