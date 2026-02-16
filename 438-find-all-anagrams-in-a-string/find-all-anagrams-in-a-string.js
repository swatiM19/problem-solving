/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
let arr = new Array(26).fill(0);
    let result = [];
    let left = 0;
    
    for(let i=0; i<p.length; i++){
        arr[p[i].charCodeAt() - 97]++;
    }
    // console.log('arr before',arr);
    for(let i=0; i<s.length; i++){
        arr[s[i].charCodeAt()-97]-- ;
        if(i - p.length >= 0){
            arr[s[i-p.length].charCodeAt()-97]++ ;
            left++;
        }
        // console.log('arr',arr)
        if(checkPermute(arr)) {
            // count +=1;
            // return true;
            result.push(left);
        }
    }
    //console.log('count',count);
    //return false;
    return result;
};
    function checkPermute(arr) {
        for(let i=0; i<26 ; i++){
            if(arr[i] !== 0){
                return false
            }
        }
        return true;
    }