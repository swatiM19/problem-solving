/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var mapsCompare = function(map1, map2){
    if(map1.size !== map2.size) return false;
    for(let [key, val] of map1){
        if(map2.get(key) !== val){
            return false;
        }
    }
    return true;
}
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;
    let map1 = new Map();

    for(let i=0; i<s1.length ; i++){
        map1.set(s1[i], (map1.get(s1[i])||0)+1);
    }
    let l =0;
    let map2 = new Map()
    for(let r =0; r<s2.length; r++){
        map2.set(s2[r],(map2.get(s2[r])||0)+1);
        if(r-l+1 > s1.length){
            map2.set(s2[l], map2.get(s2[l])-1);
            if(map2.get(s2[l]) == 0){
                map2.delete(s2[l]);
            }
            l++;
        }
        if(r-l+1 == s1.length){
            if(mapsCompare(map1,map2)) return true;
        }
    }
    return false;
};