/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (strs.length == 0) return []
        const map = new Map();
        for(let i=0; i<strs.length; i++){
            const count = new Array(26).fill(0);
            for(let j=0; j<strs[i].length; j++){
                count[strs[i][j].charCodeAt(0)-97]++;
            }
            const key = count.join('#');
            if(map.has(key)){
                map.get(key).push(strs[i]);
            } else {
                map.set(key, [strs[i]]);
            }
        }
        let result = [];
        for(const[key, value] of map){
            result.push(value);
        }
        return result;
};
