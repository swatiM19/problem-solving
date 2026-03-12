/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
    let result = 0;
    let low = 0;
    let high = Math.max(...nums);

    while(low <= high){
        let mid = low + Math.floor((high-low)/2);
        if(isMaximum(mid, nums)){
            result = mid;
            high = mid-1;
        } else {
            low = mid+1;
        }
    }
    return result;
};

var isMaximum = function(expectedMax, nums){
    let temp = [...nums];
    for(let i=0; i<temp.length-1; i++){
        if(temp[i] > expectedMax){
            return false;
        }
        let buffer = expectedMax - temp[i];
        temp[i+1] = temp[i+1]-buffer;
    }
    return temp[temp.length-1] <= expectedMax;
}