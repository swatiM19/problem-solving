/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = [];
    let char = "";
    for(let i=0; i< s.length; i++){
        if(s[i] != " "){
            char += s[i];   
        }
        if(s[i] == " " && char.length > 0){
            words.unshift(char);
            char = "";
        }
    }
    if(char.length > 0){
        words.unshift(char);
    }
    return words.join(" ");
};