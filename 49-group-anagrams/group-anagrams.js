/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length === 0) return [];
    
    let map = new Map();

    for(let i=0; i<strs.length; i++){
        let word = strs[i];
        let key = word.split('').sort().join('');

        if(map.has(key)){
            map.get(key).push(word);
        } else {
            map.set(key, [word]);
        }
    }
    let result = [];
    for( const [key, value] of map){
        result.push(value);
    }
    return result;
};