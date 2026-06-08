/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let lessNums = [];
    let equalNums = [];
    let greaterNums = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i] < pivot){
            lessNums.push(nums[i])
        } else if(nums[i] > pivot){
            greaterNums.push(nums[i]);
        } else {
            equalNums.push(nums[i]);
        }
    }
    return [...lessNums, ...equalNums, ...greaterNums];
};