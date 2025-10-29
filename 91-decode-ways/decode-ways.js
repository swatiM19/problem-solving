/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let dp = Array(s+1).fill(0);
    if(s[0] == '0'){
        return 0;
    }
    dp[0] = 1;
    
    for(let i=1; i<s.length; i++){
        if(s[i-1] == '0' && s[i] == '0'){
            dp[i] =0;
        } else if(s[i-1] == '0' && s[i] !== '0'){
            dp[i] = dp[i-1];
        } else if(s[i-1] !== '0' && s[i] == '0'){
            if(s[i-1] == '1' || s[i-1] == '2'){
                dp[i] = (i>2 ? dp[i-2]:1);
            } else {
                dp[i] = 0;
            }
        } else {
            if(parseInt(s.substring(i-1,i+1)) <= 26){
                dp[i] = dp[i-1] + (i>2 ? dp[i-2]:1);
            } else {
                dp[i] = dp[i-1];
            }
            
        }
            
    }
    return dp[s.length-1];
};