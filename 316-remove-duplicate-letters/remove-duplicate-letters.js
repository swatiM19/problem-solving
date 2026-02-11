/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let frequency = {};
    let exists = {};
    for(let i=0; i< s.length; i++){
        frequency[s[i]] = (frequency[s[i]] || 0) + 1;
        exists[s[i]] = false;
    }

    let stack = [];
    for(let i=0; i< s.length; i++){
        let curr = s[i];
        let pos = stack.length -1;
        while(curr < stack[pos] && !exists[curr] && frequency[stack[pos]] !== 0 ){
            exists[stack[pos]] = false;
            stack.pop();
            pos = stack.length-1;
        }
        if(!exists[curr]){
            stack.push(curr);
            exists[curr] = true;
        }
        frequency[curr]--;
    }
    return stack.join('');
};