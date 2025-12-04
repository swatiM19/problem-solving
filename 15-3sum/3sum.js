/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    nums.sort((a,b)=> a-b);
    //console.log(nums)
    for(let i=0; i<nums.length; i++){
        if( i > 0 && nums[i] == nums[i-1]){
            continue
        }
        let n1 = nums[i];
        let sum = twoSum(nums,-n1, i+1,nums.length-1);
        result.push(...sum);
    }
    return result;
};
var twoSum = function(nums, target,i,j) {
    let result = [];
    while(i<j){
        let sum = nums[i]+ nums[j];
         if(sum == target){
            while(i<j && nums[i] == nums[i+1]){
                i++;
            }
            while(i<j && nums[j] == nums[j-1]){
                j--;
            }
            result.push([-target, nums[i], nums[j]]);
            i++;
            j--;
        } else if(sum < target){
            i++;
        } else {
            j--;
        }
    }
    return result;
}
