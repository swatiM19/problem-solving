/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length == 0) return 0;
            let candidate = nums[0];
            let count = 1;
            for(let i=1; i<nums.length; i++){
                if(count == 0){
                    candidate = nums[i];
                }
            
                if(nums[i] == candidate){
                    count += 1
                } else {
                    count -=1
                }
            }
            let cnt= 0;
            for (const num of nums) {
                if (num === candidate) cnt++;
            }
            return cnt > Math.floor(nums.length / 2) ? candidate : -1;
};