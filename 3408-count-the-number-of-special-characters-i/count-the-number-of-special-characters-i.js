/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    const small = Array(26).fill(0);
    const capital = Array(26).fill(0);

    let count = 0;
    for(let char of word){
        if (char >= 'a' && char <= 'z') {
            small[char.charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
        } else {
            capital[char.charCodeAt(0) - 'A'.charCodeAt(0)] = 1;
        }
    }
    for (let i = 0; i < 26; i++) {
        if (small[i] === 1 && capital[i] === 1) {
            count++;
        }
    }
    return count;
};