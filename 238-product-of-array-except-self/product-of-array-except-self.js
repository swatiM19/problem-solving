/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let result = new Array(n).fill(1);
    for(let i=1; i<nums.length; i++){
        result[i] = nums[i-1] * result[i-1];
    }

    // console.log('==',result)
    let rightProd = 1
    for(let i=n-1; i>=0; i--){
        result[i] = result[i] * rightProd;
        rightProd *= nums[i];
    }
    return result;
};