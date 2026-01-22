/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=0; 
    let j=i+1;
    while(j< nums.length){
        if(nums[i] !== nums[j]){
            nums[i+1] = nums[j]
            i++;
        }
        j++;
    }
    return i+1;
};