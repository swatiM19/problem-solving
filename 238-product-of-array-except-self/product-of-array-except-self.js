/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let leftProd = new Array(n).fill(1);
    let rightProd = new Array(n).fill(1);

    for(let i=1; i<nums.length; i++){
        leftProd[i] = nums[i-1] * leftProd[i-1];
    }
    for(let i=n-2; i>=0; i--){
        rightProd[i] = nums[i+1] * rightProd[i+1];
    }
    let result = new Array(n).fill(1);
    for(let i=0; i<n; i++){
        result[i] = leftProd[i]* rightProd[i];
    }
    return result;
};