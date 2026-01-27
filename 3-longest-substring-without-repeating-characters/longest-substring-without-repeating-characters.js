/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let l =0;
    let result = 0;
    for(let r =0; r<s.length; r++){
        if(map.has(s[r])){
            l = Math.max(map.get(s[r])+1, l)
        }
        map.set(s[r],r);
        result = Math.max(result, r-l+1);
    }
    return result;
};