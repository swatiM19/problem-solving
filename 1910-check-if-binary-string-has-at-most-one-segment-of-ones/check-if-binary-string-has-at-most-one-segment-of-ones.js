/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    let seenZero = false;
    for(let i=0; i<s.length; i++){
        if(s[i] == '0'){
            seenZero = true;
        } else if(seenZero){
            return false;
        }
    }
    return true;
};