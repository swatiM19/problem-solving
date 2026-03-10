/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let low = 1; 
    let high = Math.max(...nums);
    while(low <= high){
        let mid = low + Math.floor((high-low)/2);
        if(isValid(nums, threshold, mid)){
            high = mid-1;
        } else {
            low = mid+1;
        }
    }
    return low;
};
var isValid = function(nums, threshold, mid){
    let d = 0;
    for(let i=0; i<nums.length; i++){
        d += Math.ceil(nums[i]/mid)
    }
    if(d > threshold){
        return false;
    }
    return true;
}