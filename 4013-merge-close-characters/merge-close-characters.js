/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var mergeCharacters = function(s, k) {
    const lastSeen = new Map();
    const result = [];

    for(let i=0; i< s.length; i++){
        const char = s[i];
        if(lastSeen.has(char)){
            const lastIdx = lastSeen.get(char);
            const currIdx = result.length;
            if(currIdx - lastIdx <= k){
                 continue;   
            }
        }
        lastSeen.set(char,result.length);
        result.push(char);
    }
    return result.join('');
};