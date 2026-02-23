/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
   let currMax = nums[0];
    let globalMax = nums[0];
    for(let i=1; i<nums.length; i++){
        currMax = Math.max(currMax + nums[i] , nums[i]);
        globalMax = Math.max(currMax, globalMax);
    }
    return globalMax;
};