/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var arrEqual = function(arr1, arr2){
    for(let i=0; i<26; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;
    const s1Freq = new Array(26).fill(0);
    const s2Freq = new Array(26).fill(0);

    for(let i=0; i<s1.length; i++){
        s1Freq[s1.charCodeAt(i)-97]++;
    }

    let i = 0;
    for(let j=0; j<s2.length; j++){
        s2Freq[s2.charCodeAt(j)-97]++;

        if(j-i+1 > s1.length){
            s2Freq[s2.charCodeAt(i) - 97]--;
            i++;
        }

        if(arrEqual(s1Freq,s2Freq)){
            return true;
        }
    }
    return false;
};