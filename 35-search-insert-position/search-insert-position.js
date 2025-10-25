/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let lo = -1;
    let hi = nums.length
    while(lo +1 < hi){
        let mid = lo + Math.floor((hi-lo)/2);
        if(isGreaterOrEqual(nums[mid],target)){
            hi = mid;
        } else {
            lo = mid;
        }
    }
    return hi;
};
var isGreaterOrEqual = function(num, target) {
    return num >= target;
}