/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    nums.sort(function(a,b) {
        return a-b;
    });
    for(let i=1; i< nums.length-1;i=i+2){
        [nums[i], nums[i+1]]=[nums[i+1], nums[i]];
    }
};