/**
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function(arr) {
    let idx = -1;
    for(let i=arr.length-1; i >=0; i--){
        if(arr[i] == i){
            idx = i;
        }
    }
    return idx;
};