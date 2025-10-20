/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hash = new Array(128).fill(-1);
    let l = 0;
    let r = 0;
    let n = s.length;
    let maxLen = 0;
    while(r < n){
        if(hash[s.charCodeAt(r)]!= -1){ // in the map
            if(hash[s.charCodeAt(r)] >= l){
                l = hash[s.charCodeAt(r)] + 1;
            }

        }
        let len = r-l+1;
        maxLen = Math.max(len , maxLen);
        hash[s.charCodeAt(r)] = r; 
        r++;

    }
    return maxLen;
};