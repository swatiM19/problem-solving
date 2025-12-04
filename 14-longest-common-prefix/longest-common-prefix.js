/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let len = '';
    if (strs.length === 0)
        return len;
    for(let i=0; i<strs[0].length ; i++){
        for(let j=1; j<strs.length; j++){
            if(strs[0][i] !== strs[j][i])
                return len;
        }
        len = len + strs[0][i];
    }
    return len;
        
};