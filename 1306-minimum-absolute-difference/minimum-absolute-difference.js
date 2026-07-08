/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort(function(a,b){
        return a-b;
    })
    let result = [];
    let minDiff = Infinity;
    for(let i=0; i<arr.length-1; i++){
        let diff = Math.abs(arr[i]- arr[i+1]);
        if(diff < minDiff){
            minDiff = diff;
        }
    }
    console.log('minDiff',minDiff);
    for(let i=0; i<arr.length-1;i++){
        if(Math.abs(arr[i]- arr[i+1]) == minDiff){
            result.push([arr[i],arr[i+1]]);
        }
    }
    return result;
};