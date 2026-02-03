/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let n = s.length;
    let map = {'a':0,'b':0,'c':0};
    let i=0;
    let j=0;
    let result = 0;

    let check = (map) => map['a'] >= 1 && map['b'] >= 1 && map['c'] >= 1;

    while(j<n) {
        if(s[j] in map){
            map[s[j]]++;
        }
        while(check(map)){
            result += n-j;
            if(s[i] in map){
                map[s[i]]--;
            }
            i++;
        }
        j++;
    }
    return result;
};