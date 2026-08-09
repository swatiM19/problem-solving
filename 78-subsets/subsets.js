// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */

var subsets = function(nums) {
  let result = [];
  const backtrack = function(i, nums, tempArr){
    if(i == nums.length){
        result.push([...tempArr]);
        return;
    }
    tempArr.push(nums[i]);
    backtrack(i+1, nums, tempArr);
    tempArr.pop(nums[i]);
    backtrack(i+1, nums, tempArr);
  }
  backtrack(0, nums, []); 
  return result;
};