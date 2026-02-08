/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];
    let curr = [];
    
    backtrack(s,0,curr, result);
    return result;
};
var isPalindrome = function(s){
    if (s.length == 1) return true
    let l = 0;
    let r = s.length-1;
    while(l < r){
        if(s[l] != s[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;
}
var backtrack = function(s, idx, curr, result){
    if (idx == s.length){
        result.push([...curr])
        return;
    }
    for(let i=idx; i<s.length; i++){
        let subs = s.substring(idx, i+1)
        if(isPalindrome(subs)){
            curr.push(subs)
            backtrack(s, i+1, curr, result)
            curr.pop()
        }
    }
}