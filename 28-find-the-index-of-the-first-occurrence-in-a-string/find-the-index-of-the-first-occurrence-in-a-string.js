/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length === 0)
        return 0;
    let len = haystack.length - needle.length;
    for(let i=0; i<=len; i++){
        if(haystack.slice(i,needle.length+i) == needle){
            return i;
        }
    }
    return -1;
};