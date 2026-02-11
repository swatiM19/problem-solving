/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let arr = new Array();
    arr.push(nums[0]);
    for(let i=1; i<nums.length; i++){
        if(nums[i] > arr[arr.length-1]){
            arr.push(nums[i]);
        } else {
            arr[binarySearch(arr, nums[i])] = nums[i];
        }
    }
    return arr.length;
};
var binarySearch = function(arr, currVal) {
    let left = 0;
    let right = arr.length-1;
    while(left <= right){
        let mid = left + Math.floor((right-left)/2);
        if(arr[mid] < currVal){
            left = mid+1;
        } else {
            right = mid-1;
        }
    }
    return left;
}