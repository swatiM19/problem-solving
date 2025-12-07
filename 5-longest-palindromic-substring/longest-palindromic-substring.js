/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let dp = new Array(s.length).fill(false).map(() => new Array(s.length).fill(false));
    let length =0;
    let start = 0;
    let end = 0;
    for(let g=0; g < s.length; g++){
        for(let i=0, j=g; j< dp.length; i++,j++){
            if(g == 0){
                dp[i][j] = true;
            } else if(g == 1){
                if(s.charAt(i) == s.charAt(j)){
                    dp[i][j] = true;
                } else {
                    dp[i][j] = false;
                }
            } else {
                if(s.charAt(i) == s.charAt(j) && dp[i+1][j-1] == true){
                    dp[i][j] = true;
                } else {
                    dp[i][j] = false;
                }
            }
            if(dp[i][j] == true) {
                length = g+1; 
                start = i;
                end = j+1;
            }
        }
    }
   
    return s.substring(start,end);
};