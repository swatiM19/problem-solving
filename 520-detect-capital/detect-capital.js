/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let count = 0;
    let index = 0;
    for(let i=0; i< word.length; i++){
        if(word[i] >= 'A' && word[i] <= 'Z'){
            count++;
            index=i;
        }
    }
    if(count == word.length) return true;
    if(index == 0) return true;
    return false;
};