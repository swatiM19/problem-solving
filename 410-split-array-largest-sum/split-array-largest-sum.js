/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let low = Math.max(...nums);
    let high = 0;
    for(let i=0; i<nums.length; i++){
        high += nums[i];
    }
    while(low <= high){
        let mid = low + Math.floor((high-low)/2);
        let count = countSubarray(nums, mid);
        if(count <= k){
            high = mid-1;
        } else {
            low = mid+1;
        }
    }
    return low;
};
var countSubarray = function(nums, maxSum){
    let sum = 0;
    let subArray = 1;
    for(let i=0; i<nums.length; i++){
        if(sum + nums[i] > maxSum){
            subArray++;
            sum = 0;
        }
        sum+= nums[i]
    }
    return subArray;
}