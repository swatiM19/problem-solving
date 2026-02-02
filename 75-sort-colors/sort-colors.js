/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const count = new Int32Array(3); // [0,0,0]
        for(let i=0; i<nums.length; i++){
            count[nums[i]]++;
        }
        // nums = [1, 0, 1, 2]
        // count [1,2,1]
        let index = 0;
        for(let i=0; i<3; i++){
            for(let j=count[i]; j>0; j--){
                nums[index] = i
                index++;
            }
        }
        return nums;
};