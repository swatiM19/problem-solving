/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return binarySearch(nums, target);
};
var binarySearch = function(nums,target){
    let n = nums.length;
    let low = 0;
    let high = n-1;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(nums[mid] == target){
            return mid;
        } else if(target < nums[mid]){
            high = mid-1;
        } else {
            low = mid+1;
        }
    }
    return low;
}