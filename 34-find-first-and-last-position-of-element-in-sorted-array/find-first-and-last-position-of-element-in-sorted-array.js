/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    return[leftOccurence(nums,target), rightOccurence(nums, target)]
};
var rightOccurence = function(nums, target){
    let l =0;
    let r= nums.length-1;
    let rightOccurence = -1;
    while(l <= r){
        let mid = l + Math.floor((r-l)/2);
        if(nums[mid] == target){
            rightOccurence = mid;
            l = mid+1;
        } else if(nums[mid]< target){
            l = mid+1;
        } else {
            r = mid-1;
        }
    }
    return rightOccurence;
}
var leftOccurence = function(nums, target){
    let l = 0;
    let r = nums.length-1;
    let leftOccurence = -1;
    while(l<= r){
        let mid = l+Math.floor((r-l)/2);
        if(nums[mid] == target){
            leftOccurence = mid;
            r = mid-1;
        } else if(nums[mid] < target){
            l = mid+1;
        } else {
            r = mid -1;
        }
    }
    return leftOccurence;
}