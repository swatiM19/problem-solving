/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
   let i =0;
   while(i < nums.length){
    let correctIdx = nums[i]-1;
    if(nums[correctIdx] != nums[i]){
        [nums[correctIdx], nums[i]] = [nums[i], nums[correctIdx]];
    } else {
        i++;
    }
   }
   let result = [];
   for(let i=0; i<nums.length ; i++){
        if(nums[i] != i+1){
            result.push(i+1)
        }
   }
   return result;
};