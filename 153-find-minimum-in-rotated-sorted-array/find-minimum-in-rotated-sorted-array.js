/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let lo = -1;
    let hi = nums.length -1;

    while(lo +1 < hi){
        let mid = lo + Math.floor((hi-lo)/2);
        if(isOnRight(nums,mid)){
            hi = mid;
        } else {
            lo = mid;
        }
    }
    // console.log('hi', hi);
    return nums[hi];
};

var isOnRight = function(nums, index){
    return nums[index] <= nums[nums.length-1];
}