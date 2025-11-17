/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let lo = -1;
    let hi = nums.length -1;

    while(lo + 1 < hi){
        let mid = lo + Math.floor((hi-lo)/2);
        if(isOnCorrectSide(nums, mid)){
            hi = mid;
        } else {
            lo = mid;
        }
    }
    return nums[hi];
};

var isOnCorrectSide = function(nums, idx){
    if(idx % 2 == 0){
        return nums[idx] !== nums[idx + 1];
    } else {
        return nums[idx] != nums[idx - 1];
    }
}