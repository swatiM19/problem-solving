/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let n = nums.length;
    let res = new Array(n);
    let leftSum = 0;
    for(let i=0; i<n; i++){
        res[i] = leftSum;
        leftSum += nums[i];
    }
    let rightSum = 0;
    for(let i=n-1; i>=0; i--){
        res[i] = Math.abs(res[i] - rightSum);
        rightSum += nums[i];
    }
    return res;
};